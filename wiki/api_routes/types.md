[Voltar](menu.md)

# Tipos de dados a serem inseridos

Aqui estão a lista de tipos de variaveis

## INTERVAL <a name="type_interval"></a>

Interval é uma classe, que possui as propriedades a seguir:

| Nome           | Tipo   | Descrição              |
| -------------- | ------ | ---------------------- |
| start | int    | inicio do intervalo (HH:MM) |
| end   | int    | fim do intervalo (HH:MM) |

## COURSE <a name="type_course"></a>

Course é uma classe, que possui as propriedades a seguir:

| Nome           | Tipo   | Descrição              |
| -------------- | ------ | ---------------------- |
| name      | string | nome do curso          |
| turn_id     | string | id do curso |
| modules       | array | vetor de inteiros, cada inteiro é um id do modulo   |
