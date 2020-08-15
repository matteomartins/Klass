'use strict'

const { test, trait } = use('Test/Suite')('School Tests')
trait('Test/ApiClient');

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
        "nomeEscola": Chance.string({ length: 10 }),
        "descricao": Chance.string({ length: 20 }),
        "periodoLetiv": Chance.integer({ min: 1, max: 3 }),
        "iconEscola": Chance.avatar({ protocol: 'https', fileExtension: 'jpg' })
    }

    const response = await client.post('/schools').send(school).end()

    response.assertStatus(400);
    assert.equal(JSON.parse(response.text)[0].message, "Você deve inserir um periodo letivo.")
})

test('create a school', async ({ assert, client }) => {
    const school = {
        "nomeEscola": Chance.username(),
        "descricao": Chance.string({ length: 20 }),
        "periodoLetivo": Chance.integer({ min: 1, max: 3 }),
        "iconEscola": Chance.avatar({ protocol: 'https', fileExtension: 'jpg' })
    }

    const response = await client.post('/schools').send(school).end()

    response.assertStatus(401);
    assert.equal(response.body.token)
})
