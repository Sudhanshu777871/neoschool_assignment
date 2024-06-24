# Contacto - Contact Management App
### Overview
Contacto is a contact management application with a Node.js backend using Express.js and MongoDB (Atlas). It provides APIs for user authentication and managing contacts with encrypted storage.

## Features
Login API: Authenticate user and issue JWT tokens.
Create Contact API: Add new contacts with encrypted details.
Edit Contact API: Update existing contact information.
Search Contact API: Search contacts by name.

### Prerequisites
Node.js (v14 or later)
MongoDB Atlas (for a cloud database)
Git

## Getting Started
### clone the Repository
git clone https://github.com/Sudhanshu777871/neoschool_assignment.git

### Install Dependencies
npm install

## Environment Configuration
> Create a .env file in the project root directory and add the following configurations:
##### MongoDB URI (replace with your MongoDB Atlas connection string)
MONGO_URI="#"

##### JWT Secret
JWT_SECRET="as2809"

##### Encryption Key (64 hex characters for aes-256-cbc)
ENCRYPTION_KEY="709a0d6f86a13b2f39d1ee4ca029e1a29d41b033cae86c58e6e1d74437b7bde8"

##### Encryption IV (32 hex characters)
ENCRYPTION_IV="208982adc67e43750a5e170c26230ec4"

##### Server Port
PORT=3000
> Note: Generate a 32-byte hex key and a 16-byte hex IV for encryption. Use a secure tool for generating these keys.

### Run the Application
node app.js Or nodemon app.js

> The server will start on the port specified in the .env file (default: 3000).

## API Endpoints

###  Login API
> URL: /api/auth/login
> Method: POST

### Create Contact API
> URL: /api/contacts/create
> Method: POST
> Headers: Authorization: Bearer your_jwt_token

### Edit Contact API
> URL: /api/contacts/edit
> Method: PATCH
> Headers: Authorization: Bearer your_jwt_token

### Search Contact API
> URL: /api/contacts/search
> Method: POST
> Headers: Authorization: Bearer your_jwt_token
