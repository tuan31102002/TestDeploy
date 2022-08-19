from app.db import db

class MessageModel(db.Model):
    __tablename__ = 'messages'
    messageID = db.Column(db.Integer , primary_key = True)
    roomID = db.Column(db.Integer)
    userID = db.Column(db.Integer)
    message = db.Column(db.String)
    
    def __init__(self,roomID,userID,message):
        self.roomID = roomID
        self.userID = userID
        self.message = message
        

    # def __init__(self,content : dict):
    #     for key, value in content.items():
    #         setattr(self,key,value)

    def convert_json(self):
        inf_list = ['messageID', 'roomID' ,'userID', 'message']
        inf_list_DETAIL = [self.messageID, self.roomID ,self.userID, self.message]
                    
        mess_infor = {}
        for index, key in enumerate(inf_list):
            mess_infor[key] = inf_list_DETAIL[index]

        return mess_infor

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_mess_by_roomID(cls,roomID):
        return cls.query.filter_by(roomID = roomID).all()