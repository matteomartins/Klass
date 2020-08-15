const { test, trait } = use('Test/Suite')('User Tests')
trait('Test/ApiClient');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const User = use('App/Models/User');

const Chance = use('chance').Chance()

test('validate user details', async ({ assert, client }) => {

  const user = {
    "nomeUsuario": "Vinicius Floriano",
    "emai": "viniciusfloriano@gmail.com",
    "password": "123456"
  }

  const response = await client.post('/users').send(user).end();

  response.assertStatus(400);
  assert.equal(JSON.parse(response.text)[0].message, "You must provide a email address.");
})

test('validate create user', async ({ assert, client }) => {

  const user = {
    nomeUsuario: Chance.username(),
    email: Chance.email(),
    password: Chance.string()
  };

  const response = await client.post('/users').send(user).end();

  response.assertStatus(400);
  assert.equal(response.body.token);
})