[Voltar](menu.md)

# Rotas do Professor

## Criar um professor <a name="create_professor"></a>

Criando um professor com determinadas propriedades.

	POST /schools/:id_school/professors
	REQUIRED authentication

### Parâmetros

| Nome       | Tipo   | Descrição                                           |
| ---------- | ------ | --------------------------------------------------- |
| name       | string | nome do professor                                   |
| email      | string | email do professor                                  |
| subjects   | array of int   | matérias que o professor leciona (id)       |
| priority   | int   | Prioridade do professor onde 0 é a maior e +infinito é a menor  |

### Exemplo

```json
rote: /schools/1/professors/
json: {
	"name": "Wallace Andrade",
	"email": "wallace.romantismo@gmail.com",
	"subjects": [1, 2, 5],
	"priority": 0
}
```

### Resposta

```json
Status: 201 CREATED
_______________________________________________________________

{
    "id": 1
}
```

## Selecionar todas os professores <a name="select_professors"></a>

Selecionar todas os professores de uma escola que o indivíduo tem acesso

	GET /schools/:id_school/professors
	REQUIRED authentication

### Exemplo

```
	rote: /schools/1/professors
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{

}
```

## Selecionar um Professor <a name="select_professor"></a>

Seleciona um professor em especifico que o individuo tem acesso

	GET /schools/:id_school/professors/:id_professor
	REQUIRED authentication

### Exemplo

```
	rote: /schools/1/professors/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"id": 1,
	"name": "Wallace Andrade",
	"email": "wallace.romantismo@gmail.com",
	"subjescts": [1, 2, 3],
	"priority": 5,
	"hiring_date": "13/02/2019",
	"titulation": "Mestrado",
	"maxclasses": 4,
	"days": [1, 2, 3, 4],
	"time_start": "08:20",
	"time_end": "15:30"
}
```

## Editar um professor <a name="edit_professor"></a>

Editando um Turno com determinadas propriedades.

	PUT /schools/:id_school/professors/:id_professor
	REQUIRED authentication

### Parâmetros

| Nome                 | Tipo   | Descrição                                    |
| -------------------- | ------ | -------------------------------------------- |
| name       | string | Nome do professor                                      |
| email      | string | email do professor                                     |
| subjects   | array of int   | matérias que o professor leciona (id)          |
| priority   | int   | Prioridade do professor onde 0 é a maior e +infinito é a menor  |
| hiring_date  | date   | data de contratação do professor FORMATO DD/MM/YYYY  |
| titulation | string | Titulação do professor                                 |
| maxclasses | int | máximo de aulas que o professor pode dar por semana       |
| days  | string | dias da semana que o professor pode lecionar                |
| time_start  | string | início do tempo que o professor pode lecionar         |
| time_end  | string | fim do tempo que o professor pode lecionar              |

### Exemplo

```json
rote: /schools/1/professors/1
json: {
	"name": "Wallace Andrade",
	"email": "wallace.romantismo@gmail.com",
	"subjescts": [1, 2, 3],
	"priority": 5,
	"hiring_date": "13/02/2019",
	"titulation": "Mestrado",
	"maxclasses": 4,
	"days": [1, 2, 3, 4],
	"time_start": "08:20",
	"time_end": "15:30"
}
```

### Resposta

    Status: 204 No Content

## Deletar um professor <a name="delete_turn"></a>

Removendo um determinado professor

	DELETE /schools/:id_school/professors/:id_professor
	REQUIRED authentication

### Exemplo

```json
    rote: /schools/1/professors/1
```

### Resposta

    Status: 204 No Content
