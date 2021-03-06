from flask import Flask, request, abort
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

app = Flask(__name__)
app.config.from_envvar('APPLICATION_SETTINGS')
CORS(app)

db = SQLAlchemy(app)
migrate = Migrate(app, db)

import youtubeAPIClient
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
        },200
    if request.method == 'POST':
        # assuming form includes youtubeURL, if not 400 response will be returned automatically by flask
        youtubeURL = request.form['youtubeURL']
        videoID = youtubeAPIClient.parseIDFromURL(youtubeURL)
        if videoID == None:
            return {
                "error":{
                    "code":400,
                    "message":"Invalid URL"
                }
            }, 400

        try:
            title = request.form['title']
            author = request.form['author']
        except KeyError:
            # title and author need to be determined
            title, author = youtubeAPIClient.getTitleAndAuthorFromVideo(videoID)
            if title==None or author==None:
                return {
                    "error":{
                        "code":500,
                        "message":"Internal Server Error"
                    }
                }, 500

        dbClient.insertVideo(videoID, title, author)

        return {
            "id": videoID,
            "title": title,
            "author": author
        }, 201