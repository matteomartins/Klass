
# API Routes

Aqui estão listadas todas as rotas da API da aplicação

# Tabela de Conteudos

1.  Usuário

    1. [Criar um Usuário](users.md#create_user)
    2. [Editar um Usuário](users.md#edit_user)
    3. [Deletar um usuário](users.md#delete_user)

2.  Sessão

    1. [Criar uma Sessão](#create_session)

3.  Escola

    1.  [Criar uma Escola](#create_school)
    2.  [Selecionar todas as Escolas](#select_schools)
    3.  [Selecionar uma Escola](#select_school)
    4.  [Editar uma Escola](#edit_school)
    5.  [Deletar uma Escola](#delete_school)

4.  Sala

    1. [Criar uma Sala](#create_class)
    2. [Selecionar todas as Salas](#select_classes)
    3. [Selecionar uma Sala](#select_class)
    4. [Editar uma Sala](#edit_class)
    5. [Deletar uma Sala](#delete_class)

5.  Turnos

    1. [Criar um turno](#create_turn)
    2. [Selecionar todos os turnos](#select_turns)
    3. [Selecionar um turno](#select_turn)
    4. [Editar um turno](#edit_turn)
    5. [Deletar um turno](#delete_turn)

6.  Matérias

    1. [Criar uma matéria](#create_subject) Adicionar limitações
    1. [Selecionar todas as matérias](#select_subjects)
    1. [Selecionar uma matéria](#select_subject)
    1. [Editar uma matéria](#edit_subject)
    1. [Deletar uma matéria](#delete_subject)

7.  Áreas

    1. [Criar uma área](#create_area)
    2. [Selecionar todas as áreas](#select_area)
    3. [Selecionar uma área](#select_area)
    4. [Editar uma área](#edit_area)
    5. [Deletar uma área](#delete_area)

8.  Professores

    1. [Criar um professor](#create_professor)
    2. [Selecionar todos os professores](#select_professors)
    3. [Selecionar um professor](#select_professor)
    4. [Editar um professor](#edit_professor)

9.  Horários

    1. [Criar um horário](#create_schedule)
    2. [Selecionar todos os horários da escola](#select_schedules)
    3. [Selecionar um horário](#select_schedule)
    4. [Editar um horário](#edit_schedule)
    5. [Deletar um horário](#delete_schedule)

10. Notificação

    1. [Selecionar notificações](#select_notifications)

11. Convite Professor

    1. [Selecionar um professor](#invite_professor)

12. Convite Aluno

    1. [Selecionar um aluno](#invite_student)

13. Entrar Professor

    1. [Entrar na escola](#join_professor)

14. Entrar Aluno

    1. [Entrar na sala](#join_student)

15. Dashboard

    1. [Informações gerais](#dashboard)

16. Relatorio Professor

    1.  [Gera Relatório](#create_professor_report)
    3.  [Visualiza varios relatórios](#select_professor_reports)
    3.  [Visualiza Relatório](#select_professor_report)
    4.  [Edita Relatório](#edit_professor_report)

17. Relatorio Sala

    1.  [Gera Relatório](#create_student_report)
    2.  [Visualiza varios Relatórios](#select_student_reports)
    3.  [Visualiza um relatório](#select_student_report)
    4.  [Edita Relatório](#edit_student_report)



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

## Criar um Turno <a name="create_turn"></a>

Criando um turno com determinadas propriedades.
POST /turns

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

## Criar uma Área <a name="create_area"></a>

Criando uma área com determinadas propriedades.
POST /areas

### Parâmetros

| Nome      | Tipo   | Descrição    |
| --------- | ------ | ------------ |
| area_name | string | Nome da area |

### Exemplo

```json
rote: /areas
json: {
	"area_name":"Exatas"
}
```

### Resposta

```json
Status: 201 CREATED
_______________________________________________________________

{
    "id_area": 1
}
```

## Selecionar todas as areas <a name="select_areas"></a>

Selecionar todas as areas que o indivíduo tem acesso
GET /areas

### Exemplo

```
	rote: /areas
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
    "areas": [{id_area: 1, nome: "Exatas"}, {id_area: 2, nome: "Informática"}]
}
```

## Selecionar uma área <a name="select_area"></a>

Seleciona uma área em especifico que o individuo tem acesso
GET /areas/:id_area

### Exemplo

```
	rote: /areas/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"area_name":"Exatas"
}
```

## Editar uma área <a name="edit_area"></a>

Editando uma área com determinadas propriedades.
PUT /areas/:id_area

### Parâmetros

| Nome      | Tipo   | Descrição    |
| --------- | ------ | ------------ |
| area_name | string | Nome da area |

### Exemplo

```json
rote: /areas/1
json: {
	"area_name":"Exatas"
}
```

### Resposta

    Status: 204 No Content

## Deletar uma área <a name="delete_area"></a>

Removendo uma determinada área
DELETE /areas/:id_area

### Exemplo

```json
    rote: /areas/1
```

### Resposta

    Status: 204 No Content

## Criar um professor <a name="create_professor"></a>

Criando um professor com determinadas propriedades.
POST /schools/:id_school/professors/

### Parâmetros

| Nome                 | Tipo   | Descrição                                                 |
| -------------------- | ------ | --------------------------------------------------------- |
| professor_name       | string | Nome do professor                                         |
| professor_email      | string | email do professor                                        |
| hiring_date          | date   | data de contratação do professor FORMATO DD/MM/YYYY       |
| professor_titulation | string | Titulação do professor                                    |
| professor_preference | int    | hierarquia do professor                                   |
| professor_maxclasses | int    | máximo de aulas que o professor pode dar por semana       |
| professor_vague      | bit    | Determina se o professor terá aulas vagas                 |
| professor_lessdays   | bit    | Determina se fará o professor ir menos dias para a escola |
| professor_subjects   | string    | Matérias que o professor leciona|
| professor_classes   | string    | turmas que o professor leciona|

### Exemplo

```json
rote: /schools/1/professors/
json: {
	"professor_name": "Wallace Andrade",
	"professor_email": "wallace.romantismo@gmail.com",
	"hiring_date": "13/02/2019",
	"professor_titulation": "Mestrado",
	"professor_preference": 3,
	"professor_maxclasses": 4,
	"professor_vague" :1,
	"professor_lessdays": 0,
	"professor_subjescts": ["Português","Literatura"],
	"professor_classes": ["3 ANO A","3 ANO B"]
}
```

### Resposta

```json
Status: 201 CREATED
_______________________________________________________________

{
    "id_professor": 1
}
```

## Selecionar todas os professores <a name="select_professors"></a>

Selecionar todas os professores de uma escola que o indivíduo tem acesso
GET /schools/:id_school/professors/

### Exemplo

```
	rote: /schools/1/professors/
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
   "professors": [{"id_professor": 1,"professor_name": "Wallace Andrade","professor_email":"wallace.romantismo@gmail.com","hiring_date": "13/02/2019", "professor_titulation": "Mestrado","professor_preference": 3,"professor_maxclasses": 4,"professor_vague" :1,"professor_lessdays": 0, "professor_subjescts": ["Português","Literatura"],
	"professor_classes": ["3 ANO A","3 ANO B"],"professor_time_start": "08:20",
	"professor_time_end": "15:30"},{"id_professor": 2,"professor_name": "Valmir Nunes","professor_email":"valmir.biologia@gmail.com","hiring_date": "11/01/2018", "professor_titulation": "Doutorado","professor_preference": 1,"professor_maxclasses": 5,"professor_vague" :0,"professor_lessdays": 1,	"professor_subjescts": ["Biologia"],
	"professor_classes": ["3 ANO A","3 ANO B","1 ANO A","1 ANO B"],"professor_time_start": "08:20", "professor_time_end": "15:30"}]
}
```

## Selecionar um Professor <a name="select_professor"></a>

Seleciona um professor em especifico que o individuo tem acesso
GET /schools/:id_school/professors/:id_professor

### Exemplo

```
	rote: /schools/1/professors/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"professor_name": "Wallace Andrade",
	"professor_email": "wallace.romantismo@gmail.com",
	"hiring_date": "13/02/2019",
	"professor_titulation": "Mestrado",
	"professor_preference": 3,
	"professor_maxclasses": 4,
	"professor_vague" :1,
	"professor_lessdays": 0,
	"professor_subjescts": ["Português","Literatura"],
	"professor_classes": ["3 ANO A","3 ANO B"],
	"professor_time_start": "08:20",
	"professor_time_end": "15:30"

}
```

## Editar um professor <a name="edit_professor"></a>

Editando um Turno com determinadas propriedades.
PUT /schools/:id_school/professors/:id_professor

### Parâmetros

| Nome                 | Tipo   | Descrição                                                 |
| -------------------- | ------ | --------------------------------------------------------- |
| professor_name       | string | Nome do professor                                         |
| professor_email      | string | email do professor                                        |
| hiring_date          | date   | data de contratação do professor FORMATO DD/MM/YYYY       |
| professor_titulation | string | Titulação do professor                                    |
| professor_preference | int| hierarquia do professor                                   |
| professor_maxclasses | int| máximo de aulas que o professor pode dar por semana       |
| professor_vague      | bit    | Determina se o professor terá aulas vagas                 |
| professor_lessdays   | bit    | Determina se fará o professor ir menos dias para a escola |
| professor_subjects   | string    | Matérias que o professor leciona|
| professor_classes   | string    | turmas que o professor leciona|
| professor_days  | string| dias da semana que o professor pode lecionar|
| professor_time_start  | string| início do tempo que o professor pode lecionar|
| professor_time_end  | string| fim do tempo que o professor pode lecionar|

### Exemplo

```json
rote: /schools/1/professors/1
json: {
	"professor_name": "Wallace Andrade",
	"professor_email": "wallace.romantismo@gmail.com",
	"hiring_date": "13/02/2019",
	"professor_titulation": "Mestrado",
	"professor_preference": 3,
	"professor_maxclasses": 4,
	"professor_vague" :1,
	"professor_lessdays": 0,
	"professor_subjescts": ["Português","Literatura"],
	"professor_classes": ["3 ANO A","3 ANO B"],
	"professor_time_start": "08:20",
	"professor_time_end": "15:30"
```

### Resposta

    Status: 204 No Content

## Deletar um professor <a name="delete_turn"></a>

Removendo um determinado professor
DELETE /schools/:id_school/professors/:id_professor

### Exemplo

```json
    rote: /schools/1/professors/1
```

### Resposta

    Status: 204 No Content

## Criar um Relatório escolar <a name="create_school_report"></a>

Criando um relatório escolar com determinadas propriedades.
POST /schools/:id_school/reports

### Parâmetros

| Nome           | Tipo   | Descrição                                       |
| -------------- | ------ | ----------------------------------------------- |
| report_type    | string | Tipo de relatório                               |
| report_content | string | conteudo do relatório                           |
| report_date    | date   | data da emissão do relatório FORMATO DD/MM/YYYY |

### Exemplo

```json
rote: /schools/1/reports
json: {
	"report_type": "admin",
	"report_content": "*Inserir relatorio aqui*",
	"report_date": "04/07/2020"
}
```

### Resposta

```json
Status: 201 CREATED
_______________________________________________________________

{
    "id_report": 1
}
```

## Criar um Relatório de sala <a name="create_class_report"></a>

Criando um relatório de sala com determinadas propriedades.
POST /schools/:id_school/classes/:id_class/reports

### Parâmetros

| Nome           | Tipo   | Descrição                                       |
| -------------- | ------ | ----------------------------------------------- |
| report_type    | string | Tipo de relatório                               |
| report_content | string | conteudo do relatório                           |
| report_date    | date   | data da emissão do relatório FORMATO DD/MM/YYYY |

### Exemplo

```json
rote: /schools/1/classes/1/reports
json: {
	"report_type": "admin",
	"report_content": "*Inserir relatorio aqui*",
	"report_date": "04/07/2020"
}
```

### Resposta

```json
Status: 201 CREATED
_______________________________________________________________

{
    "id_report": 1
}
```

## Selecionar todos os relatórios escolares <a name="select_school_reports"></a>

Selecionar todos relatórios escolares que o indivíduo tem acesso
GET /schools/:id_school/reports

### Exemplo

```
	rote: /schools/1/reports
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
 "reports": [
	 {
		 "id_report": 1,
		 "report_type": "admin",
		 "report_content": "*Inserir relatorio aqui*","report_date": "04/07/2020"
	 },
	 {
		 "id_report":2,
		 "report_type": "admin",
		 "report_content": "*Inserir relatorio aqui*","report_date": "04/07/2020"
	}
 ]
}
```

## Selecionar todos os relatórios de sala <a name="select_class_reports"></a>

Selecionar todos relatórios de sala que o indivíduo tem acesso
GET /schools/:id_school/classes/:id_class/reports

### Exemplo

```
	rote: /schools/1/classes/1/reports
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
 "reports": [{"id_report": 1,"report_type": "admin","report_content": "*Inserir relatorio aqui*","report_date": "04/07/2020"},{"id_report":2,"report_type": "admin","report_content": "*Inserir relatorio aqui*","report_date": "04/07/2020"}]
}
```

## Selecionar um relatório escolar especifico <a name="select_school_report"></a>

Seleciona um relatório escolar em especifico que o individuo tem acesso
GET /schools/:id_school/reports/:id_report

### Exemplo

```
	rote: /schools/1/reports/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"report_type": "admin",
	"report_content": "*Inserir relatorio aqui*",
	"report_date": "04/07/2020"
}
```

## Selecionar um relatório de sala especifico <a name="select_class_report"></a>

Seleciona um relatório de sala em especifico que o individuo tem acesso

    GET /schools/:id_school/classes/:id_class/reports/:id_report

### Exemplo

```
	rote: /schools/1/classes/1/reports/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"report_type": "admin",
	"report_content": "*Inserir relatorio aqui*",
	"report_date": "04/07/2020"
}
```

## Deletar um relatório escolar <a name="delete_school_report"></a>

Removendo um determinado relatório escolar

    DELETE /schools/:id_school/reports/:id_report

### Exemplo

```json
    rote: /schools/1/reports/1
```

### Resposta

    Status: 204 No Content

## Deletar um relatório de sala <a name="delete_class_report"></a>

Removendo um determinado relatório escolar
DELETE /schools/:id_school/classes/:id_class/reports/:id_report

### Exemplo

```json
    rote: /schools/1/classes/1/reports/1
```

### Resposta

    Status: 204 No Content

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
    
## Selecionar todas as notificações <a name="select_notifications"></a>

Selecionar todas as notificações que o indivíduo tem acesso
GET /schools/:id_school/classes/:id_class/notifications/

### Exemplo

```
	rote: /schools/1/
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
    "notifications":[
    	{
    		"id_notification": 1, "notifcation_date": "06/07/2020",
    		"notification_content": "Messias entrou na escola Etec de Taboão da Serra"
    	}
    ]
}
```

## Selecionar Convites professor <a name="invite_professor"></a>

Selecionar todas os convites que o indivíduo tem acesso
GET /schools/:id_school/invites
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

## Informações gerais da Dashboard <a name="dashboard"></a>

Exibe as informações do dashboard da escola
GET /schools/:id_school/
### Exemplo
```
	rote: /schools/1/dashboard
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
    "dashboard":{
		"school_name": "ETEC de Taboão da serra",
		"semanal_hours": 40,
		"professors_number": 22,
		"classes_number": 5,
		"students_number":340,
		"subjects_number": 36,
		"turns_number":3,
		"notifications_number": 54,
		"reports_number": 12
    }
}
```

## Criar um relatório de professor<a name="create_professor_report"></a>

Criando um relatório de professor com determinadas propriedades.
POST /schools/:id_school/professors/reports/

### Parâmetros

| Nome                 | Tipo   | Descrição             |
| -------------------- | ------ | --------------------- |
| id_professor         | int | ID do professor       |
| subject_abbreviation | string | Abreviação da matéria |
| report_date | date | Data da criação desse relaório |
| report | object | Contém todos os dias, horário de início e fim, sala de aula |

### Exemplo

```json
rote: /schools/1/professors/reports/
json: {
	"id_professor": 1,
	"subject_abbreviation": "PORT",
	"report_date": "08/07/2020",
	"report": 
		“monday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	   “tuesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “wednesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “thursday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “friday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ]
}
```

### Resposta

```json
Status: 201 CREATED
_______________________________________________________________

{
    "id_professor_report": 1
}
```
## Selecionar vários relatórios de professores<a name="select_professor_reports"></a>

Selecionando todos os relatórios de professores
GET /schools/:id_school/professors/reports/


### Exemplo

```
	rote: /schools/1/professors/reports/
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
    "reports":[{
    	"id_report":1,
	    "id_professor": 1,
		"subject_abbreviation": "PORT",
		"report_date": "08/07/2020",
		"report": 
		“monday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	   “tuesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “wednesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “thursday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “friday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ]
    },
    "id_report":2,
    "id_professor": 2,
		"subject_abbreviation": "MAT"
		"report_date": "08/07/2020",
		"report": 
		“monday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 3,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 3,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 2
	      }
	     ],
	   “tuesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “wednesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “thursday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “friday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ]
    }
    
    ]
}
```

## Selecionar um relatório de professor<a name="select_professor_report"></a>

Selecionando um relatório de professor
GET /schools/:id_school/professors/reports/:id_report

### Exemplo

```
	rote: /schools/1/professors/reports/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"id_professor": 1,
	"subject_abbreviation": "PORT",
	"report_date": "08/07/2020",
	"report": 
		“monday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	   “tuesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “wednesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “thursday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “friday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ]
}
```


## Editar um relatório de professor<a name="edit_professor_report"></a>

Editando um relatório de professor
PUT /schools/:id_school/professors/reports/:id_professor_report

### Exemplo

```
	rote: /schools/1/professors/reports/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________

{
	"id_professor": 1,
	"subject_abbreviation": "FIS",
	"report_date": "08/07/2020",
	"report": 
		“monday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	   “tuesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “wednesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “thursday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ],
	    “friday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_class": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_class": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_class": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_class": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_class": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_class": 3
	      }
	     ]
}
```

## Criar um relatório de Estudante<a name="create_student_report"></a>

Criando um relatório de professor com determinadas propriedades.
POST /schools/:id_school/classes/reports/

### Parâmetros

| Nome                 | Tipo   | Descrição             |
| -------------------- | ------ | --------------------- |
| id_class       | int | ID da sala       |
| report_date | date | Data da criação desse relaório |
| report | object | Contém todos os dias, horário de início e fim, sala de aula |

### Exemplo

```json
rote: /schools/1/classes/reports/
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________
{
	"id_class": 1,
	"report_date": "08/07/2020",
	"report":
		“monday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	   “tuesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “wednesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “thursday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject":1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “friday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ]
}
```

## Selecionar todos os relatório de estudantes<a name="select_student_reports"></a>

Selecionando todos os relatórios do estudantes que o usuário tem acesso
GET /schools/:id_school/classes/reports/

### Exemplo

```
rote: /schools/1/classes/reports/
```

### Resposta

```json
	reports: [{
	"id_class": 1,
	"id_class_report": 1,
	"report_date": "08/07/2020",
	"report":
		“monday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	   “tuesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “wednesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “thursday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject":1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “friday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ]},
	    {
	"id_class": 2,
	"id_class_report": 2,
	"report_date": "08/07/2020",
	"report":
		“monday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	   “tuesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “wednesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “thursday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject":1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “friday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ]}
	]
```

## Selecionar um  relatório de estudante<a name="select_student_report"></a>

Selecionando um  relatório de estudante que o usuário tem acesso
GET /schools/:id_school/classes/reports/:id_report

```json
rote: /schools/1/classes/reports/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________
{
	"id_class": 1,
	"report_date": "08/07/2020",
	"report":
		“monday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	   “tuesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “wednesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “thursday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject":1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “friday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ]
}
```


## Editar um  relatório de estudante<a name="edit_student_report"></a>

editando um  relatório de estudante que o usuário tem acesso
PUT /schools/:id_school/classes/reports/:id_report

### Exemplo

```json
rote: /schools/1/classes/reports/1
```

### Resposta

```json
Status: 200 OK
_______________________________________________________________
{
	"id_class": 1,
	"report_date": "08/07/2020",
	"report":
		“monday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	   “tuesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “wednesday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “thursday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject":1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ],
	    “friday”: [
	      {
	          "hour_start": "07:30",
	          "hour_end": "08:20",
	          "id_subject": 1,
	      },
	      {
	          "hour_start": "08:20",
	          "hour_end": "09:10",
	          "id_subject": 1,
	      },
	      {  "hour_start": "09:10",
	          "hour_end": "10:00",
	          "id_subject": 2,
	      },
	      {
	          "hour_start": "10:20",
	          "hour_end": "11:10",
	          "id_subject": 2
	      },
	      {
	          "hour_start": "11:10",
	          "hour_end": "12:00",
	          "id_subject": 3
	      },
	      {
	          "hour_start": "12:50",
	          "hour_end": "13:40",
	          "id_subject": 3
	      }
	     ]
}
```