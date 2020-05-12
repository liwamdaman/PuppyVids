from models import *
import random

def queryRandomVideo():
    videos = Videos.query.all()
    return videos[random.randint(0,len(videos)-1)]

#def insertVideo():
#    video = Videos(videoID='')