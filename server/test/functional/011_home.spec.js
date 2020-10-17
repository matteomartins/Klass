const { test, trait } = use('Test/Suite')('Home Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const User = use('App/Models/User');

const Chance = use('chance').Chance()


test('home', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/home').loginVia(user, 'jwt').end();
  const Home = {
    "class_id": "SADas84d7"
  };
  response.assertStatus(200);
  assert.exists(response.body.home);
});
