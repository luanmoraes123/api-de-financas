import { Router } from 'express';
import { save } from '../user/user.model.js';
import { login, register } from '../auth/auth.service.js';

const router = Router();

router.get('/login', async (req, res) => {
  const data = await login(req.body)
  res.status(200).json({ data });
});

router.post('/register', async (req, res) => {
  const data = await register(req.body);
  res.status(200).json({ data });
});



export default router;