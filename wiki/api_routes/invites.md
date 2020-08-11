[Voltar](menu.md)

# Rotas de Convites

## Selecionar Convites professor <a name="invite_professor"></a>

Selecionar todas os convites que o indivíduo tem acesso

	GET /schools/:id_school/invites
	REQUIRED authentication

### Exemplo

```
	rote: /schools/1/invites
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
    "invites":[
    	{
    		"id_invite": 1,
    		"id_school": 1,
    		"invite_user": "wallace@gmail.com",
    		"invite_hour": "10:03"
    	}
    ]
}
```
## Selecionar Convites alunos <a name="invite_student"></a>

Selecionar todas os convites que o indivíduo tem acesso

	GET /schools/:id_school/classes/:id_classe/invites
	

### Exemplo

```
	rote: /schools/1/classes/1/invites
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
    "invites":[
    	{
    		"id_invite": 1,
    		"id_school": 1,
    		"id_class": 1,
    		"invite_user": "vinicius@gmail.com",
    		"invite_hour": "10:03"
    	}
    ]
}
```

## Selecionar Entrada dos professores <a name="join_professor"></a>

Selecionar todas as entradas de professor que o indivíduo tem acesso
GET /schools/:id_school/joins
### Exemplo

```
	rote: /schools/1/joins
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
    "joins":[
    	{
    		"id_invite": 1,
    		"id_join": 1,
    		"id_school": 1,
    		"join_user": "wallace@gmail.com",
    		"join_hour": "10:03"
    	}
    ]
}
```
## Selecionar entrada dos alunos <a name="join_student"></a>

Selecionar todas as entradas de aluno que o indivíduo tem acesso
GET /schools/:id_school/classes/:id_classe/joins
### Exemplo

```
	rote: /schools/1/classes/1/joins
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
    "invites":[
    	{
    		"id_invite": 1,
    		"id_school": 1,
    		"id_join": 1,
    		"id_class": 1,
    		"join_user": "vinicius@gmail.com",
    		"join_hour": "10:03"
    	}
    ]
}
```