# Student Registration Docker Project

A simple student registration application built with Node.js, Express, and MongoDB. The project is containerized with Docker so it can be launched quickly in a consistent local environment.

## Overview

This application provides a basic registration form where users can sign up by entering their email, username, and password. The backend stores form data in a MongoDB database and exposes a lightweight REST API for retrieving registered users.

## Features

- User registration form
- Express.js backend
- MongoDB database integration
- Static frontend served from the `public` directory
- Docker support for easy local setup and deployment

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose

## Project Structure

```text
.
├── public/
│   ├── index.html
│   └── style.css
├── server.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .env
├── README.md
└── node_modules/
```

## Prerequisites

Before running the project, make sure you have the following installed:

- Docker
- Docker Compose
- Node.js (for local development without containers)

## Running with Docker Compose

1. Clone the repository:

```bash
git clone https://github.com/manaswinialakunta08/student-registration-docker.git
cd student-registration-docker
```

2. Start the application and database:

```bash
docker compose up --build
```

3. Open the app in your browser:

```text
http://localhost:5050
```

4. Stop the services:

```bash
docker compose down
```

## Local Development

If you want to run the app directly on your machine without Docker:

1. Install dependencies:

```bash
npm install
```

2. Start MongoDB locally on port `27017`.

3. Run the server:

```bash
npm start
```

## Environment Variables

| Variable | Description | Default |
| --- | --- | --- |
| `PORT` | The port used by the Express server | `5050` |
| `MONGO_URL` | MongoDB connection string | `mongodb://localhost:27017` |

## API Endpoints

### `GET /getUsers`
Returns all users stored in the database.

### `POST /addUser`
Creates a new user record in the MongoDB collection.

## Notes

- The application uses `apnacollege-db` as the database name and `users` as the collection name.
- Docker Compose configures the application to connect to MongoDB using the service name `mongo`.
- MongoDB data is persisted using a Docker volume so it remains available between restarts.

## License

This project is intended for learning and demonstration purposes.
