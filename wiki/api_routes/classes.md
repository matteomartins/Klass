[Voltar](menu.md)

# Rotas da Sala

## Criar uma Sala <a name="create_class"></a>

Criando uma Sala com determinadas propriedades.
POST /schools/classes

### Parâmetros

| Nome         | Tipo   | Descrição     |
| ------------ | ------ | ------------- |
| class_name   | string | Nome da Sala  |
| class_level  | string | Nivel da sala |
| class_course | string | curso da sala |

### Exemplo

```json
rote: /schools/classes
json: {
	"class_name": "3 Ano",
	"class_level": "A",
	"class_course": "ETIM"

}
```

### Resposta

```json
Status: 201 CREATED
_______________________________________________________________

{
    "id_class": 1
}
```

## Selecionar todas as Salas <a name="select_classes"></a>

Selecionar todas as Salas que o indivíduo tem acesso
GET /schools/:id_school/classes

### Exemplo

```
	rote: /schools/1/classes
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
    "classes": [{"id_school": 1,"id_class": 1, "class_name": "3 Ano","class_level":"A","class_course": "ETIM"}, {"id_school": 1,"id_class": 2, "class_name": "1 Ano","class_level":"B","class_course": "ETIM"}]
}
```

## Selecionar uma Sala <a name="select_class"></a>

Seleciona uma Sala em especifico que o individuo tem acesso
GET /schools/:id_school/classes/:id_class

### Exemplo

```
	rote: /schools/1/classes/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"class_name": "3 Ano",
	"class_level": "A",
	"class_course": "ETIM"

}
```

## Editar uma Sala <a name="edit_class"></a>

Editando uma Sala com determinadas propriedades.
PUT /schools/:id_school/classes/:id_class

### Parâmetros

| Nome         | Tipo   | Descrição     |
| ------------ | ------ | ------------- |
| class_name   | string | Nome da Sala  |
| class_level  | string | Nivel da sala |
| class_course | string | curso da sala |

### Exemplo

```json
rote: /schools/1/classes/1
json: {
	"class_name": "3 Ano",
	"class_level": "A",
	"class_course": "ETIM"
}
```

### Resposta

    Status: 204 No Content

## Deletar uma Sala <a name="delete_class"></a>

Removendo uma determinada Sala
DELETE /schools/:id_school/classes/:id_class

### Exemplo

```json
    rote: /schools/1/classes/1
```

### Resposta

    Status: 204 No Content