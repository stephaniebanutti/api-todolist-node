# API de Gerenciamento de Tarefas

Uma API simples para gerenciar uma lista de tarefas.

## Funcionalidades

- Obter todas as tarefas
- Criar uma nova tarefa

## Tecnologias Utilizadas

- Node.js
- Express.js

## Instalação

1. Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org).
2. Clone este repositório ou faça o download do código-fonte.
3. Abra o terminal na pasta do projeto e execute o seguinte comando para instalar as dependências:

```bash
npm install
```

<br>Inicie o servidor da API com o seguinte comando:

```bash
node app.js
```

A API estará disponível em http://localhost:3000.

## Rotas

### GET /tasks:<br>
Retorna todas as tarefas existentes. <br><br>

### POST /tasks:<br>
Cria uma nova tarefa. Deve ser fornecido um objeto JSON no corpo da requisição com as seguintes propriedades:

<b>title:</b> Título da tarefa (string). <br>
<b>completed:</b> Status da tarefa (boolean).

<br> Exemplo de corpo da requisição:

```bash
json
{
  "title": "Estudar para a prova",
  "completed": false
}
```

## Exemplo de Uso
### Obtendo todas as tarefas:

```bash
GET http://localhost:3000/tasks
```

### Criando uma nova tarefa:

```bash
POST http://localhost:3000/tasks

Content-Type: application/json

{
  "title": "Fazer exercícios",
  "completed": false
}
```
