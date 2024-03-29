import jwt from 'jsonwebtoken'
import { get } from '../modules/user/user.model.js'

export const authMiddleware = async (req, res, next) => {
  try {
    const { id } = jwt.verify(req.token, process.env.JWT_SECRET);
    if (!id) {
      return res.status(403).json({ error: 'Token invalido' });
    }
    const user = await get(id);
    if (!user) {
      return res.status(400).json({ error: 'Usuario nao encontrado' });
    }
    req.user = user;
    return next();
  } catch (error) {
    return res.status(403).json({ error: 'Token invalido' });
  }
}