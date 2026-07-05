# Food Blog Project - Setup and Instructions

This document provides instructions on how to set up and run the Food Blog project locally. The project consists of a React frontend and a Node.js/Express backend connected to a PostgreSQL database.

## Prerequisites

Before you begin, it is important to have the following:

- [Node.js](https://nodejs.org/) (which includes npm)
- [PostgreSQL](https://www.postgresql.org/download/)
- [pgAdmin 4](https://www.pgadmin.org/download/)

## 1. Database Setup (PostgreSQL)

1. **Install and start PostgreSQL**:

   It is necessary to make sure that PostgreSQL server is running.

   For example, on Artix Linux with OpenRC:

   ```bash

   # Install PostgreSQL
   sudo pacman -S postgresql
   sudo pacman -S postgresql-openrc

   # Initialization
   sudo mkdir -p /var/lib/postgresql
   sudo chown -R postgres:postgres /var/lib/postgresql
   sudo -u postgres initdb -D /var/lib/postgresql/data

   sudo rc-update add postgresql default
   sudo rc-service postgresql start
   ```

2. **Create the database**:

   Use the `psql` command-line tool to create a new database for this project.

   ```bash
   # 
   sudo -u postgres psql
   ```

   ```sql

   // Create the DB
   CREATE DATABASE food_blog;

   // Give password if needed
   ALTER USER postgres WITH PASSWORD 'my_password';

   // Exit the console
   \q
   ```

   Go to the main path of the project and restore the `dump/server.sql` file, which is the initial data.

   ```bash
   pg_restore --clean --if-exists --no-owner --username=postgres --dbname=food_blog dump/server.sql
   ```


3. **Install pgAdmin 4**:

   ```bash
   yay -S pgadmin4-server-bin pgadmin4-desktop-bin

   sudo rc-update add postgresql default
   sudo rc-service postgresql start
   ```

   Once installed, run pgAdmin 4:

   ```bash
   /usr/pgadmin4/bin/pgadmin4
   ```

   Inside pgAdmin4, create a new server in the default "Servers" group in the sidebar.
   Right click the "Servers" group and create "Register".

   Inside the new interface write the following parameters:

   - Name: Localhost

   Inside the "Connection" tab:

   Host name/address: localhost
   Port: 5432
   Maintenance database: postgres
   Username: postgres
   Password: my_password (the pasword assigned previously)

   Finally click on "Save"
---

## 2. Backend Setup (`/server` directory)

The backend is a Node.js application.

1. **Navigate to the server directory**:

   Navigate to the `/server` directory of this project and install the npm dependencies.

   ```bash
   cd server
   npm install
   ```

2. **Create an environment file**:

   The server needs a `.env` file to store sensitive information like database credentials. Copy the file named `.env.example` in the `/server` directory to a new `.env` file.

   Modify the file correspondingly:

   ```env
   # PostgreSQL Database Connection
   DB_USER=username
   DB_HOST=localhost
   DB_DATABASE=food_blog
   DB_PASSWORD=my_password
   DB_PORT=5432
   ```

3. **Run the server**:

   Still inside the `/server` directory, run the backend:


   For development with automatic reloading (uses `nodemon`):
   ```bash
   npm run dev
   ```

   For production:

   ```bash
   npm start
   ```

   The server should now be running, typically on a port like `8800` or `3001`. Check the terminal output for the exact URL.

   ***

## 3. Frontend Setup (`/client`)

The frontend is a React application.

1. **Navigate to the client directory** (from the project's root):

   ```bash
   cd client
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the client**:

   ```bash
   npm start
   ```

4. **Access the application**:

This will automatically open a new tab in your web browser. 
If it doesn't, you can access it at [http://localhost:3000](http://localhost:3000).

---

<!-- 
## Project Scripts

### Server (`/server`)

- `npm run dev`: Starts the server in development mode with `nodemon`.
- `npm start`: Starts the server in production mode with NodeJS.

### Client (`/client`)

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Runs the test suite.
-->
