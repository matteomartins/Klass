[Voltar](menu.md)

# Rotas da Matéria

## Criar uma Matéria <a name="create_subject"></a>

Criando uma matéria com determinadas propriedades.
POST /subjects

### Parâmetros

| Nome                 | Tipo   | Descrição             |
| -------------------- | ------ | --------------------- |
| subject_name         | string | Nome da matéria       |
| subject_abbreviation | string | Abreviação da matéria |



### Exemplo

```json
rote: /subjects
json: {
	"subejct_name": "Matemática",
	"subject_abbreviation": "MAT"
}
```

### Resposta

```json
Status: 201 CREATED
_______________________________________________________________

{
    "id_subject": 1
}
```

## Selecionar todas as Matérias <a name="select_subjects"></a>

Selecionar todas as Matérias que o indivíduo tem acesso
GET /subjects

### Exemplo

```json
	rote: /subjects

	json:{

	}
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
    "subjects":[{"id_subect": 1,"subejct_name": "Matemática","subject_abbreviation": "MAT"},{"id_subect": 2,"subejct_name": "Programação para Computadores","subject_abbreviation": "PC"}]
}
```

## Selecionar uma Matéria <a name="select_subject"></a>

Seleciona uma matéria em especifico que o individuo tem acesso
GET /subjects/:id_subject

### Exemplo

```
	rote: /subjects/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"subejct_name": "Matemática",
	"subject_abbreviation": "MAT"

}
```

## Editar uma matéria <a name="edit_subject"></a>

Editando uma Matéria com determinadas propriedades.
PUT /subjects/:id_subject

### Parâmetros

| Nome                 | Tipo   | Descrição             |
| -------------------- | ------ | --------------------- |
| subject_name         | string | Nome da matéria       |
| subject_abbreviation | string | Abreviação da matéria |

### Exemplo

```json
rote: /subjects/1
json: {
	"subejct_name": "Matemática",
	"subject_abbreviation": "MAT"
}
```

### Resposta

    Status: 204 No Content

## Deletar uma matéria <a name="delete_subject"></a>

Removendo uma determinada matéria
DELETE /subjects/:id_subject

### Exemplo

```json
    rote: /subjects/1
```

### Resposta

    Status: 204 No Content
