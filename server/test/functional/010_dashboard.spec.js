const { test, trait } = use('Test/Suite')('Dashboard Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const User = use('App/Models/User');

const Chance = use('chance').Chance()


test('informations', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/schools/1/dashboard').loginVia(user, 'jwt').end();
  const Dashboard = {
    "class_id": "SADas84d7"
  };
  response.assertStatus(200);
  assert.exists(response.body.dashboard);
});
