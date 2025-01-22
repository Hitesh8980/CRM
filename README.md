# CRM Backend API

## Overview

This is the backend of a Customer Relationship Management (CRM) system, built with **Node.js**, **Express**, and **MongoDB**. The API allows for creating, updating, deleting, and retrieving customer data. It also includes authentication for secure access, and it's fully documented using **Swagger**.

## Features

- **Customer CRUD Operations**: Create, Read, Update, and Delete customers.
- **Authentication**: User authentication for secure access to the system.
- **Pagination & Filtering**: Get a paginated list of customers with search and filtering functionality.
- **Swagger Documentation**: API documentation accessible via Swagger UI.
- **Error Handling**: Comprehensive error handling and validation.

## Live Backend Link

You can access the live backend API at the following link:
- **Live API**: [Click](https://crm-w01f.onrender.com/customers/)

## Technologies Used

- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing customer data.
- **Swagger**: API documentation.
- **JWT (JSON Web Token)**: Authentication middleware.

## API Endpoints

### Authentication

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Login an existing user and get an access token.

### Customers

- **GET /customers**: Get a list of customers with pagination, search, and filtering options.
- **POST /customers**: Create a new customer.
- **GET /customers/{id}**: Get details of a specific customer by ID.
- **PUT /customers/{id}**: Update a customer's details.
- **DELETE /customers/{id}**: Delete a customer by ID.

## Getting Started

To run the CRM backend locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or use MongoDB Atlas)

### Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/crm-backend.git
   cd Back_end
     
2. **Install dependencies**:
    ```bash
    npm install
3. **Create a .env file in the root directory and add the following variables:**
   ```
    MONGO_URI=mongodb://localhost:27017/crm-db
    JWT_SECRET=your-secret-key
    PORT=5003
- Replace MONGO_URI with your MongoDB connection string (local or Atlas).
- Set a secret key for JWT authentication.
4. **Run the application:**
   ```
   npm run dev
- This will start the server on http://localhost:5000.
  
5. **Access Swagger Documentation: Open the following URL in your browser to view the Swagger API documentation**:
   ```
   http://localhost:5003/api-docs
   
## Testing the API

You can use Thunder Client or Postman to test the API endpoints:

1. Register a new user with a POST request to /auth/register.
2. Login with the registered credentials to receive a JWT token via a POST request to /auth/login.
3. Use the JWT token in the Authorization header as a Bearer token for authenticated routes.

## Example Request for Creating a Customer
POST /customers

Request Body:
    
    
    {
     "name": "John Doe",
     "email": "john.doe@example.com",
     "phone": "1234567890",
     "company": "Example Co."
     }

**Response (201 Created)**:

      json
       {
       "_id": "605c72ef1532071e8f3c0e19",
       "name": "John Doe",
       "email": "john.doe@example.com",
       "phone": "1234567890",
       "company": "Example Co.",
       "user": "605c72ef1532071e8f3c0e19"
       }

## Error Handling

The API provides detailed error messages in the response body, including the following common error codes:

- 400 Bad Request: Invalid data in the request body or query parameters.
- 401 Unauthorized: Missing or invalid JWT token.
- 404 Not Found: Resource (e.g., customer) not found.
- 500 Internal Server Error: Something went wrong on the server.
  
## Contributing

We welcome contributions to this project! If you'd like to help improve the CRM backend API, follow these steps:

**Fork the repository.**

1. Create a new branch for your feature or bug fix.
2. Make your changes and commit them.
3. Open a pull request with a description of your changes. 


     
