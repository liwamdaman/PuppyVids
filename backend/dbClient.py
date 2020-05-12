from models import *
import random

def queryRandomVideo():
    videos = Videos.query.all()
    return videos[random.randint(0,len(videos)-1)]

# params are all strings
def insertVideo(videoID, title, author):
    video = Videos(videoID=videoID, title=title, author=author)
    db.session.add(video)
    db.session.commit()