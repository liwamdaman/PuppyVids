from flask import Flask
from flask import request

app = Flask(__name__)

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
