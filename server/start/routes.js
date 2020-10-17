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
Route.post('/users', 'UserController.store').validator('User');
Route.put('/users', 'UserController.update').validator('User');
Route.get('/users', 'UserController.show');

Route.post("/sessions", "SessionController.store");

//Schools
Route.post("/schools", "SchoolController.store").validator("School").middleware(["VerifyToken","VerifyPremiumAndSchool"]);
Route.put("/schools", "SchoolController.update").validator("School").middleware(["VerifyToken","VerifyPremiumAndSchool"]);
Route.resource("/schools", "SchoolController").except(["store", "update"]).middleware(["VerifyToken, VerifyUserAndSchool"]);

//Courses
Route.post('/schools/:id_school/courses', 'CourseController.store').validator('Course').middleware(['VerifyUserAndSchool']);
Route.delete('/schools/:id_school/courses/:id', 'CourseController.destroy').middleware(['VerifyUserAndSchool']);
Route.get('/schools/:id_school/courses/:id', 'CourseController.index').middleware(['VerifyUserAndSchool']);
Route.get('/schools/:id_school/courses', 'CourseController.show').middleware(['VerifyUserAndSchool']);
Route.put('/schools/:id_school/courses/:id', 'CourseController.update').validator('Course').middleware(['VerifyUserAndSchool']);

//Turns
Route.post('/schools/:id_school/turns', 'TurnController.store').validator('Turn').middleware(['VerifyUserAndSchool']);
Route.delete('/schools/:id_school/turns/:id', 'TurnController.destroy').middleware(['VerifyUserAndSchool']);
Route.get('/schools/:id_school/turns', 'TurnController.index').middleware(['VerifyUserAndSchool']);
Route.get('/schools/:id_school/turns/:id', 'TurnController.show').middleware(['VerifyUserAndSchool']);
Route.put('/schools/:id_school/turns/:id', 'TurnController.update').validator('Turn').middleware(['VerifyUserAndSchool']);

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
  Route.resource("/schools/:id_school/professors/", "ProfessorController")
    .only(["store", "update"])
    .validator("Professor").middleware(["VerifyUserAndSchool"]);
  Route.resource("/schools/:id_school/professors/", "ProfessorController")
    .except(["store", "update"]).middleware(["VerifyUserAndSchool"]);
  Route.put("/schools/:id_school/professors/user/:id_professor","ProfessorController.userUpdate")
    .validator("UserProfessor")
    .middleware(["VerifyUserAndProfessor"]);
}).middleware(["VerifyToken"]);

//Invite
Route.post("/invites/professors", "InviteController.createProfessor").validator("InviteProfessor");
Route.post("/invites/students", "InviteController.createGroup").validator("InviteStudent");

//Home
Route.get("/home", "HomeController.index");

//Dashboard
Route.get("/schools/:id_school/dashboard", "DashboardController.index")
  .middleware(["VerifyUserAndSchool","VerifyToken"]);

//Report
Route.resource("/schools/:id_school/reports", "ReportController").middleware(['VerifyUserAndSchool']);
