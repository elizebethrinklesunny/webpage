Simple Dashboard Application
This project is a simple dashboard layout built using React. The dashboard includes a header, a sidebar, and a main content area with two widgets: a Weather Widget and a Todo List Widget. The sidebar allows users to toggle the visibility of these widgets in the main content area.

Features
Header: Static header for the dashboard.
Sidebar: Contains buttons to toggle the visibility of different widgets in the main content area.
Weather Widget:
Fetches weather data from a public API ( OpenWeatherMap API).
Displays the current weather status (temperature, humidity, weather conditions) for a user-specified location. using Redux Api  calling
Includes a form to change the location.
Todo List Widget:
Allows users to add, delete, and mark todos as complete.
Manages the todo list using local state.
Save todos in local storage or a mock server.
Styling: Uses CSS or styled-components for a clean and functional design.
Responsive Design: mobile devices and web .
Installation
Clone the repository:

Copy code
git clone https://github.com/elizebethrinklesunny/webpage.git
cd dashboard-app
Install dependencies:

Copy code
npm install
Run the application:

Copy code
npm start


Usage
Weather Widget:
Enter a location in the form and press enter to fetch and display the current weather for that location.
Todo List Widget:
Add a new todo item by typing into the input field and pressing enter or clicking the add button.
Mark todos as complete by clicking on mark button.
Delete todos by clicking the delete button next to each item.
Project Structure
css
Copy code
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── Views
│   │   ├── Assets
|   |   |      |──Images
│   │   ├── components
|   |   |      |──Header.js
|   |   |      |──drawer.css
│   │   ├──config
│   │   └── Todolist
|   |   |      |──EditTodoForm.js
|   |   |      |──Todo.js
|   |   |      |──TodoForm.js
|   |   |      |──Todolist.css
|   |   |      |──TodoWrapper.js
|   |   |      |──TodoWrapperLocalstorage.js
│   │   └── Weather
|   |   |      |Weather.css
|   |   |      |WeatherWidget.js
│   ├── Dashboard
│   │   
│   ├── App.js
│   ├── index.js
│   └── styles.css
└── package.json
Components
Header.js: The header component for the dashboard.
Sidebar.js: The sidebar component with buttons to toggle widget visibility.
WeatherWidget.js: The component to fetch and display weather data.
TodoListWidget.js: The component to manage and display the todo list.
State Management

Styling
styles.css: Contains the basic styles for the application.
API Integration
OpenWeatherMap API: Used to fetch weather data for the Weather Widget. Ensure to replace the placeholder API key with your actual API key.
Responsive Design
The application layout is responsive, ensuring a good user experience on both desktop and mobile devices.
Enhancements
Save the todo list in local storage or a mock server for persistent storage.

Contributing
Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.


Contact
For any questions or feedback, please contact [charusunny124@gmail.com].