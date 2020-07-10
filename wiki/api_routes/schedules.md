[Voltar](menu.md)

# Rotas de Horários

## Criar um horário <a name="create_schedule"></a>

Criando um horário com determinadas propriedades.
POST /schools/:id_school/schedules/

### Parâmetros

| Nome                 | Tipo   | Descrição                                                 |
| -------------------- | ------ | --------------------------------------------------------- |
| schedule_day       | string | dia da semana                                      |
| schedule_start      | string | início do horário |        
| schedule_end      | string | fim do horário |  

### Exemplo

```json
rote: /schools/1/schedules/
json: {
	"schedule_day": "Segunda-feira",
	"schedule_start":"07:30",
	"schedule_end": "08:20"
}
```

### Resposta

```json
Status: 201 CREATED
_______________________________________________________________

{
    "id_schedule": 1
}
```

## Selecionar todos os horários <a name="select_schedules"></a>

Selecionar todos os horários de uma escola que o indivíduo tem acesso
GET /schools/:id_school/schedules/

### Exemplo

```
	rote: /schools/1/schedules/
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"schedules": [
		{
		"id_schedule":1,"schedule_day": "Segunda-feira",
	"schedule_start":"07:30", "schedule_end": "08:20"
		},
		{
	"id_schedule":2,"schedule_day": "Terça-feira",
	"schedule_start":"09:10", "schedule_end": "10:00"
			
		}
	]
}
```

## Selecionar um horário <a name="select_schedule"></a>

Seleciona um horário em especifico que o individuo tem acesso
GET /schools/:id_school/schedules/:id_schedule

### Exemplo

```
	rote: /schools/1/schedules/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"schedule_day": "Segunda-feira",
	"schedule_start":"07:30",
	"schedule_end": "08:20"
}
```

## Editar um horário <a name="edit_schedule"></a>

Editando um Turno com determinadas propriedades.
PUT /schools/:id_school/schedules/:id_schedule

### Parâmetros

| Nome                 | Tipo   | Descrição                                                 |
| -------------------- | ------ | --------------------------------------------------------- |
| schedule_day       | string | dia da semana                                      |
| schedule_start      | string | início do horário |        
| schedule_end      | string | fim do horário |  

### Exemplo

```json
rote: /schools/1/schedules/1
json: {
	"schedule_day": "Segunda-feira",
	"schedule_start":"07:30",
	"schedule_end": "08:20"
```

### Resposta

    Status: 204 No Content

## Deletar um horário <a name="delete_schedule"></a>

Removendo um determinado horário
DELETE /schools/:id_school/schedules/:id_schedule

### Exemplo

```json
    rote: /schools/1/schedules/1
```

### Resposta

    Status: 204 No Content