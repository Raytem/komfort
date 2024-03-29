# Komfort App

## Description
The program being developed is designed to assess the level of functionality of materials for waterproof clothing and to store data on materials of various structures that have passed the evaluation procedure in whole or in part.

### Attention
To run the application you need to have docker and docker-compose installed! 

## Running the app
Go to the project directory and than write the following commands:

```bash
#give access to run the script (for mac & linux)
$ chmod +x ./init-user-db.sh

#running the app in a dev environment
$ docker-compose -f docker-compose-dev.yaml --env-file .env.dev up

#running the app in a prod environment
#before it you must create .env file
$ docker-compose up
```
## ROUTES

- http://localhost:80/server/api - API with SwaggerUI
- http://localhost:80/server/adminer - DB adminer
- http://localhost:80 - Other server routes