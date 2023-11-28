import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import useRoute from './modules/user/user.route.js'
const app = express();


app.use(express.json());

app.use('/user', useRoute);


app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});