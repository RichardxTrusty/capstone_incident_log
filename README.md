# Capstone - Major Incident Log

## A functional CRUD application in React aimed at facilitating efficient incident documentation.

Major Incident-Log is an efficient ticketing and note-taking tool that streamlines communication between DevOps and non-technical teams. It documents incidents and their resolutions, effectively bridging knowledge gaps. With a centralized information source, it minimizes the time spent gathering incident details, thus enhancing overall team efficiency in resolving issues.
Tech Stack

## Technologies Used

- React
- Express.js
- MySQL
- Knex.js

### Prerequisites

- Node.js installed
- MySQL installed and running

### Installation

Clone the repository: git clone https://github.com/RichardxTrusty/capstone_incident_log

1. Navigate to the project directory: cd capstone_incident_log
2. Install backend dependencies: cd server && npm install
3. Start the Express server: npm start
4. Open a new terminal window/tab
5. Navigate to the front end directory: cd client
6. Install frontend dependencies: `npm install`
7. Start the React development server: npm start

## Screen Shot Images

![Incident List](<Image 2023-11-19 at 12.47 PM.jpg>)
![Incident Log](<Image 2023-11-19 at 12.48 PM.jpg>)

## Lessons Learned & Next Setps

- A significant lesson I gleaned from this project pertained to scope. While I aimed to include features like using AI for summarizing incident logs in the first iteration of the application, time constraints prevented me from fully developing these ideas.
- For future enhancements, my next steps involve implementing a login page to authorize and differentiate users. Additionally, I aim to create a method to resolve incidents without deleting them from the database, allowing the issues to be stored for historical review. Lastly, I plan to incorporate a chatbot for analyzing and summarizing all log items
