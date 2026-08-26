# User Form Backend

Spring Boot backend for the React User Form application with MySQL database.

## Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- MySQL 8.0 or higher

## Setup Instructions

### 1. Create MySQL Database

Open MySQL and run the following commands:

```sql
CREATE DATABASE user_form_db;
USE user_form_db;

CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    age INT NOT NULL,
    message LONGTEXT,
    created_at BIGINT NOT NULL
);
```

### 2. Update MySQL Credentials

Edit `src/main/resources/application.properties`:

```properties
spring.datasource.username=root
spring.datasource.password=1806
```

Replace `YOUR_PASSWORD` with your MySQL root password. If no password, leave it empty.

### 3. Build the Project

```bash
mvn clean install
```

### 4. Run the Application

```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

## API Endpoints

### Create User (POST)
```
POST /api/users
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "age": 25,
    "message": "Hello"
}
```

### Get All Users (GET)
```
GET /api/users
```

### Get User by ID (GET)
```
GET /api/users/{id}
```

### Update User (PUT)
```
PUT /api/users/{id}
Content-Type: application/json

{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "0987654321",
    "age": 26,
    "message": "Updated"
}
```

### Delete User (DELETE)
```
DELETE /api/users/{id}
```

## CORS Configuration

The backend is configured to accept requests from `http://localhost:5173` (default React dev server).

## Project Structure

```
user-form-backend/
├── src/
│   ├── main/
│   │   ├── java/com/example/userform/
│   │   │   ├── UserFormApplication.java
│   │   │   ├── controller/UserController.java
│   │   │   ├── service/UserService.java
│   │   │   ├── repository/UserRepository.java
│   │   │   └── entity/User.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
└── pom.xml
```

## Troubleshooting

### Error: Access denied for user 'root'@'localhost'
- Update the password in `application.properties`

### Error: Unknown database 'user_form_db'
- Create the database using the SQL commands above

### Port 8080 already in use
- Change the port in `application.properties`: `server.port=8081`
