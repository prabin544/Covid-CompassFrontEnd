# Covid-CompassFrontEnd

## Index

* About our project
* How this works
* Design and animation
* Our Team 
* Technologies used
* Imgs
* Links

## About our project

This is the covid-compass app that engages the user to search covid data in different countries or any state in US. It was built to allow users to track covid cases and plan ahead accordingly.

## How this works

- User can clone repo
- cd project and run ```npm i```
- create ```.env``` file
- change value of REACT_APP_BACKEND_URL as per users backend repo setup
- run ```npm start```
- use [API COVID-19 Data](https://api.covid19api.com/)
- use [Google Maps API](https://developers.google.com/maps/documentation)
   * Please go to [Google Maps Platform](https://developers.google.com/maps/documentation/javascript/get-api-key#creating-api-keys) to create and use an Google Map API key. 

## Design and Animation
We chose a very neutral palette with pops of color. 

## Our Team
Prabin Singh, Louis Lassegue, Michael Hendricks

## Technologies used
[React.js](https://reactjs.org/), [Auth0](https://auth0.com/docs/), [Node.js](https://nodejs.org/en/docs/), [Axios](https://www.npmjs.com/package/axios), [React-Bootstrap](https://react-bootstrap.github.io/), [Mongoose](https://mongoosejs.com/), [MongoDB](https://docs.mongodb.com/guides/)

## Imgs
Welcome to the Landing page! The USER clicks login and authrorizes Auth0 to access google for authentication. 

![screenshot](public/imgs/landing.png?raw=true "Initial Page")

![screenshot](public/imgs/auth0.png?raw=true "Initial Page")

The main page, or homescreen, is where the USER can view  form to search for covid cases by Country name or state if USA is selected as country.

![screenshot](public/imgs/main.png?raw=true "Initial Page")

The GRAPH page - where the data is rendered using API call. Users will be able to search for different countries or save rendered data.

![screenshot](public/imgs/graph.png?raw=true "Initial Page")

User can click LogOut button which redirects them to Landing page.

![screenshot](public/imgs/logout.png?raw=true "Initial Page")

### FlowChart
 
![screenshot](public/imgs/Wireframe1.png?raw=true "Initial Page")  
![screenshot](public/imgs/Wireframe2.png?raw=true "Initial Page")  
![screenshot](public/imgs/Wireframe3.png?raw=true "Initial Page")  
![screenshot](public/imgs/Wireframe4.png?raw=true "Initial Page")  
![screenshot](public/imgs/Domain.jpg?raw=true "Initial Page") 


## Links

[Covid-Compass](https://www.cv19compass.xyz/)

[Link to backend Code](https://github.com/prabin544/Covid-CompassBackEnd)
