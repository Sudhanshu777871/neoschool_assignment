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
```
git clone https://github.com/Sudhanshu777871/neoschool_assignment.git
cd neoschool_assignment-master
```

### Install Dependencies
npm install

## Environment Configuration
Create a .env file in the project root directory and add the following configurations:
##### MongoDB URI (replace with your MongoDB Atlas connection string)
> MONGO_URI="#"

##### JWT Secret
> JWT_SECRET="as2809"

##### Encryption Key (64 hex characters for aes-256-cbc)
> ENCRYPTION_KEY="709a0d6f86a13b2f39d1ee4ca029e1a29d41b033cae86c58e6e1d74437b7bde8"

##### Encryption IV (32 hex characters)
> ENCRYPTION_IV="208982adc67e43750a5e170c26230ec4"

##### Server Port
> PORT=3000

### Run the Application
> node app.js Or nodemon app.js

The server will start on the port specified in the .env file (default: 3000).

## API Endpoints

###  Login API
```
> URL: /api/auth/login
> Method: POST
> Request Body:
{
  "username": "saltman",
  "password": "oai1122"
}
```

### Create Contact API
```
> URL: /api/contact/create
> Method: POST
> Headers: Authorization: Bearer your_jwt_token
> Request Body:
{
  "name": "Sudhanshu",
  "phone": 1234567890,
  "email": "sudhanshu.sk@example.com",
  "linkedin": "https://linkedin.com/in/sudhanshu",
  "twitter": "@sudhanshu"
}

```

### Edit Contact API
```
> URL: /api/contact/edit
> Method: PATCH
> Headers: Authorization: Bearer your_jwt_token
> Request Body:
{
  "name": "Sudhanshu",
  "email": "sudhanshu.sk@newdomain.com"
}

```

### Search Contact API
```
> URL: /api/contact/search
> Method: POST
> Headers: Authorization: Bearer your_jwt_token
> Request Body:
{
  "search_token": "name"
}

```
