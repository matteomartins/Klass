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
Route.resource("/users", "UserController").only(["show"]);
Route.resource("/users", "UserController").except(["show"]).validator("User");

Route.post("/sessions", "SessionController.store");

//Schools
Route.resource("/schools", "SchoolController")
  .only(["store", "update"])
  .validator("School")
  .middleware(["VerifyToken"])
  .middleware(["VerifyPremiumAndSchool"]);
Route.resource("/schools", "SchoolController")
  .except(["store", "update"])
  .middleware(["VerifyToken"])
  .middleware(["VerifyUserAndSchool"]);


  //Courses

  Route.resource("/schools/:id_school/courses/", "CourseController")
    .only(["store", "update"])
    .validator("Course")
    .middleware(["VerifyToken"])
    .middleware(["VerifyUserAndSchool"]);
  Route.resource("/schools/:id_school/courses/", "CourseController")
    .except(["store", "update"])
    .middleware(["VerifyToken"])
    .middleware(["VerifyUserAndSchool"]);

  //Turns
  Route.resource("/schools/:id_school/turns/", "TurnController")
    .only(["store", "update"])
    .validator("Turn")
    .middleware(["VerifyToken"])
    .middleware(["VerifyUserAndSchool"]);
  Route.resource("/schools/:id_school/turns/", "TurnController")
    .except(["store", "update"])
    .middleware(["VerifyToken"])
    .middleware(["VerifyUserAndSchool"]);

  //Groups
  Route.resource("/schools/:id_school/groups", "GroupController")
    .only(["store", "update"])
    .validator("Group")
    .middleware(["VerifyToken"])
    .middleware(["VerifyUserAndSchool"]);
  Route.resource("/schools/:id_school/groups", "GroupController")
    .except(["store", "update"])
    .middleware(["VerifyToken"])
    .middleware(["VerifyUserAndSchool"]);

  //Subjects
  Route.resource("/schools/:id_school/subjects", "SubjectController")
    .only(["store", "update"])
    .validator("Subject")
    .middleware(["VerifyToken"])
    .middleware(["VerifyUserAndSchool"]);
  Route.resource("/schools/:id_school/subjects", "SubjectController")
    .except(["store", "update"])
    .middleware(["VerifyToken"])
    .middleware(["VerifyUserAndSchool"]);

  //Professors
  Route.resource("/schools/:id_school/professors/", "ProfessorController")
    .only(["store", "update"])
    .validator("Professor")
    .middleware(["VerifyToken"])
    .middleware(["VerifyUserAndSchool"]);
  Route.resource("/schools/:id_school/professors/", "ProfessorController")
    .except(["store", "update"])
    .middleware(["VerifyToken"])
    .middleware(["VerifyUserAndSchool"]);

  Route.put("/schools/:id_school/professors/user/:id_professor","ProfessorController.userUpdate")
    .validator("UserProfessor")
    .middleware(["VerifyToken, VerifyUserAndProfessor"]);

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

