# Book Recommendation System<br>
## Project Description<br>
The Book Recommendation System is a web application that provides personalized book recommendations to users based on their interests and reading history. The system uses a combination of user input and has algorithms to generate recommendations.<br>

## Project Architecture<br>
The application is built using a client-server architecture. The frontend is developed using React.js, which communicates with the backend API built with Spring Boot. The backend uses MySQL database to store user data and book information.<br>

## Folder Architecture<br>
### # book-recommendation-system<br>
** Backend:**<br>
├── src
│   ├── main
│   │   ├── java                # Java source files
│   │   │   └── com
│   │   │       └── roze
│   │   │               ├── config        # Application configurations
│   │   │               ├── controller    # API controllers
│   │   │               ├── dto    # Data Transfer
│   │   │               ├── entity         # Entity classes
│   │   │               ├── repository    # Data repositories
│   │   │               ├── security      # Security configurations
│   │   │               ├── service       # Business logic services
│   │   │               └── BookRecommendationBackendApplication.java  # Main Spring Boot application class
│   │   ├── resources           # Resource files
│   │   │   ├── application.yml  # Application properties
│   │   │   ├── book_recom_db.sql       # SQL script for initial data import
│   └── test
│       └── java                # Test source files
│           └── com
│               └── roze
│                   └── BookRecommendationBackendApplicationTests<br>

**frontend:**<br>
├── public # Public directory
│ └── index.html # Main HTML file
├── src # Source files
│ ├── components # React components
│ │ ├── Navbar.js # Navbar component
│ ├── pages # Page components
│ │ ├── Home.js # Home page
│ │ ├── Login.js # Login page
│ │ ├── Profile.js # Profile page
│ │ ├── Recommendations.js # Recommendations page
│ │ └── Register.js # Register page
│ ├── App.css # Main CSS file
│ ├── App.js # Main React component
│ ├── index.css # Index CSS file
│ ├── index.js # Main JavaScript file
│ ├── Login.css # Login CSS file
│ ├── logo.svg # Login CSS file
│ └── Navbar.css # Navbar specific CSS
│ ├── Register.css # Register CSS file
├── .gitignore # Git ignore file
├── package.json # NPM package configuration
├── package-lock.json # NPM package configuration for lock
├── README.md # Project README file<br>

## Developer Guidelines<br>
Clone the repository: git clone https://github.com/firoze-hossain/BookRecommendationSystem.git <br>
**Install dependencies:**<br>
Frontend: cd frontend && npm install
Backend: cd backend && mvn install<br>
**Start the development server:******
**Frontend:** cd frontend && npm start
**Backend:** cd backend && mvn spring-boot:run<br>
## Deployment Guidelines<br>
**Backend:**<br>
Build the JAR file: cd backend && mvn package
Run the JAR file: java -jar target/app.jar<br>
**Frontend:**<br>
Build the production files: cd frontend && npm run build
Serve the production build: serve -s build<br>
## Technology Used<br>
**Frontend:** React.js, React Router, Axios, Bootstrap
**Backend:** Spring Boot, MySQL, Hibernate, JWT for authentication<br>
## Features<br>
User authentication and authorization
Search functionality to find books
View book details and recommendations
Save searched books<br>
## Swagger API Documentation<br>
Local URL: http://localhost:8085/api/v1/swagger-ui/index.html<br>
## Contributors<br>
Md. Firoze Hossain(@firoze)
