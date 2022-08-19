from flask import request
from blueprints.rooms.models import RoomModel
from app.db import db
def create_table():
    try:
        data = request.get_json()
        if RoomModel.find_by_name(data['roomName']):
            raise ValueError("The room already exitis")

        room = RoomModel(data['roomName'])
        room.save_to_db()
    except Exception as ex:
        db.session.rollback()
        raise ex
    finally:
        db.session.close()

def get_all_rooms():
    rooms = RoomModel.get_all_rooms()
    result = []

    for room in rooms:
        result.append(room.convert_json())

    return result