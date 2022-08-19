from sqlalchemy import  Column,Integer, MetaData, Table , String, create_engine


engine = create_engine('sqlite:///data.sqlite')


metadata = MetaData()

users = Table('users' , metadata,
    Column('id' , Integer ,  primary_key = True),
    Column('username' , String(256)),
    Column('password' , String(256)),
    Column('rePassword' , String(256)),
    Column('telephone' , String(256)),
    Column('mail' , String(256)),
    Column('date' , String(256)),
    Column('avatar' , String(256)),
    Column('count', Integer),
    Column('locktime', Integer) 
)

messages = Table('messages' , metadata ,
    Column('messageID' , Integer , primary_key = True),
    Column('roomID' , Integer),  
    Column('userID', Integer),
    Column('message', String)
)

rooms = Table('rooms' , metadata,
    Column('roomID' , Integer , primary_key = True),
    Column('roomName' , String(256))
)


metadata.create_all(engine)