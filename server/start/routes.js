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

Route.post('/users', 'UserController.create').validator('User')
Route.put('/users', 'UserController.update')
Route.get('/users', 'UserController.index')

Route.post('/sessions', 'SessionController.store')

Route.post('/schools', 'SchoolController.create').validator('School').middleware(['VerifyPremiumAndSchool']);
Route.delete('/schools/:id', 'SchoolController.delete').middleware(['VerifyUserAndSchool']);
Route.get('/schools/:id', 'SchoolController.index').middleware(['VerifyUserAndSchool']);
Route.put('/schools/:id', 'SchoolController.update').validator('School').middleware(['VerifyUserAndSchool']);
