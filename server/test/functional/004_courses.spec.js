const { test, trait } = use('Test/Suite')('Courses Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const Course = use('App/Models/Course');
const User = use('App/Models/User');

const Chance = use('chance').Chance()

let responseSchool;
let user;

test('validate create course', async ({ assert, client }) => {
  await Factory.model('App/Models/User').create();

  user = await User.find(1);

  const school = {
    "name": Chance.username(),
    "description": Chance.string({ length: 20 }),
    "type": Chance.string(),
    "icon": Chance.avatar({ protocol: 'https', fileExtension: 'jpg' })
  }

  responseSchool = await client.post('/schools').loginVia(user, 'jwt').send(school).end()

  const course = {
    "name": "Ensino Médio",
    "modules": ["1 ANO", "2 ANO"]
  };

  const response = await client.post(`/schools/${responseSchool.body.school_id}/courses`).loginVia(user, 'jwt').send(course).end();

  response.assertStatus(200);
  assert.exists(response.body.message);
});

test('validate create course validator', async ({ assert, client }) => {
  const course = {
    "nam": "Ensino Médio",
    "modules": ["1 ANO", "2 ANO"]
}

  const response = await client.post(`/schools/${responseSchool.body.school_id}/courses`).header('accept', 'application/json').send(course).end();
  response.assertStatus(400);
  assert.equal(JSON.parse(response.text)[0].message, "Você deve inserir o nome do curso.");
});

test('validate list all course', async ({ assert, client }) => {

  const response = await client.get(`/schools/${responseSchool.body.school_id}/courses`).loginVia(user, 'jwt').end();

  assert.exists(response.body.ModuleCourse);
}).timeout(6000);

test('validate list course', async ({ assert, client }) => {

  const response = await client.get(`/schools/${responseSchool.body.school_id}/courses/1`).loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.course);
}).timeout(6000);

test('validate edit course', async ({ assert, client }) => {
  const newTurnData = {
    "name": "Técnico",
    "modules": [
      {"id": 1 ,"name": "1 ANO"},
      {"id": 2,"name": "2 ANO"},
      {"id": -1,"name": "3 ANO"}
    ]
  };

  const response = await client.put(`/schools/${responseSchool.body.school_id}/courses/1`).loginVia(user, 'jwt').send(newTurnData).end();
  response.assertStatus(200);
}).timeout(6000);

test('validate delete course', async ({ assert, client }) => {

  const response = await client.delete(`/schools/${responseSchool.body.school_id}/courses/1`).loginVia(user, 'jwt').end();

  response.assertStatus(200);
}).timeout(6000);