만약 mysql 서버가 실행되지 않았다면.
```
mysql.server start
mysql.server stop
```

db 실행
```
docker-compose up --build -d
```
db CLI 접속
```
docker exec -it mariadb_container bash
mariadb -p
[write password]
use [DATABASE NAME]

# show databases;
# show tables;
```
