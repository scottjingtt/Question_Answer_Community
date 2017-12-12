# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development server

1. Run `npm install`

2. Run `node server.js` to start server project. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


##Project Description(Client)

UserService ,AuthenticationService and AlertService
1. Picture wall: Main page of this project. Before user click to navigate to login page, there will be a picture wall to show several universities' pictures. Users can click each picture to zoom in. And there is one picture user can click to navigate to login page.
Basically achieve this page with CSS stylesheet and `Output, EventEmitter` to send variable to its parent element to decide if user has clicked to show login page.
2. User registration
User can create new account through `UserService`. Except basic information, user also can use "gravatar link" to set user image. All information of registration form are `required` and user `Regular Expressions` to validate "username" and "email" input.This form will be sent to server by `UserService.create`.
3. User login
User can login by `AuthenticationService.login` with "username" and "password"。Once logged in, the server will response the logged in user's information and `token`, then store them in `local storage` as "currentUser".
4. User logout
User click "logout" button will call `AthenticationService.logout` then will clear `local storage`, and browser will lose all information about "currentUser".
5. Logged in user's profile and update user information
Once login, user can navigate to `profile` component to view "currentUser" personal information. The user can also click "Edit profile" to update profile. Use `Two-way data binding` to edit and show user's information in real time.The updated information form will be sent to server by `UserService.update` and this will return "currentUser" information after updating.
6. Alert
There is a seperate element tag `alert` in "AppComponent.html" to show error messages catched.
7. Admin
There is a special kind of user whose identity is "admin", which can not be created normally. Developers can create "admin" users directly in back-end database. Once logged in user's identity is "admin", it can view all users' list by `UserService.getAll()` and can also delete user from database by `UserService.delete()`.
8. Author information
In question list page and question detail page, once user click question's or answer's name, will pop out an alert to show author's email address. This author's email is gathered by `UserService.getById()`.
9. Token
We have re-write http requests to create some functions will send requests to server along with `token` which is stored in `local storage`. Because of that, user don't have to send "user and password" again and again to gain authentication after user has logged in.

