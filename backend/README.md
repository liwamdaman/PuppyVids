before running startup.sh for the first time, run:

```
docker run --name my-postgres -e POSTGRES_PASSWORD=[password] -d -p 5432:5432 postgres
```



create flaskAppSettings.cfg that contains the following:

```
SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:[password]@[host IP]:5432/postgres'
API_KEY = '[valid google API key for youtube data API]'
```