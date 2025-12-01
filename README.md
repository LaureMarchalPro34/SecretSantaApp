# SecretSantaApp

This project is an app to allow users to draw secret santa for holidays gifts.
There is a front-end app in Angular21, a back-end server in Node.js and uses a PostgreSQL database.

## Node Server

Before launching the server, set up your environment variables :
create a .env file at the root of the server folder and add the following variables in the file :

```js
PORT = 3000;
NODE_ENV = development;
DB_HOST = $db_host;
DB_USER = $db_user;
DB_PASS = $db_password;
DB_PORT = $db_port;
DB_NAME = $db_name;
```

## Development server

To start a local development server, run:

```bash
cd server
node server.js
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
