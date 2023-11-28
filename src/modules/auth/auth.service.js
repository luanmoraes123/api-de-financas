import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { save, getByEmail } from '../user/user.model.js';



export const login = async (params) => {
  const user = await getByEmail(params.email);
  if (!user) {
    return { error: "invalid password or email" }
  }

  const password = bcrypt.compareSync(params.password, user.password);

  if (!password) {
    return { error: "invalid password or email" }
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  return { token }
};

export const register = (params) => { };