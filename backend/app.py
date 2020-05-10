from flask import Flask
from flask import request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_envvar('APPLICATION_SETTINGS')
#print(app.config['SQLALCHEMY_DATABASE_URI'])

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from models import *

@app.route('/')
def hello():
    return 'hello world'

@app.route('/videos', methods=['GET', 'POST'])
def videos():
    if request.method == 'GET':
        return {
            "id": "D-UmfqFjpl0",
            "title": "hehehehe",
            "author": "William Li"
        }
