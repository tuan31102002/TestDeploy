from app.db import db

class RoomModel(db.Model):
    __tablename__ = 'rooms'
    roomID = db.Column(db.Integer , primary_key = True)
    roomName = db.Column(db.String(256),nullable=False)

    def __init__(self,roomName):
        self.roomName = roomName

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def convert_json(self):
        return {'roomID' : self.roomID , 'roomName' : self.roomName}

    @classmethod
    def find_by_name(cls,roomName):
        return cls.query.filter_by(roomName = roomName).first()

    @classmethod
    def get_all_rooms(cls):
        return cls.query.all()
