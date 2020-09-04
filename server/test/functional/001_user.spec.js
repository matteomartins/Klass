const { test, trait } = use('Test/Suite')('User Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const User = use('App/Models/User');

const Chance = use('chance').Chance()

test('validate create user', async ({ assert, client }) => {
  const user = {
    "name": Chance.username(),
    "email": Chance.email(),
    "password": Chance.string()
  };

  const response = await client.post('/users').send(user).end();

  response.assertStatus(200);
  assert.exists(response.body.token);
});

test('validate create user validator', async ({ assert, client }) => {
  const user = {
    "name": "Vinicius Floriano",
    "emai": "viniciusfloriano@gmail.com",
    "password": "123456"
  }

  const response = await client.post('/users').send(user).end();

  response.assertStatus(400);
  assert.equal(JSON.parse(response.text)[0].message, "Você deve inserir um email.");
});

test('validate edit user', async ({ assert, client }) => {
  const newUserData = {
    name: Chance.username(),
    email: Chance.email(),
    password: Chance.string()
  };

  const user = await User.find(1);

  const response = await client.put('/users').loginVia(user, 'jwt').send(newUserData).end();

  response.assertStatus(204);
});

test('validate list user', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/users').loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.user);
});

test('validate session user', async ({ assert, client }) => {
  const user = {
    name: Chance.username(),
    email: Chance.email(),
    password: Chance.string()
  };

  await client.post('/users').send(user).end();

  const {email, password} = user;

  const response = await client.post('/sessions').send({email,password}).end();

  response.assertStatus(200);
  assert.exists(response.body.token);
});