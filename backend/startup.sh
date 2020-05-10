export FLASK_APP=app.py
export APPLICATION_SETTINGS=./flaskAppSettings.cfg

#docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
docker start my-postgres
flask run