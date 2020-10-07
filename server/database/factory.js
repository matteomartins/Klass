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
const Factory = use('Factory');

const {CreateIdHash} = require('../app/Utils/createIdHash');

//User
Factory.blueprint('App/Models/User', (faker) => {
  return {
    name: faker.username(),
    birth_date: faker.birthday(),
    email: faker.email(),
    password: faker.string(),
    icon: faker.avatar()
  }
})

//School
Factory.blueprint('App/Models/School', (faker) => {
  return {
    id: CreateIdHash(),
    name: faker.word(),
    description: faker.paragraph(),
    type: faker.word(),
    icon: faker.avatar()
  }
})

//Turns
Factory.blueprint('App/Models/Turn', (faker, i, data) => {
  return {
    school_id: data.school_id,
    name: faker.word(),
    period: faker.natural({min: 2000, max: 2020}),
    flg_sunday: faker.bool(),
    flg_monday: faker.bool(),
    flg_tuesday: faker.bool(),
    flg_wednesday: faker.bool(),
    flg_thursday: faker.bool(),
    flg_friday: faker.bool(),
    flg_saturday: faker.bool(),
  }
})
