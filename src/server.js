import express from 'express';
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  return res.send('Funcionando');
})


app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});