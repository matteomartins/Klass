# Tipos de dados a serem inseridos

Aqui estão a lista de tipos de variaveis

## INTERVAL <a name="type_interval"></a>

Interval é um objeto, que possui as propriedades a seguir:

| Nome           | Tipo   | Descrição              |
| -------------- | ------ | ---------------------- |
| interval_start | int    | inicio do intervalo (HH:MM) |
| interval_end   | int    | fim do intervalo (HH:MM) |

## TURN <a name="type_turn"></a>

| Nome           | Tipo   | Descrição              |
| -------------- | ------ | ---------------------- |
| turn_name      | string | Nome do turno          |
| turn_start     | string | inicio do turno (HH:MM) |
| turn_end       | string | fim do turno (HH:MM)   |
| turn_class_duration | string | período de duração de aula |
| turn_intervals | array of interval | intervalos do turno |
| turn_sunday    | bool    | turno é de domingo       |
| turn_monday    | bool    | turno é de segunda-feira |
| turn_tuesday   | bool    | turno é de terça-feira   |
| turn_wednesday | bool    | turno é de quarta-feira  |
| turn_thursday  | bool    | turno é de quinta-feira  |
| turn_friday    | bool    | turno é de sexta-feira   |
| turn_saturday  | bool    | turno é de sábado        |
