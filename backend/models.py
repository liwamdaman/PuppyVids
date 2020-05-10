from app import db

class Videos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    videoID = db.Column(db.String(64))
    title = db.Column(db.String(128))
    author = db.Column(db.String(64))