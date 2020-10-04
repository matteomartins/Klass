const { test, trait } = use('Test/Suite')('Invite Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const Invite = use('App/Models/Invite');
const User = use('App/Models/User');

const Chance = use('chance').Chance()


test('connect student', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/invite').loginVia(user, 'jwt').end();
  const Invite = {
    "class_id": "SADas84d7"
  };
  response.assertStatus(200);
  assert.exists(response.body.invite);
});

test('connect teacher', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/invite').loginVia(user, 'jwt').end();
  const Invite = {
    "class_id": "SADas84d7"
  };
  response.assertStatus(200);
  assert.exists(response.body.invite);
});

