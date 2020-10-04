const { test, trait } = use('Test/Suite')('Courses Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const Course = use('App/Models/Course');
const User = use('App/Models/User');

const Chance = use('chance').Chance()

test('validate create course', async ({ assert, client }) => {

  const user = await User.find(1);
  const school = {
      "name": Chance.username(),
      "turn_id": Chance.string({ length: 20 }),
      "modules": [1,2,3,4,5]
  }

  const responseSchool = await client.post('/schools').loginVia(user, 'jwt').send(school).end()

  const course = {
    "name": "Ensino Médio",
    "course_id": 1,
    "modules": ["1 ANO", "2 ANO"]
  };

  const response = await client.post(`/schools/1/courses`).loginVia(user, 'jwt').header('accept', 'application/json').send(course).end();
  response.assertStatus(200);
  assert.exists(response.body.id_course);
});

test('validate create course validator', async ({ assert, client }) => {
  const course = {
    "name": "Ensino Médio",
    "turn_id": 1,
    "modules": ["1 ANO", "2 ANO"]
}

  const response = await client.post('/schools/1/courses').header('accept', 'application/json').send(course).end();
  response.assertStatus(400);
  assert.equal(JSON.parse(response.text)[0].message, "Você deve inserir um inicio de horário.");
});

test('validate list course', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/schools/1/courses').loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.course);
});

test('validate list all courses', async ({ assert, client }) => {
  const user = await User.find(*);

  const response = await client.get('/schools/1/courses/1').loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.course);
});

test('validate edit course', async ({ assert, client }) => {
  const newTurnData = {
    "name": "Ensino Médio",
    "turn_id": 2,
    "modules": ["1 ANO", "2 ANO"]
  };

  const user = await User.find(1);

  const response = await client.put('schools/1/courses/1').loginVia(user, 'jwt').send(newTurnData).end();
  response.assertStatus(204);
});

test('validate delete course', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.delete('/schools/1/courses/1').loginVia(user, 'jwt').end();

  response.assertStatus(200);
});