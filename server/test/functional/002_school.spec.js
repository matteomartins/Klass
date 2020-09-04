'use strict'

const { test, trait } = use('Test/Suite')('School Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const School = use('App/Models/School');
const Adm = use('App/Models/Administrator');
const User = use('App/Models/User');
const Database = use('Database')


const Chance = use('chance').Chance()

test('validate school details', async ({ assert, client }) => {
    const school = {
        "name": Chance.string({ length: 10 }),
        "description": Chance.string({ length: 20 }),
        "typ": Chance.integer({ min: 1, max: 3 }),
        "icon": Chance.avatar({ protocol: 'https', fileExtension: 'jpg' })
    }

    const response = await client.post('/schools').send(school).end()

    response.assertStatus(400);
    assert.equal(JSON.parse(response.text)[0].message, "Você deve inserir um tipo de escola.")
})

test('create a school', async ({ assert, client }) => {
    const user = await User.find(1);
    const school = {
        "name": Chance.username(),
        "description": Chance.string({ length: 20 }),
        "type": Chance.string(),
        "icon": Chance.avatar({ protocol: 'https', fileExtension: 'jpg' })
    }

    const response = await client.post('/schools').loginVia(user, 'jwt').send(school).end()

    response.assertStatus(201);
    assert.exists(response.body.message)
})
