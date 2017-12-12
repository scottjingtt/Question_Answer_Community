# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development client

1. Run `npm install`

2. Run `ng serve --open`

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

## Search universities:

## University-search has two related components: university-search and university-search-result

It is a Search function for places of `type` : `university` within a desired `radius`. radius defines the distance (in meters) within which to return place results. 

1. Use `Google Places API Web Service` to get a Key `AIzaSyCu2wmw2suniAVwjc8IUOYPmmEemHJbBls`.
2. give permission for the browser to locate you.
3. Use Geolocation Service `geolocation.getCurrentPosition()` to Set current location coordinates, initMap with zoom level is 15 (street), place service and maker current location.
4. Give a radius and Use callback method to nearby search requests `nearbySearch()` to search universities.
5. Show the results. The maximum number of results that can be returned is 60. 
