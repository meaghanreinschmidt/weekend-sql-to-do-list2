# Weekend SQL To-Do List

## Description

*Duration: 2 Weeks*

Here is a simple to-do application that allows you to track all of your daily tasks!

[Deployed version of app](https://secure-ocean-39272.herokuapp.com/)

## Screenshot

<img width="965" alt="Screen Shot 2022-08-15 at 2 55 57 PM" src="https://user-images.githubusercontent.com/98852538/184708026-a24e7ea9-4674-4f2f-83d0-77c87c174bbe.png">

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

1. Create a database in Postico named `weekend-to-do-app`
2. Run `npm install` in your terminal
3. Run `npm start` in your terminal
4. Navigate to `localhost:5001` in browser (change port number if necessary)
   
## Usage
1. As a user, I want to be able to enter a task into the input field and add it to the To-Do list. 
2. As a user, I want to click the checkmark to mark my task complete.
3. As a user, I want to click the trash can icon to delete my task from the list.

## Built With

1. ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
2. ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
3. ![image](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
4. ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
5. ![image](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
6. ![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
7. ![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
8. ![image](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
   
## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgement

Thanks to [Prime Digital Academy](https://www.primeacademy.io/) and the members of the Phrygian cohort who equipped and helped me to make this application a reality. 

## Support 

If you have suggestions or issues, please email me at [mreinschmidt@hotmail.com](mailto:mreinschmidt@hotmail.com)

## Project Checklist

### Setup
- [X] Set up base README
- [X] Create project file structure
- [X] Set up server and nodemon
- [X] Set up base HTML
- [X] Set up base CSS
- [X] Style task table

### Functionality
- [X] Create click handler for task-submit button
- [X] Create GET request in server code
- [X] Create GET function in client to get tasks 
- [X] Create POST function in client to send task to server
- [X] Create POST request in server code
- [X] Shift server code to router

### SQL
- [X] `npm install pg`
- [X] Create a database titled `weekend-to-do-app` in Postico
- [X] CREATE TABLE with "id", "task", "complete"
- [X] Add pool.js file into project
- [X] Change database in pool.js to match database title
- [X] Add `const pool` variable in router.js
- [X] Add query code to GET request
- [X] Add query code to POST request
- [X] Create clear input field function 
- [X] Create delete button functionality in client.js
- [X] Create DELETE request in server code
- [X] Create complete button functionality in client.js
- [X] Create PUT request in server code
- [X] Create if statement to change task to line-through when completed
### Stretch Goals

- [X] Switch styling to Bootstrap
  
### Other
- [X] Finalize README
- [X] Add License
- [X] Create datase.js file
- [X] Deploy to Heroku 
