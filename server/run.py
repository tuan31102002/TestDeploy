from app.app import app,socketio
from app.db import db

if __name__ == "__main__" :
    db.init_app(app)
    socketio.run(app ,  port=5000 , debug=True)