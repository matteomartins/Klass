'use strict'

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
const Route = use('Route');

//Users
Route.resource('/users', 'UserController').only(['show'])
Route.resource('/users', 'UserController').except(['show']).validator('User')

Route.post('/sessions', 'SessionController.store');

//Schools
Route.resource('/schools', 'SchoolController').only(['store', 'update']).validator('School').middleware(['VerifyPremiumAndSchool']);
Route.resource('/schools', 'SchoolController').except(['store', 'update']).middleware(['VerifyUserAndSchool']);

Route.group(() => {

//Courses
Route.resource('/courses/', 'CourseController').only(['store', 'update']).validator('Course').middleware(['VerifyUserAndSchool']);
Route.resource('/courses/', 'CourseController').except(['store', 'update']).middleware(['VerifyUserAndSchool']);

//Turns
Route.resource('/turns/', 'TurnController').only(['store', 'update']).validator('Turn').middleware(['VerifyUserAndSchool']);
Route.resource('/turns/', 'TurnController').except(['store', 'update']).middleware(['VerifyUserAndSchool']);

//Groups
Route.resource('/groups', 'GroupController').only(['store', 'update']).validator('Group').middleware(['VerifyUserAndSchool']);
Route.resource('/groups', 'GroupController').except(['store', 'update']).middleware(['VerifyUserAndSchool']);

//Subjects
Route.resource('/subjects', 'SubjectController').only(['store', 'update']).validator('Subject').middleware(['VerifyUserAndSchool']);
Route.resource('/subjects', 'SubjectController').except(['store', 'update']).middleware(['VerifyUserAndSchool']);

//Professors
Route.resource('/professors/', 'ProfessorController').only(['store', 'update']).validator('Professor').middleware(['VerifyUserAndSchool']);
Route.resource('/professors/', 'ProfessorController').except(['store', 'update']).middleware(['VerifyUserAndSchool']);

Route.put('/professors/user/:id_professor', 'ProfessorController.userUpdate').validator('UserProfessor').middleware(['VerifyUserAndProfessor']);

}).prefix('/schools/:id_school')

//Invite
Route.group(() => {
    Route.post('professors', 'InviteController.createProfessor').validator('InviteProfessor');
    Route.post('students', 'InviteController.createGroup').validator('InviteStudent');
}).prefix('/invites/')

//Home
Route.get('/home', 'HomeController.index');

//Dashboard
Route.get('/schools/:id_school/dashboard', 'DashboardController.index').middleware(['VerifyUserAndSchool']);

