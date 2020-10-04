const { test, trait } = use('Test/Suite')('Notification Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const Notification = use('App/Models/Notification');
const User = use('App/Models/User');

const Chance = use('chance').Chance()


test('validate list notification', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/notifications').loginVia(user, 'jwt').end();
  const Notification = {
      "id_notification": 1, 
			"notification_date": "06/07/2020",
			"notification_time": "08:20",
    	"notification_content": "Messias entrou na escola Etec de Taboão da Serra"
  };
  response.assertStatus(200);
  assert.exists(response.body.notification);
});

