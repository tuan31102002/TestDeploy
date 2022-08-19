import time
import datetime
from flask import jsonify, redirect, render_template, request
from blueprints.users.models import UserModel
from app.db import db
import hmac
from flask_jwt_extended import create_access_token , create_refresh_token ,set_access_cookies, set_refresh_cookies


def register_user(**data):
    try:
        data = request.get_json()
        if UserModel.find_by_name(data['username']):
            raise ValueError("The user already exitis")

        user = UserModel(data)
        user.save_to_db()
    except Exception as ex:
        db.session.rollback()
        raise ex
    finally:
        db.session.close()


def login():
    try:
        data = request.get_json() 
        user = UserModel.find_by_name(data['username'])  
        if user is None:
            raise ValueError("The user not found")

        if user:
            if hmac.compare_digest(user.password, data['password']):  
                user.locktime == 0
                user.count = 0
                db.session.commit()
                access_token = create_access_token(identity=data['username'])    
                refesh_token = create_refresh_token(identity=data['username'])     
                resp = jsonify({'message' : 'Logged in successfully',
                                'id' : user.id,
                                'set_access_cookies' : access_token,
                                'set_refresh_cookies' : refesh_token
                })
                set_access_cookies(resp,access_token)
                set_refresh_cookies(resp,refesh_token)
                return resp

            else :
                user.count += 1
                db.session.commit()
                if user.count > 5 :
                    user.locktime = 30
                    db.session.commit()
                    raise ValueError("you have entered wrong more than 5 times")
                raise ValueError("Incorrect Password")
                    # if user.locktime > 0 :
                    #     while user.locktime > 0 :
                    #         user.locktime -= 1
                    #         time.sleep(1)
                    #         db.session.commit()
                    #         continue
                    #     return {'message' : 'you can wait {} second'.format(int(user.locktime)) }
                            
                        
                #     return {'message' : 'Incorect Passworddd'}
                # return {'message' : 'Incorect Password'}
        
    except Exception as ex:
        db.session.rollback()
        raise ex
    finally:
        db.session.close()


def get_user_by_id(user_id: int):
    user = UserModel.find_by_id(user_id)
    if user:
        return user.convert_json()
    return {'message': 'The user not found'}

def get_all_users():
    users = UserModel.get_all_users()
    # return user.convert_json()
    result = []

    for user in users:
        result.append(user.convert_json())

    return result


