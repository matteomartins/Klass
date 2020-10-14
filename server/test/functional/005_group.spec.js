const { test, trait } = use('Test/Suite')('Class Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const Group = use('App/Models/Group');
const User = use('App/Models/User');

const Chance = use('chance').Chance()


let responseSchool;
let user;

test('validate create group', async ({ assert, client }) => {
  await Factory.model('App/Models/User').create();

  const user = await User.find(1);

  const school = {
    "name": Chance.username(),
    "description": Chance.string({ length: 20 }),
    "type": Chance.string(),
    "icon": Chance.avatar({ protocol: 'https', fileExtension: 'jpg' })
  }

  responseSchool = await client.post('/schools').loginVia(user, 'jwt').send(school).end();

  const group = {
    "name":"9 Ano C",
    "module_id": 1,
    "turn_id": 1
  };

  const response = await client.post(`/schools/${responseSchool.body.school_id}/groups`).loginVia(user, 'jwt').header('accept', 'application/json').send(group).end();
  
  response.assertStatus(200);
  assert.exists(response.body.id);
});

test('validate create group validator', async ({ assert, client }) => {
  const group = {
    "nme": "3 ANO A",
    "module_id": 5,
    "students_quant": 50
}

  const response = await client.post(`/schools/${responseSchool.body.school_id}/groups`).loginVia(user, 'jwt').header('accept', 'application/json').send(group).end();
  response.assertStatus(400);
  assert.equal(JSON.parse(response.text)[0].message, "Você deve inserir um nome certo.");
});

test('validate list class', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get(`/schools/${responseSchool.body.school_id}/groups`).loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.class);
});

test('validate list one class', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get(`/schools/${responseSchool.body.school_id}/groups/1`).loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.turn);
});

test('validate edit class', async ({ assert, client }) => {
  const newTurnData = {
    "name": "3 ANO A",
    "module_id": 5,
    "students_quant": 51
  };

  const user = await User.find(1);

  const response = await client.put(`schools/${responseSchool.body.school_id}/groups/1`).loginVia(user, 'jwt').send(newTurnData).end();
  response.assertStatus(204);
});

test('validate delete class', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.delete(`/schools/${responseSchool.body.school_id}/groups/1`).loginVia(user, 'jwt').end();

  response.assertStatus(200);
});