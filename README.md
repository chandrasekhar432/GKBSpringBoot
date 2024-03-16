Overview This web application allows users to input their data through a form, validates it, stores it in a MySQL database, and retrieves it to display in a tabular format. It is built using Java with the Spring Boot framework for the backend and utilizes HTML, CSS, and JavaScript for the frontend.

Setup Instructions:-

1.Clone the Repository: git clone GKBSpringBoot

2.Install Dependencies:

. Install the project from Spring.io add the dependecies like mysql-connector-j , spring- core , spring data - jpa then generate the project and extract the zip file import to eclipse.

3.Set Up MySQL Database: .Create a MySQL database and execute the SQL script provided in the database.sql file located in the project repository.

4.Run the Application: .Run By Using The Apache Tomcat Server to start the application

5.Access the Application: .Open your web browser and go to http://localhost:8080

Usage:-

Input Form: .Visit the provided link to access the input form. .Fill in the required fields: Name, Email, Age, and Date of Birth. .Click the submit button to send the data.

Validation: .The application performs client-side validation to ensure the email format is valid and the age is a positive integer. Error messages will be displayed if the input is invalid.

Data Storage: .Valid data submitted through the form is stored in the MySQL database.

Data Retrieval: .Access the endpoint /data to retrieve and display the stored data in a tabular format.

Project Structure:-

.src/: Contains the Java source code. .src/main/resources/: Contains application properties and SQL files. .src/main/webapp/: Contains HTML, CSS, and JavaScript files. .pom.xml: Maven project configuration file. .README.md: This documentation file.

Technologies Used:-

.Java .Spring Boot .MySQL .HTML .CSS .JavaScript .Maven'

Contributing:- .Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.
