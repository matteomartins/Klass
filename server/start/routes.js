"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

//Users
Route.post('/users', 'UserController.store').validator('User')
Route.resource('/users', 'UserController').only(['show'])
Route.resource('/users', 'UserController').except(['show', 'store']).validator('User')

Route.post("/sessions", "SessionController.store");

//Schools
Route.resource("/schools", "SchoolController")
  .only(["store", "update"])
  .validator("School")
  .middleware(["VerifyToken","VerifyPremiumAndSchool"]);
Route.resource("/schools", "SchoolController")
  .except(["store", "update"])
  .middleware(["VerifyToken, VerifyUserAndSchool"]);

//Courses
Route.group(() => {
  Route.resource("/schools/:id_school/courses/", "CourseController")
  .only(["store", "update"])
  .validator("Course");
  Route.resource("/schools/:id_school/courses/", "CourseController")
    .except(["store", "update"]);
}).middleware(["VerifyToken, VerifyUserAndSchool"]);

//Turns
Route.group(() => {
  Route.resource("/schools/:id_school/turns/", "TurnController")
    .only(["store", "update"])
    .validator("Turn");
  Route.resource("/schools/:id_school/turns/", "TurnController")
    .except(["store", "update"]);
}).middleware(["VerifyToken, VerifyUserAndSchool"]);

//Groups
Route.group(() => {
  Route.resource("/schools/:id_school/groups", "GroupController")
    .only(["store", "update"])
    .validator("Group");
  Route.resource("/schools/:id_school/groups", "GroupController")
    .except(["store", "update"]);
}).middleware(["VerifyToken, VerifyUserAndSchool"]);

//Subjects
Route.group(() => {
  Route.resource("/schools/:id_school/subjects", "SubjectController")
    .only(["store", "update"])
    .validator("Subject");
  Route.resource("/schools/:id_school/subjects", "SubjectController")
    .except(["store", "update"]);
}).middleware(["VerifyToken, VerifyUserAndSchool"]);

//Professors
Route.group(() => {
  Route.group(() => {
    Route.resource("/schools/:id_school/professors/", "ProfessorController")
      .only(["store", "update"])
      .validator("Professor");
    Route.resource("/schools/:id_school/professors/", "ProfessorController")
      .except(["store", "update"]);
  }).middleware(["VerifyUserAndSchool"]);
  Route.put("/schools/:id_school/professors/user/:id_professor","ProfessorController.userUpdate")
    .validator("UserProfessor")
    .middleware(["VerifyUserAndProfessor"]);
}).middleware(["VerifyToken"]);

//Invite
Route.group(() => {
  Route.post("professors", "InviteController.createProfessor").validator(
    "InviteProfessor"
  );
  Route.post("students", "InviteController.createGroup").validator(
    "InviteStudent"
  );
}).prefix("/invites/");

//Home
Route.get("/home", "HomeController.index");

//Dashboard
Route.get("/schools/:id_school/dashboard", "DashboardController.index")
  .middleware(["VerifyUserAndSchool","VerifyToken"]);

