import express from 'express';
import useRoute from './modules/user/user.route.js'
const app = express();


app.use(express.json());

app.get('/user', useRoute)


app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});