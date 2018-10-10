# jobboard

A simple Job Board with user authentication

## Requirements
1. [Node.js and npm](http://nodejs.org)
2. [Docker](http:///docker.com)
3. [MongoDB](http://mongodb.com)

## URL

## Install

1. Clone this repo
```bash
git clone https://github.com/josewhitetower/jobboard.git
```
2. A .env file is needed in /server/ folder with the following content
```
// .env

DB_URL=your database url
BACKEND_PORT=your port
```
3. A config.js file is needed in /client/config with the following content 
https://developers.google.com/maps/documentation/javascript/get-api-key

```js
// config.js

module.exports = {
  API_KEY: 'your google api key'
}

```

4. Run docker:
```bash
docker-compose up --build
```

