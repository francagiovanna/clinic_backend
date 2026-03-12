import express from 'express';
import { prisma } from './prisma/prisma.ts';
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  console.log(req)
  res.send("Hello world")
})

// Endpoints usuario
app.get('/usuarios', (req, res) => {
  const usuarios = prisma.usuario.findMany();
  res.json(usuarios);
})


app.listen(port, () => {
  console.log("Servidor ta de pé :p")
})