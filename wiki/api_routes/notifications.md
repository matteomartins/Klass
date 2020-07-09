[Voltar](menu.md)

# Rotas de Notificação

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