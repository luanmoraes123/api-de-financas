import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import useRoute from './modules/user/user.route.js'
import authRouter from './modules/auth/auth.route.js'
import bearerToken from 'express-bearer-token';
const app = express();
app.use(bearerToken());


app.use(express.json());
app.use(cors());

app.use('/user', useRoute);
app.use('/auth', authRouter);


app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});