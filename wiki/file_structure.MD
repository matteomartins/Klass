# Estrutura de Arquivos

## Estrutura de Arquivos do Backend

O projeto segue uma organização simples de arquivos:

- ```app```: Contém todos os arquivos do projeto
    - ```app/Controllers```
    - ```app/Middleware```
    - ```app/Models```
    - ```app/Utils```
    - ```app/Validators```
- ```config```: Contém todas as configurações da aplicação, de authenticação, de cors, etc...
- ```database```: Contém todas as informações para a criação e criação de dados fakes.
    - ```database/migrations```: Arquivos de migrations em JS para a criação do schema compativel com PostgreSQL, Amazon Redshift,MySQL, MariaDB, SQLite3 e MSSQL.
    - ```database/seeds```: Arquivos de seeds para a criação de dados fakes.
    - ```database/factory.js```: Arquivo que contém o schema para geração de dados fakes.
- ```insomnia```: Possui o arquivo com os presets do insomnia para a execução de testes em ambiente de desenvolvimento.
- ```start```: Arquivos para a inicialização do app, além das rotas.
- ```test```: Contém todos os seus testes de aplicativo.



## Estrutura de Arquivos do Frontend