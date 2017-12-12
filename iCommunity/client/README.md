# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development client

1. Run `npm install`

2. Run `node server.js` to start server project. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Project Description(Client)

1. initial page is `http://localhost:4200` which will show the welcome page of our application.
2. after the welcom page, the default page is question page which will show all the academic questions posted in this website.
3. when user tries to view any answers of a certain question, they need to login first.
4. after user registered and logged in, they can see all the answers.
5. all users can post questions but only professor identity can answer questions.
6. user can navigate to search page from nav bar, which allows user to search someone's github repository and redirect to one of them.
7. user can navigate to universities page from nav bar, which allows user to get all the universities nearby based on a radius value.
8. user can also search any professor's information and search question from the "Find Questions/Professors" block.
9. user can delete their question in "myquestion" block.

## Questions

### Questions has four related component: question, question-detail, question-search and myquestions

1. Question component used `getAllQuestions()` to get all questions from database, used `getQuestionByCategory()` to get questions based on categories user selected. All of these method is provided by `QuestionsService` in services file.
2. Question-detail component used `getQuestion()` function which will retrieve question based on question id. also used `updateQuestion` function which will update question when new answer is posted by some user.
3. MyQuestions used `getQuestionByUser()` to get all questions based on the creator. Also used `deleteQuestion` to delete the question from database. All of those functions are provided by `QuestionService` in services file.
4. `QuestionService` provides services for question related problem. it has search function based on question title, creator, question id, also update and delete function, all of them have a corresponding function on server side(3000 protocol server).

## User

### User part has 5 main components: Register,Login,Home,Admin,Profile

### Two services: UserService, AuthenticationService

UserService ,AuthenticationService and AlertService
1. User registration
User can create new account through `UserService`. Except basic information, user also can use "gravatar link" to set user image. All information of registration form are `required` and user `Regular Expressions` to validate "username" and "email" input.This form will be sent to server by `UserService.create`.
2. User login
User can login by `AuthenticationService.login` with "username" and "password"。Once logged in, the server will response the logged in user's information and `token`, then store them in `local storage` as "currentUser".
3. User logout
User click "logout" button will call `AthenticationService.logout` then will clear `local storage`, and browser will lose all information about "currentUser".
4. Logged in user's profile and update user information
Once login, user can navigate to `profile` component to view "currentUser" personal information. The user can also click "Edit profile" to update profile. Use `Two-way data binding` to edit and show user's information in real time.The updated information form will be sent to server by `UserService.update` and this will return "currentUser" information after updating.
5. Alert
There is a seperate element tag `alert` in "AppComponent.html" to show error messages catched.
6. Admin
There is a special kind of user whose identity is "admin", which can not be created normally. Developers can create "admin" users directly in back-end database. Once logged in user's identity is "admin", it can view all users' list by `UserService.getAll()` and can also delete user from database by `UserService.delete()`.
7. Author information
In question list page and question detail page, once user click question's or answer's name, will pop out an alert to show author's email address. This author's email is gathered by `UserService.getById()`.
8. Token
We have re-write http requests to create some functions will send requests to server along with `token` which is stored in `local storage`. Because of that, user don't have to send "user and password" again and again to gain authentication after user has logged in.

## Picture Wall(PictureWallComponent)

1. Picture wall: Main page of this project. Before user click to navigate to login page, there will be a picture wall to show several universities' pictures. Users can click each picture to zoom in. And there is one picture user can click to navigate to login page.
Basically achieve this page with CSS stylesheet and `Output, EventEmitter` to send variable to its parent element to decide if user has clicked to show login page.

## University-search:

### University-search has two related components: university-search and university-search-result

It is a Search function for places of `type` : `university` within a desired `radius`. radius defines the distance (in meters) within which to return place results. 

1. Use `Google Places API Web Service` to get a Key `AIzaSyCu2wmw2suniAVwjc8IUOYPmmEemHJbBls`.
2. give permission for the browser to locate you.
3. Use Geolocation Service `geolocation.getCurrentPosition()` to Set current location coordinates, initMap with zoom level is 15 (street), place service and maker current location.
4. Give a radius and Use callback method to nearby search requests `nearbySearch()` to search universities.
5. Show the results. The maximum number of results that can be returned is 60. 

