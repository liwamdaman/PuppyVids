from flask import Flask
from flask import request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
#import dbClient

app = Flask(__name__)
app.config.from_envvar('APPLICATION_SETTINGS')
#print(app.config['SQLALCHEMY_DATABASE_URI'])

db = SQLAlchemy(app)
migrate = Migrate(app, db)

import dbClient

@app.route('/')
def hello():
    return 'hello world'

@app.route('/videos', methods=['GET','POST'])
def videos():
    if request.method == 'GET':
        video = dbClient.queryRandomVideo()
        return {
            "id": video.videoID,
            "title": video.title,
            "author": video.author
        }
    #if request.method == 'POST':

        #AIzaSyC4tATsCOUCoxe9XxfgLkkWYqUlFYMY6M4
        #dbClient.insertVideo(username)