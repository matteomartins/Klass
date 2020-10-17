const { test, trait } = use('Test/Suite')('Teacher Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const Professor = use('App/Models/Professor');
const User = use('App/Models/User');

const Chance = use('chance').Chance()

test('validate create teacher', async ({ assert, client }) => {

  const user = await User.find(1);
  const school = {
      "name": Chance.username(),
      "email": Chance.username(),
      "subjects": [1,2,3,4,5],
      "priority": Chance.int()
  }

  const responseSchool = await client.post('/schools/1/professors/').loginVia(user, 'jwt').send(school).end()

  const teacher = {
      "name": "Wallace Andrade",
      "email": "wallace.romantismo@gmail.com",
      "subjects": [1, 2, 5],
      "priority": 0
  };

  const response = await client.post(`/schools/1/professors/`).loginVia(user, 'jwt').header('accept', 'application/json').send(teacher).end();
  response.assertStatus(200);
  assert.exists(response.body.teacher);
});

test('validate create teacher validator', async ({ assert, client }) => {
  const Class = {
      "name": "Wallace Andrade",
      "email": "wallace.romantismo@gmail.com",
      "sujects": [1, 2, 5],
      "priority": 0
}

  const response = await client.post('/schools/1/professors/').header('accept', 'application/json').send(Class).end();
  response.assertStatus(400);
  assert.equal(JSON.parse(response.text)[0].message, "Você deve inserir um nome certo.");
});

test('validate list teacher', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/schools/1/professors/').loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.teacher);
});

test('validate list one teacher', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/schools/1/professors/1').loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.teacher);
});

test('validate edit teacher', async ({ assert, client }) => {
  const newTurnData = {
    "name": "Wallace Andrade",
    "email": "wallace.romanismo@gmail.com",
    "subjects": [1, 2, 5],
    "priority": 0
  };

  const user = await User.find(1);

  const response = await client.put('/schools/1/professors/1').loginVia(user, 'jwt').send(newTurnData).end();
  response.assertStatus(204);
});

test('validate delete teacher', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.delete('/schools/1/professors/1').loginVia(user, 'jwt').end();

  response.assertStatus(200);
});