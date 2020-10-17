const { test, trait } = use('Test/Suite')('Turns Tests')
trait('Test/ApiClient');
trait('Auth/Client');

/** @type {import('@adonisjs/lucid/src/Factory')} **/
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} **/
const Turn = use('App/Models/Turn');
const User = use('App/Models/User');

const Chance = use('chance').Chance();


let responseSchool;
let user;

test('validate create turn', async ({ assert, client }) => {
  await Factory.model('App/Models/User').create();

  user = await User.find(1);
  
  const school = {
    "name": Chance.username(),
    "description": Chance.string({ length: 20 }),
    "type": Chance.string(),
    "icon": Chance.avatar({ protocol: 'https', fileExtension: 'jpg' })
  }

  responseSchool = await client.post('/schools').loginVia(user, 'jwt').send(school).end()

  const turn = {
    "name": "Integral",
    "period": "2020",
    "start": "07:30",
    "end": "15:30",
    "class_duration": 50,
    "intervals": [
      {
        "start": "10:00",
        "end": "10:20"
      },
      {
        "start": "12:00",
        "end": "13:00"
      }
    ],
    "week_days": [1,2,3,4,5]
  };

  const response = await client.post(`/schools/${responseSchool.body.school_id}/turns`).loginVia(user, 'jwt').header('accept', 'application/json').send(turn).end();
  
  response.assertStatus(201);
  assert.exists(response.body.id);
});

test('validate create turn validator', async ({ assert, client }) => {
  const turn = {
    "name": "Integral",
    "stat": "07:30",
    "end": "15:30",
    "class_duration": 50,
    "intervals": [
        {
          "start": "10:00",
          "end": "10:20"
        },
        {
          "start": "12:00",
          "end": "13:00"
        }
      ],
      "week_days": [1,2,3,4,5]
}

  const response = await client.post(`/schools/${responseSchool.body.school_id}/turns`).header('accept', 'application/json').send(turn).end();
  response.assertStatus(400);
  assert.equal(JSON.parse(response.text)[0].message, "Você deve inserir o horário de início.");
});

test('validate list turn', async ({ assert, client }) => {
  const response = await client.get(`/schools/${responseSchool.body.school_id}/turns`).loginVia(user, 'jwt').end();
  response.assertStatus(200);
  assert.exists(response.body.turns);
}).timeout(6000);

test('validate list one turn', async ({ assert, client }) => {

  const response = await client.get(`/schools/${responseSchool.body.school_id}/turns/1`).loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.name);
}).timeout(6000);

test('validate edit turn', async ({ assert, client }) => {
  const newTurnData = {
      "name": "Noite",
      "start": "08:30",
      "end": "15:30",
      "class_duration": 50,
      "intervals": [
        {
          "start": "10:00",
          "end": "10:20"
        },
        {
          "start": "12:00",
          "end": "13:00"
        }
      ],
      "week_days": [1,2,3,4,5]
  };

  const response = await client.put(`/schools/${responseSchool.body.school_id}/turns/1`).loginVia(user, 'jwt').send(newTurnData).end();
  response.assertStatus(200);
}).timeout(6000);

test('validate delete turn', async ({ assert, client }) => {

  const response = await client.delete(`/schools/${responseSchool.body.school_id}/turns/1`).loginVia(user, 'jwt').send().end();

  response.assertStatus(200);
}).timeout(6000);