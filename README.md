# K1 Weather

To see Live Demo check this [link](https://karianpour.github.io/k1weather/) out.

# What is it

Build a single-page web application using React JS that allows users to look up current weather information for cities around the world and add cities to a “favorites” list.

### Requirements
- Use a real-time world weather API service such as weatherstack.com. (I used weatherapi.com)
- By default, users should be shown a list of the 15 largest cities in the world by population in alphabetical order and the current temperature for each.
- Users should be able to remove these entries individually from the list to clean it up.
- Clicking on a city in the list should open a page where the user can see more weather information.
- This view should include a textarea field where the user can enter and save notes. Users should also be able to edit and remove notes.
- Users should be able to use a search field to look up weather details for other cities.
- Users should be able to add/remove cities as “favorites” which will appear at the top of the list on the home screen (also in alphabetical order).
- Except for the “search” feature, the app should retain basic functionality offline. The most up-to-date information should be cached and persist in local storage.
- The program should be built entirely as a front end application.
- There should be no back-end or database (use only local storage).
- EXTRA (required for middle-senior and senior candidates) Ask the user for permission to get their current location and open the details page for their city after they grant it.
- Functionality should be appropriately divided into well-defined components.
- Include unit testing for applicable functionality.
- The application should have a production-ready clean/modern aesthetic.
- Creatively stylize the elements as you see fit, but do not use a UI framework (i.e. - Material UI, Semantic UI, React Bootstrap, etc.)
- Include screenshots and documentation in a README.md file.
- Any personal details, such as name and email address, should not be in any of the code files included in your solution.

## Thoughts and Decisions

- Using JSS for styling is a personal preference.
- For global state management I use MobX-State-Tree.
- This project seems to need internationalization in near future, so I included it in the project.
- For layout, I use flexbox.

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3180](http://localhost:3180) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
For code coverage use `npm test -- --coverage --watchAll=false`

### `npm run build`

To build the project

### `npm analyze`

To analyze the js-boundles after building it.

### `npm run deploy`

To deploy on github pages