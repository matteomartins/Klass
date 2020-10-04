const { test, trait } = use('Test/Suite')('Subject Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const Subject = use('App/Models/Subject');
const User = use('App/Models/User');

const Chance = use('chance').Chance()

test('validate create subject', async ({ assert, client }) => {

  const user = await User.find(1);
  const school = {
    "name": Chance.username(),
    "abbreviation": Chance.username(),
    "modules": Chance.string({ length: 20 }),
  }

  const responseSchool = await client.post('schools/2/subjects').loginVia(user, 'jwt').send(school).end()

  const Subject = {
    "name": "Matemática",
    "abbreviation": "MAT",
    "modules": [
        {
          "module_id": 1,
          "total_classes": 3
        }
      ]
  };

  const response = await client.post(`schools/2/subjects`).loginVia(user, 'jwt').header('accept', 'application/json').send(Subject).end();
  response.assertStatus(200);
  assert.exists(response.body.subject);
});

test('validate create subject validator', async ({ assert, client }) => {
  const Class = {
    "name": "Matemática",
    "abbreiation": "MAT",
    "modules": [
        {
          "module_id": 1,
          "total_classes": 3
        }
    ]
}

  const response = await client.post('schools/2/subjects').header('accept', 'application/json').send(Class).end();
  response.assertStatus(400);
  assert.equal(JSON.parse(response.text)[0].message, "Você deve inserir um nome certo.");
});

test('validate list subject', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('schools/2/subjects').loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.subject);
});

test('validate list one subject', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('schools/2/subjects/1').loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.subject);
});

test('validate edit subject', async ({ assert, client }) => {
  const newTurnData = {
    "name": "Matemática",
    "abbreiation": "LP",
    "modules": [
        {
          "module_id": 1,
          "total_classes": 3
        }
    ]
  };

  const user = await User.find(1);

  const response = await client.put('schools/1/subjects/1').loginVia(user, 'jwt').send(newTurnData).end();
  response.assertStatus(204);
});

test('validate delete subject', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.delete('schools/2/subjects/1').loginVia(user, 'jwt').end();

  response.assertStatus(200);
});