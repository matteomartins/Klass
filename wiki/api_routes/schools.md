[Voltar](menu.md)

# Rotas da Escola

## Criar uma Escola <a name="create_school"></a>

Criando uma Escola com determinadas propriedades.
POST /schools

### Parâmetros

| Nome        | Tipo   | Descrição                |
| ----------- | ------ | ------------------------ |
| school_name | string | Nome da escola           |
| school_desc | string | Descrição da escola      |
| school_year | int    | Período letivo           |
| icon_school | image  | Foto de perfil da Escola |
| turns | array of [turns](types.md#type_turn) | Turno  |

### Exemplo

```json
rote: /schools
json: {
	"school_name": "ETEC de Taboão da Serra",
	"school_desc": "**que que é pra por aqui?**",
	"school_year": 2,
	"icon_school": "icon.png"
}
```

### Resposta

```json
Status: 201 CREATED
_______________________________________________________________

{
    "id_school": 1
}
```

## Selecionar todas as Escolas <a name="select_schools"></a>

Selecionar todas as escolas que o indivíduo tem acesso
GET /schools

### Exemplo

```
	rote: /schools
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
    "schools": [{"id_school":1,"school_name": "ETEC de Taboão da Serra","school_desc": "**que que é pra por aqui?**","school_year": 2,"icon_school": "icon.png"},{"id_school":2,"school_name": "ETEC de Embu das Artes","school_desc": "**que que é pra por aqui?**","school_year": 2,"icon_school": "icon2.png"}]
}
```

## Selecionar uma Escola <a name="select_school"></a>

Seleciona uma escola em especifico que o individuo tem acesso
GET /schools/:id_school

### Exemplo

```
	rote: /schools/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"school_name": "ETEC de Taboão da Serra",
	"school_desc": "**que que é pra por aqui?**",
	"school_year": 2,
	"icon_school": "icon.png"
}
```

## Editar uma Escola <a name="edit_school"></a>

Editando uma Escola com determinadas propriedades.
PUT /schools/:id_school

### Parâmetros

| Nome        | Tipo   | Descrição                |
| ----------- | ------ | ------------------------ |
| school_name | string | Nome da escola           |
| school_desc | string | Descrição da escola      |
| school_year | int    | Período letivo           |
| icon_school | image  | Foto de perfil da Escola |

### Exemplo

```json
rote: /schools/1
json: {
	"school_name": "ETEC de Taboão da Serra",
	"school_desc": "**que que é pra por aqui?**",
	"school_year": 2,
	"icon_school": "icon.png"
}
```

### Resposta

    Status: 204 No Content

## Deletar uma Escola <a name="delete_school"></a>

Removendo uma determinada Escola
DELETE /schools/:id_school

### Exemplo

```json
    rote: /schools/1
```

### Resposta

    Status: 204 No Content