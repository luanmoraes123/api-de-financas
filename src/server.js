import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import useRouter from './modules/user/user.route.js'
import authRouter from './modules/auth/auth.route.js'
import bearerToken from 'express-bearer-token';
import categoriasRouter from './modules/categorias/categorias.route.js'
const app = express();
app.use(bearerToken());


app.use(express.json());
app.use(cors());

app.use('/users', useRouter);
app.use('/auth', authRouter);
app.use('/categorias', categoriasRouter);


app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});