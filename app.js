const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simulando uma lista de tarefas
let tasks = [
  { id: 1, title: 'Fazer compras', completed: false },
  { id: 2, title: 'Estudar Node.js', completed: true },
];

// Obter todas as tarefas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Criar uma nova tarefa
app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
