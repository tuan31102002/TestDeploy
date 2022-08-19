from blueprints.messages.models import MessageModel

def get_mess_by_roomID(roomID:int):
    messes = MessageModel.get_mess_by_roomID(roomID)
    result = []

    for mess in messes:
        result.append(mess.convert_json())
    
    return result
