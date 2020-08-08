'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')


Factory.blueprint('App/Models/User', (faker) => {
  return {
    nomeUsuario: faker.username(),
    email: faker.email(),
    password: faker.string(),
  }
})

Factory.model

Factory.blueprint('users', (faker) => {
    return {
      nomeUsuario: faker.username(),
      email: faker.email(),
      password: faker.string(),
    }
})
  