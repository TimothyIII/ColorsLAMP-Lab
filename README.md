# Colors Web App
## Overview
COLORS is a simple full-stack web application that allows authenticated users to store and search for color names associated with their account. The project demonstrates a basic client–server architecture using a REST-style API, a relational database, and a browser-based frontend.  
The application was built to illustrate core web development concepts, including API design, database integration, authentication, and separation of frontend and backend concerns.
## Technologies Used
### Backend
- Linux (Ubuntu)
- Apache (Web server)
- MySQL (Relational database)
- PHP (REST API endpoints)
### Frontend
- HTML
- CSS
- JavaScript
- AJAX / Fetch API
### Infrastructure
- LAMP Stack
- Hosted on a cloud VPS (e.g., DigitalOcean)
## Repository Structure
```
/
├── LICENSE
├── index.html
├── color.html
├── css/
├── js/
├── images/
├── API/
│   ├── Login.php
│   ├── AddColor.php
│   └── SearchColors.php
└── README.md
```
## High-Level Setup Instructions
A Linux server with root or sudo access is assumed.
1. Provision a LAMP server.
   - Ubuntu-based system
   - Apache, MySQL, and PHP installed and running
2. Clone the repository.
3. Deploy files.
   - Copy frontent files to ```/var/www/html```
   - Copy API files to ```/var/www/html/LAMPAPI```
4. Configure the database.
   - Create a MySQL database
   - Create required tables (Users, Colors)
   - Insert initial test data (optional)
5. Update API credentials.
   - In each PHP API file, configure:
   ```
   $conn = new mysqli("localhost", "database_username", "database_password", "database_name");
   ```
## How to Run and Access the App
1. Ensure Apache and MySQL are running.
2. Open a browser and navigate to your dedicated domain or ip.
3. Log in using an existing test user or create a one directly in the database.
4. Try to add new colors and search for colors associatd with your user account.
## API Endpoints
All endpoints use ```POST``` and ```application/json```.
- /API/Login.php
  - Authenticates a user
- /API/AddColor.php
  - Adds a color for a user
- /API/SearchColors.php
  - Searches colors for a user
## Assumptions, Limitations, and AI Usage
### Assumptions
The application is deployed on a trusted server environment.  
Users are pre-created in the database or inserted manually.  
The project is intended for instructional/demo purposes.  
### Limitations
No HTTPS configuration included by default.  
Password hashing uses a basic hashing approach (not production-grade).  
No role-based access control.  
Minimal input sanitization beyond core validation.  
### AI Usage Disclosure
This project was developed with assistance from generative AI tools:
- **Tool**: ChatGPT (GPT-5.2, accessed via chatgpt.com)
- **Dates**: February 14-15, 2026
- **Scope**: README file generation.
- **Use**: Generated initial README (slightly modified), provided
explanations that furthered my understanding of proper Git etiquette.

All AI-generated code was reviewed, tested, and modified to meet
assignment requirements. Final implementation reflects my understanding
of the concepts.