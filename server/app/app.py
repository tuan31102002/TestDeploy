from socket import socket
from flask import Flask, redirect, render_template, request, session
from flask_jwt_extended import JWTManager, get_jwt_identity, jwt_required
from flask_restful import Api
from blueprints.users.route import user_master
from blueprints.rooms.router import room_master
from blueprints.messages.route import message_master
from flask_cors import CORS
from flask_socketio import SocketIO, send, join_room, leave_room, emit
from blueprints.messages.models import MessageModel
from blueprints.users.models import UserModel
from blueprints.rooms.models import RoomModel
import time


# app = Flask(__name__, template_folder='templates')
app = Flask(__name__, instance_relative_config=True,
            template_folder='../../client/dist')


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS-'] = False



CORS(app, resource={r"/*": {"origins": "*"}}, allow_headers=[
    "Content-Type", "Authorization", "Access-Control-Allow-Origin", "Access-Control-Allow-Headers", "cache-control", "Pragma", "Expires","Access-Control-Allow-Credentials"], supports_credentials= True)

socketio = SocketIO(app, cors_allowed_origins='*')

api = Api(app)

app.config['SECRET_KEY'] = "12345678"
app.config["JWT_SECRET_KEY"] = "jose"
app.config['JWT_TOKEN_LOCATION'] = ['cookies']
app.config['JWT_ACCESS_COOKIE_PATH'] = '/'
app.config['JWT_REFRESH_COOKIE_PATH'] = '/token/refresh'
app.config['JWT_COOKIE_CSRF_PROTECT'] = False
jwt = JWTManager(app)

app.register_blueprint(user_master)
app.register_blueprint(room_master)
app.register_blueprint(message_master)


# @socketio.on('message')
# @jwt_required()
# def handle_message(data):
#     data1 = get_jwt_identity()
#     print('recevied message : ' + data)
#     user = UserModel.find_by_name(data1)
#     time_stamp = time.strftime('%b-%d %I:%M%p', time.localtime())

#     if user:
#         message = MessageModel(roomID=1, userID=user.id, message=data)
#         message.save_to_db()
#         send(data1 + ' : ' + data + '(time :  ' + time_stamp + ' )', broadcast=True)


@socketio.on('chat_room')
def chat_room(data):
    mess = data['mess']
    room = data['room']
    userID = data['userID']
    roomDB = RoomModel.find_by_name(room)
    user = UserModel.find_by_id(userID)
    if roomDB and user:
        message = MessageModel(roomID=roomDB.roomID, userID=user.id, message=mess)
        message.save_to_db()
        emit("msg_room", user.username + " : " + mess, room=room)
    else :
        send('failed message')


@socketio.on('join')
def on_join(data):
    room = data['room']
    userID = data['userID']
    join_room(room)
    roomDB = RoomModel.find_by_name(room)
    user = UserModel.find_by_id(userID)
    if roomDB and user:
        emit("msg_room", user.username + " has joined the " + room + " room.", room=room)
    else:
        send('Not found room')


@socketio.on('disconnect')
def test_disconnect():
    print('[DISCONNECTED] ' + request.sid)


@app.route("/", defaults={"path": ""})
def root(path):
    return main("index.html")


def main(path):
    return render_template("index.html")

@app.route("/home/<path:path>")
def home(path):
    return main(path)



# @app.route('/')
# def home():
#     return render_template('home.html')

# @app.route('/hi')
# def home1():
#     return render_template('protected.html')

@app.route('/homechat')
def home3():
    return render_template('homechat.html')
