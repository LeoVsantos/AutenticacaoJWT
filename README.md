**API de Autenticação COM JWT TOKEN**

# Description

 API de autenticação com JWT TOKEN

 * TYPEORM
 * Cache Information REDIS (Not used but ready to use)
 * Notifications (Not used but ready for use with MONGO DB)
 * Configured for use with Amazom Web Services

# In production
 - Avatar upload with AWS S3
 - Sending emails with AWS SES

# In development environment
 - Avatar upload with disk
 - Sending emails with Ethereal (https://ethereal.email)

# How to use
  Configure to environment variables .env (a .env.example)

  Install all dependences

  `$ yarn`

  Create `ormconfig.json` a ormexample.json

  Start to Dev Server
  
   `$ yarn dev:server`

 # Exec tests

 `$ yarn test`

# REST API JWT autenticate

API de autenticação com JWT TOKEN

Configurations of variable environments `.env` file.

`ormconfig.json` is a configuration to TYPEORM (PostgresSQL and MongoDB).
Use `ormconfig.example.json`

It uses `$ yarn typeorm run:migrations` to execute migrations

## Install dependences

    $ yarn

## Run the app dev

    `$ yarn dev:server`

## Run the tests

    `$ yarn test`

# REST API

The REST API to the example app is described below.


### Request
## Create a new user

`POST /users/`

      {
      "name": "User Example",
      "email": "user@example.com",
      "password": "example"
      }

### Response

    {
      "name": "User Example",
      "email": "user@example.com",
      "id": "54ffd6c0-2aef-4448-852e-9701b851763d",
      "created_at": "2020-06-05T08:00:24.226Z",
      "updated_at": "2020-06-05T08:00:24.226Z",
      "avatar_url": null
    }

## Create a new session

### Request

`POST /sessions/`

    {
      "email": "user@example.com",
      "password": "example"
    }

### Response

    {
      "user": {
      "id": "62a86215-609b-4668-b4d6-1f80589230ac",
      "name": "Example",
      "email": "user@example.com",
      "avatar": null,
      "created_at": "2020-04-27T08:19:27.854Z",
      "updated_at": "2020-06-07T02:14:03.037Z",
      "avatar_url": null
    },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTE1MTgzMDAsImV4cCI6MTU5MTYwNDcwMCwic3ViIjoiNjJhODYyMTUtNjA5Yi00NjY4LWI0ZDYtMWY4MDU4OTIzMGFjIn0.vMH9zdD143Y1OTIDY70eXI7DsLtO3xu6TvKU9uNP65w"
    }

## Upload Avatar

### Request

`PATCH /users/avatar`

    Content-Type: multipart/form-data

    {
      avatar: FILE
    }

### Response

    {
      "id": "54ffd6c0-2aef-4448-852e-9701b851763d",
      "name": "Example",
      "email": "user@example.com",
      "avatar": "b44adea164bd6e0c5d8f-avatar-test.png",
      "created_at": "2020-06-05T08:00:24.226Z",
      "updated_at": "2020-06-07T11:20:26.526Z",
      "avatar_url": "http://localhost:3333/files/b44adea164bd6e0c5d8f-avatar-test.png"
    }

## Update Profile

### Request

`PUT /profile`

      {
      "name": "Example",
      "email": "user@example.com",
      "old_password": "example",
      "password": "example123"
      }

### Response

      {
      "id": "54ffd6c0-2aef-4448-852e-9701b851763d",
      "name": "Example",
      "email": "user@example.com",
      "avatar": "b44adea164bd6e0c5d8f-avatar-test.png",
      "created_at": "2020-06-05T08:00:24.226Z",
      "updated_at": "2020-06-07T11:20:26.526Z",
      "avatar_url": "http://localhost:3333/files/b44adea164bd6e0c5d8f-avatar-test.png"
      }

## Show Profile

### Request

`GET /profile/`

   no content

### Response

      {
      "id": "54ffd6c0-2aef-4448-852e-9701b851763d",
      "name": "Example",
      "email": "user@example.com",
      "avatar": "b44adea164bd6e0c5d8f-avatar-test.png",
      "created_at": "2020-06-05T08:00:24.226Z",
      "updated_at": "2020-06-07T11:20:26.526Z",
      "avatar_url": "http://localhost:3333/files/b44adea164bd6e0c5d8f-avatar-test.png"
      }

## Forgot Password

### Request

`POST /password/forgot/`

     {
	    "email": "user@example.com"
     }

### Response

`HTTP/1.1 204 NO CONTENT`

## Change Password

### Request

`POST /password/reset`

    {
	    "password": "example123",
	    "token": "521ba11f-d622-445b-a1fd-c193fd440dbd"
    }

### Response

    HTTP/1.1 204 NO CONTENT


# USE AWS

Change .env to:

STORAGE_DRIVER=s3 (Utilize AWS S3 to upload avatar images)

MAIL_DRIVER=ses (Utilize AWS SES to mail sender)

# USE REDIS CACHE



# USE NOTIFICATIONS




