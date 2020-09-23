const { test, trait } = use('Test/Suite')('Turns Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const Turn = use('App/Models/Turn');
const User = use('App/Models/User');

const Chance = use('chance').Chance()

test('validate create turn', async ({ assert, client }) => {

  const user = await User.find(1);
  const school = {
      "name": Chance.username(),
      "description": Chance.string({ length: 20 }),
      "type": Chance.string(),
      "icon": Chance.avatar({ protocol: 'https', fileExtension: 'jpg' })
  }

  const responseSchool = await client.post('/schools').loginVia(user, 'jwt').send(school).end()

  const turn = {
    "name": "Integral",
    "start": "07:30",
    "end": "15:30",
    "class_duration": 50,
    "intervals": [
      {
        "start": "10:00",
        "end": "10:20"
      },
      {
        "start": "12:00",
        "end": "13:00"
      }
    ],
    "week_days": [1,2,3,4,5]
  };

  const response = await client.post(`/schools/${responseSchool.body.id_school}/turns`).loginVia(user, 'jwt').header('accept', 'application/json').send(turn).end();
  response.assertStatus(200);
  assert.exists(response.body.id_turn);
});

/*
test('validate create user validator', async ({ assert, client }) => {
  const user = {
    "name": "Vinicius Floriano",
    "emai": "viniciusfloriano@gmail.com",
    "password": "123456"
  }

  const response = await client.post('/users').header('accept', 'application/json').send(user).end();
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
*/