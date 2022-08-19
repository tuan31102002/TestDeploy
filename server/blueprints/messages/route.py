from http import HTTPStatus
from flask import Blueprint,jsonify
from blueprints.messages import controller as mess_ctrl

message_master: Blueprint = Blueprint('message_master', __name__)

@message_master.route('/mess/<roomID>', methods = ['GET'])
def get_mess_in_room(roomID):
    try:
        roomID = int(roomID)
        mess = mess_ctrl.get_mess_by_roomID(roomID)
        status = HTTPStatus.OK
        return mess,status
    except Exception:
        content = {
            "message" : "Get all messages failed"
        }
        status = HTTPStatus.INTERNAL_SERVER_ERROR
    return jsonify(content),status