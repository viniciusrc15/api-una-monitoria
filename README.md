# BackEndMonitoria
Controla acesso server side do Una Monitoria ao banco de dados

## Una Monitoria
Monitoria UNA consiste em um WebApp que auxilie os alunos do Centro Universitário UNA à pesquisarem monitorias específicas relacionadas às matérias que estejam cursando atualmente. 

### Para acesso ao banco é necessário configurar variáveis de ambiente para informações dos valores solicitar ao dono do repositório.

### Existe um dump do banco MySql na raiz do projeto "dump-unamonitoria.sql", basta executá-lo para um projeto local e depois configurar o acesso para seu banco no arquivo utils/dbHelp.js

## Run
* Instalar NodeJs/NPM no computador.
* Fazer o download do projeto.
* Abrir o terminal ou prompt e na pasta do projeto usar "npm install" para baixar os módulos do projeto.
* Ainda no terminal ou prompt rodar "npm start".
* As requisições são ser feitas no localhost:3000