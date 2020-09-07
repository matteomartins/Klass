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
Route.group(() => {
    Route.post('', 'UserController.create').validator('User');
    Route.put('', 'UserController.update');
    Route.get('', 'UserController.index');
}).prefix('/users')

Route.post('/sessions', 'SessionController.store');

//Schools
Route.group(() => {
    Route.post('', 'SchoolController.create').validator('School').middleware(['VerifyPremiumAndSchool']);
    Route.get('', 'SchoolController.generalIndex');
}).prefix('/schools')

Route.group(() => {
    Route.get('', 'SchoolController.index');
    Route.put('', 'SchoolController.update').validator('School');
    Route.delete('', 'SchoolController.delete');
}).prefix('/schools/:id_school').middleware(['VerifyUserAndSchool']);

//Courses
Route.group(() => {
    Route.get('', 'CourseController.generalIndex');
    Route.post('', 'CourseController.create').validator('Course');
}).prefix('/schools/:id_school/courses/').middleware(['VerifyUserAndSchool']);

Route.group(() => {
    Route.delete('', 'CourseController.delete');
    Route.get('', 'CourseController.index');
    Route.put('', 'CourseController.update').validator('Course');
}).prefix('/schools/:id_school/courses/:id_course').middleware(['VerifyUserAndSchool']);

//Turns
Route.group(() => {
    Route.post('', 'TurnController.create').validator('Turn');
    Route.get('', 'TurnController.generalIndex');
}).prefix('/schools/:id_school/turns/').middleware(['VerifyUserAndSchool']);

Route.group(() => {
    Route.delete('', 'TurnController.delete');
    Route.get('', 'TurnController.index');
    Route.put('', 'TurnController.update').validator('Turn');
}).prefix('/schools/:id_school/turns/:id_turn').middleware(['VerifyUserAndSchool']);

//Groups
Route.group(() => {
    Route.post('', 'GroupController.create').validator('Group');
    Route.get('', 'GroupController.generalIndex');
}).prefix('/schools/:id_school/groups').middleware(['VerifyUserAndSchool']);

Route.group(() => {
    Route.delete('', 'GroupController.delete');
    Route.get('', 'GroupController.index');
    Route.put('', 'GroupController.update').validator('Group');
}).prefix('/schools/:id_school/groups/:id_group').middleware(['VerifyUserAndSchool']);


//Subjects
Route.group(() => {
    Route.post('', 'SubjectController.create').validator('Subject');
    Route.get('', 'SubjectController.generalIndex');
}).prefix('/schools/:id_school/subjects').middleware(['VerifyUserAndSchool']);

Route.group(() => {
    Route.delete('', 'SubjectController.delete');
    Route.get('', 'SubjectController.index');
    Route.put('', 'SubjectController.update').validator('Subject');
}).prefix('/schools/:id_school/subjects/:id_subject').middleware(['VerifyUserAndSchool']);

//Professors
Route.group(() => {
    Route.post('', 'ProfessorController.create').validator('Professor');
    Route.get('', 'ProfessorController.generalIndex')
}).prefix('/schools/:id_school/professors').middleware(['VerifyUserAndSchool']);

Route.group(() => {
    Route.delete('', 'ProfessorController.delete');
    Route.get('', 'ProfessorController.index');
    Route.put('', 'ProfessorController.update').validator('Professor');
}).prefix('/schools/:id_school/professors/:id_professor').middleware(['VerifyUserAndSchool']);

//Home
Route.get('/home', 'HomeController.index');

//Dashboard
Route.get('/dashboard', 'DashboardController.index');

