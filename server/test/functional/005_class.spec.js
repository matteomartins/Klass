const { test, trait } = use('Test/Suite')('Class Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const Class = use('App/Models/Class');
const User = use('App/Models/User');

const Chance = use('chance').Chance()

test('validate create class', async ({ assert, client }) => {

  const user = await User.find(1);
  const school = {
    "name": Chance.username(),
    "modules  _id": Chance.string({ length: 20 }),
    "students_quant": Chance.int()
  }

  const responseSchool = await client.post('/schools/1/classes').loginVia(user, 'jwt').send(school).end()

  const Class = {
    "name": "3 ANO A",
    "module_id": 5,
    "students_quant": 50
  };

  const response = await client.post(`/schools/1/classes`).loginVia(user, 'jwt').header('accept', 'application/json').send(Class).end();
  response.assertStatus(200);
  assert.exists(response.body.class);
});

test('validate create class validator', async ({ assert, client }) => {
  const Class = {
    "nme": "3 ANO A",
    "module_id": 5,
    "students_quant": 50
}

  const response = await client.post('/schools/1/classes').header('accept', 'application/json').send(Class).end();
  response.assertStatus(400);
  assert.equal(JSON.parse(response.text)[0].message, "Você deve inserir um nome certo.");
});

test('validate list class', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/schools/1/classes').loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.class);
});

test('validate list one class', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/schools/1/classes/1').loginVia(user, 'jwt').end();

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

  const response = await client.put('schools/1/classes/1').loginVia(user, 'jwt').send(newTurnData).end();
  response.assertStatus(204);
});

test('validate delete class', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.delete('/schools/1/classes/1').loginVia(user, 'jwt').end();

  response.assertStatus(200);
});