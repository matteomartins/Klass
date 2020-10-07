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

test('validate create turn', async ({ assert, client }) => {
  await Factory.model('App/Models/User').create();

  const user = await User.find(1);

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
  assert.equal(JSON.parse(response.text)[0].message, "Você deve inserir um inicio de horário.");
});

test('validate list turn', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/schools/1/turns').loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.turn);
});

test('validate list one turn', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.get('/schools/1/turns/1').loginVia(user, 'jwt').end();

  response.assertStatus(200);
  assert.exists(response.body.turn);
});

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

  const user = await User.find(1);

  const response = await client.put('schools/1/turns/1').loginVia(user, 'jwt').send(newTurnData).end();
  response.assertStatus(204);
});

test('validate delete turn', async ({ assert, client }) => {
  const user = await User.find(1);

  const response = await client.delete('/schools/1/turns/1').loginVia(user, 'jwt').end();

  response.assertStatus(200);
});