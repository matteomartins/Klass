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
const Route = use('Route')

//Users
Route.post('/users', 'UserController.create').validator('User')
Route.put('/users', 'UserController.update')
Route.get('/users', 'UserController.index')

Route.post('/sessions', 'SessionController.store')

//Schools
Route.post('/schools', 'SchoolController.create').validator('School').middleware(['VerifyPremiumAndSchool']);
Route.delete('/schools/:id_school', 'SchoolController.delete').middleware(['VerifyUserAndSchool']);
Route.get('/schools/:id_school', 'SchoolController.index').middleware(['VerifyUserAndSchool']);
Route.put('/schools/:id_school', 'SchoolController.update').validator('School').middleware(['VerifyUserAndSchool']);

//Courses
Route.post('/schools/:id_school/courses', 'CourseController.create').validator('Course').middleware(['VerifyUserAndSchool']);
Route.delete('/schools/:id_school/courses/:id_course', 'CourseController.delete').middleware(['VerifyUserAndSchool']);
Route.get('/schools/:id_school/courses/:id_course', 'CourseController.index').middleware(['VerifyUserAndSchool']);
Route.put('/schools/:id_school/courses/:id_course', 'CourseController.update').validator('Course').middleware(['VerifyUserAndSchool']);

//Turns
Route.post('/schools/:id_school/turns', 'TurnController.create').validator('Turn').middleware(['VerifyUserAndSchool']);
Route.delete('/schools/:id_school/turns/:id_turn', 'TurnController.delete').middleware(['VerifyUserAndSchool']);
Route.get('/schools/:id_school/turns/:id_turn', 'TurnController.index').middleware(['VerifyUserAndSchool']);
Route.put('/schools/:id_school/turns/:id_turn', 'TurnController.update').validator('Turn').middleware(['VerifyUserAndSchool']);

//Groups
Route.post('/schools/:id_school/groups', 'GroupController.create').validator('Group').middleware(['VerifyUserAndSchool']);
Route.delete('/schools/:id_school/groups/:id_group', 'GroupController.delete').middleware(['VerifyUserAndSchool']);
Route.get('/schools/:id_school/groups/:id_group', 'GroupController.index').middleware(['VerifyUserAndSchool']);
Route.put('/schools/:id_school/groups/:id_group', 'GroupController.update').validator('Group').middleware(['VerifyUserAndSchool']);

//Subjects
Route.post('/schools/:id_school/subjects', 'SubjectController.create').validator('Subject').middleware(['VerifyUserAndSchool']);
Route.delete('/schools/:id_school/subjects/:id_subject', 'SubjectController.delete').middleware(['VerifyUserAndSchool']);
Route.get('/schools/:id_school/subjects/:id_subject', 'SubjectController.index').middleware(['VerifyUserAndSchool']);
Route.put('/schools/:id_school/subjects/:id_subject', 'SubjectController.update').validator('Subject').middleware(['VerifyUserAndSchool']);
