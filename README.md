My Neighborhood Map 'SUSHI RESTAURANTS IN BERGEN'
===============================

# Table of Contents

* [Description](#description)
* [Project Instructions](#project-instructions)
* [Progressive Web App and Service Worker](#Progressive-Web-App-and-Service-Worker)
* [Deploying](#deploying)
* [Tech used](#tech-used)

## Description

Neighbourhood Maps is Udacity's Front End Nanodegree last project, buildt with React, Google Maps JavaScript API and at least one 3rd-party API. 

The objective of this project was to create a Progressive Web App from scratch, without any starter code. The idea was to display a google map with markers for locations, as well as a list view of the same locations, and upon clicking on any of the places listed, have more info retrieved from a 3rd-party API and displayed on screen.

## Project Instructions

Note: This project was bootstrapped with Create-React-App. Refer to its Readme for more info on how to edit files and perform common tasks. [Create-React-App](https://github.com/facebook/create-react-app/blob/master/README.md "Read ME")


- Download the zip file or git clone this repository.
- Type `npm install` on your preferred terminal to install dependencies
- Type `npm start` on the terminal to start the project's server.
- Create-React-App will start a local server on http://localhost:3000. Just visit this address on your favorite browser to see the     project.
- With your server running, any changes you make to the project files will be immediately displayed on the browser (hot reload).

## Progressive Web App and Service Worker

Due to using Create-React-App to quickstart development, the production build is a fully functional, offline-first Progressive Web App:

All static site assets are cached. Updates are downloaded in the background.
The app works regardless of network state, even if offline.
On mobile devices, the app can be added directly to the user's home screen.
Service Worker
It's important to note the Service Worker is functional on the production build only and it is not recommended to activate the SW during development. For more information, please refer to Create-React-App Readme.

If you want to test the SW, follow this instructions:

- Run `npm run build` on the root of this project.
- `cd build` to move into the newly created Build folder.
- Run `npm run serve`.

Alternatively, you can install the serve package globally with `npm install -g serve` and then `run serve -s build` from the main project root. 
Your project will be served from port 5000. Just visit http://localhost:5000 to see the web app and test your Service Worker.

##Deploying

To create a production build of the project, including minified and compiled files, ready for deployment, run `npm run build` on the terminal. Create-React-App 
will generate a build folder that you can then upload to any web server.

##Tech used

- React.js
- Create-React-App
- Google Maps API
- FourSquare Places API
- Axios