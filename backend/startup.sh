export FLASK_APP=app.py
export APPLICATION_SETTINGS=./flaskAppSettings.cfg

docker start my-postgres
flask run