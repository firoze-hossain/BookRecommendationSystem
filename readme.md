# Book Recommendation System<br>
## Project Description<br>
The Book Recommendation System is a web application that provides personalized book recommendations to users based on their interests and reading history. The system uses a combination of user input and has algorithms to generate recommendations.<br>

## Project Architecture<br>
The application is built using a client-server architecture. The frontend is developed using React.js, which communicates with the backend API built with Spring Boot. The backend uses MySQL database to store user data and book information.<br>

## Folder Architecture<br>
### # book-recommendation-system<br>
** Backend:**<br>
├── src<br>
│   ├── main<br>
│   │   ├── java                # Java source files<br>
│   │   │   └── com<br>
│   │   │       └── roze<br>
│   │   │               ├── config        # Application configurations<br>
│   │   │               ├── controller    # API controllers<br>
│   │   │               ├── dto    # Data Transfer<br>
│   │   │               ├── entity         # Entity classes<br>
│   │   │               ├── repository    # Data repositories<br>
│   │   │               ├── security      # Security configurations<br>
│   │   │               ├── service       # Business logic services<br>
│   │   │               └── BookRecommendationBackendApplication.java  # Main<br> 
│   │   ├── resources           # Resource files<br>
│   │   │   ├── application.yml  # Application properties<br>
│   │   │   ├── book_recom_db.sql       # SQL script for initial data import<br>
│   └── test<br>
│   │    └── java                # Test source files<br>
│   │    │ └── com<br>
│   │    │            └── roze<br>
│   │    │                └── BookRecommendationBackendApplicationTests<br>

**frontend:**<br>
├── public # Public directory<br>
│ └── index.html # Main HTML file<br>
├── src # Source files<br>
│ ├── components # React components<br>
│ │ ├── Navbar.js # Navbar component<br>
│ ├── pages # Page components<br>
│ │ ├── Home.js # Home page<br>
│ │ ├── Login.js # Login page<br>
│ │ ├── Profile.js # Profile page<br>
│ │ ├── Recommendations.js # Recommendations page<br>
│ │ └── Register.js # Register page<br>
│ ├── App.css # Main CSS file<br>
│ ├── App.js # Main React component<br>
│ ├── index.css # Index CSS file<br>
│ ├── index.js # Main JavaScript file<br>
│ ├── Login.css # Login CSS file<br>
│ ├── logo.svg # Login CSS file<br>
│ └── Navbar.css # Navbar specific CSS<br>
│ ├── Register.css # Register CSS file<br>
├── .gitignore # Git ignore file<br>
├── package.json # NPM package configuration<br>
├── package-lock.json # NPM package configuration for lock<br>
├── README.md # Project README file<br>

## Developer Guidelines<br>
Clone the repository: git clone https://github.com/firoze-hossain/BookRecommendationSystem.git <br>
**Install dependencies:**<br>
Frontend: cd frontend && npm install<br>
Backend: cd backend && mvn install<br>
**Start the development server:******<br>
**Frontend:** cd frontend && npm start<br>
**Backend:** cd backend && mvn spring-boot:run<br>
## Deployment Guidelines<br>
**Backend:**<br>
Build the JAR file: cd backend && mvn package<br>
Run the JAR file: java -jar target/app.jar<br>
**Frontend:**<br>
Build the production files: cd frontend && npm run build<br>
Serve the production build: serve -s build<br>
## Technology Used<br>
**Frontend:** React.js, React Router, Axios, Bootstrap<br>
**Backend:** Spring Boot, MySQL, Hibernate, JWT for authentication<br>
## Features<br>
User authentication and authorization<br>
Search functionality to find books<br>
View book details and recommendations<br>
Save searched books<br>
## Swagger API Documentation<br>
Local URL: http://localhost:8085/api/v1/swagger-ui/index.html<br>
## Contributors<br>
Md. Firoze Hossain(@firoze)
