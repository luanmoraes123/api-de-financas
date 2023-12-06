import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { save, getByEmail } from '../user/user.model.js';



export const login = async (params) => {
  if (!params.email) {
    return { error: 'Email não informado' };
  }

  const user = await getByEmail(params.email);

  if (!user) {
    return { error: 'Email ou senha invalidos' }
  }

  const password = bcrypt.compareSync(params.password, user.password);

  if (!password) {
    return { error: 'Email ou senha invalidos' }
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  return { token }
};

export const register = async (params) => {
  const user = await getByEmail(params.email);
  if (user) {
    return { error: 'Email ja cadastrado' }
  }

  const userCreated = await save(params);

  const token = jwt.sign({ id: userCreated[0] }, process.env.JWT_SECRET);
  return { token }

};