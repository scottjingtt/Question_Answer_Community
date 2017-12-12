# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development client

1. Run `npm install`

2. Run `ng serve --open`

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


##Project Description(Client)

University-search:

Search function for places of type 'university' within a desired radius. radius defines the distance (in meters) within which to return place results. 

Use Google Places API Web Service to get a Key (AIzaSyCu2wmw2suniAVwjc8IUOYPmmEemHJbBls).

0. give permission for the browser to locate you.

1. Use Geolocation Service to Set current location coordinates, initMap with zoom level is 15 (street), place service and maker current location.

2. Give a radius and Use nearby search requests to search universities.

3. Show the results. The maximum number of results that can be returned is 60. 
