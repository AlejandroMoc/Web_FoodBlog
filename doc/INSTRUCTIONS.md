# Food Blog Project - Setup and Instructions

This document provides instructions on how to set up and run the Food Blog project locally. The project consists of a React frontend and a Node.js/Express backend connected to a PostgreSQL database.

## Prerequisites

Before you begin, it is important to have the following:

- [Node.js](https://nodejs.org/) (which includes npm)
- [PostgreSQL](https://www.postgresql.org/download/)
- [pgAdmin 4](https://www.pgadmin.org/download/)

---

## 1. Database Setup (PostgreSQL)

1. **Start PostgreSQL**:

   It is necessary to make sure that PostgreSQL server is running.

2. **Create the Database**:

   Use pgAdmin 4 or the `psql` command-line tool to create a new database for this project.

   ```sql
   createdb food_blog;
   ```

   Via PGAdmin, use the `dump/server.sql` dump file to restore the database in Postgres with the initial data.

---

## 2. Backend Setup (`/server` directory)

The backend is a Node.js application using the Express framework.

1. **Navigate to the server directory**:

   Navigate to the `/server` directory and install the npm dependencies.

   ```bash
   cd server
   npm install
   ```

