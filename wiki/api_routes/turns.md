[Voltar](menu.md)

# Rotas do Turno

## Criar um Turno <a name="create_turn"></a>

Criando um turno com determinadas propriedades.
POST /turns

### Parâmetros

| Nome           | Tipo   | Descrição              |
| -------------- | ------ | ---------------------- |
| turns | array of [turns](types.md#type_turn) | Turno  |


### Exemplo

```json
rote: /turns
json: {
	"turn_name": "seg quar sex",
	"turn_period": "tarde",
	"turn_sunday": 0,
	"turn_monday": 1,
	"turn_tuesday": 0,
	"turn_wednesday": 1,
	"turn_thursday": 0,
	"turn_friday": 1,
	"turn_saturday": 0
}
```

### Resposta

```json
Status: 201 CREATED
_______________________________________________________________

{
    "id_turn": 1
}
```

## Selecionar todas os Turnos <a name="select_turns"></a>

Selecionar todas os turnos que o indivíduo tem acesso
GET /turns

### Exemplo

```
	rote: /turns
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
    "turns": [{"id_turn": 1, "turn_name": "seg qua sex", "turn_period": "Tarde","turn_sunday": 0,"turn_monday": 1,"turn_tuesday": 0,"turn_wednesday": 1,"turn_thursday": 0,"turn_friday": 1,"turn_saturday": 0},{"id_turn": 2, "turn_name": "seg sex", "turn_period": "Manhã","turn_sunday": 0,
	"turn_monday": 1,"turn_tuesday": 0,"turn_wednesday": 0,"turn_thursday": 0,"turn_friday": 1,"turn_saturday": 0}]
}
```

## Selecionar um turno <a name="select_turn"></a>

Seleciona um turno em especifico que o individuo tem acesso
GET /turns/:id_turn

### Exemplo

```
	rote: /turns/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"turn_name": "seg quar sex",
	"turn_period": "tarde",
	"turn_monday": 1,
	"turn_wednesday": 1,
	"turn_friday": 1

}
```

## Editar um Turno <a name="edit_turn"></a>

Editando um Turno com determinadas propriedades.
PUT /turns/:id_turn

### Parâmetros

| Nome           | Tipo   | Descrição              |
| -------------- | ------ | ---------------------- |
| turn_name      | string | Nome do turno          |
| turn_period    | string | período do turno       |
| turn_sunday    | bit    | turno de domingo       |
| turn_monday    | bit    | turno de segunda-feira |
| turn_tuesday   | bit    | turno de terça-feira   |
| turn_wednesday | bit    | turno de quarta-feira  |
| turn_thursday  | bit    | turno de quinta-feira  |
| turn_friday    | bit    | turno de sexta-feira   |
| turn_saturday  | bit    | turno de sábado        |

### Exemplo

```json
rote: /turns/1
json: {
	"turn_name": "seg quar sex",
	"turn_period": "tarde",
	"turn_sunday": 0,
	"turn_monday": 1,
	"turn_tuesday": 0,
	"turn_wednesday": 1,
	"turn_thursday": 0,
	"turn_friday": 1,
	"turn_saturday": 0
```

### Resposta

    Status: 204 No Content

## Deletar um Turno <a name="delete_turn"></a>

Removendo um determinado Turno
DELETE /turns/:id_turn

### Exemplo

```json
    rote: /turns/1
```

### Resposta

    Status: 204 No Content
