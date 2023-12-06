import { Router } from 'express';
import { save } from '../user/user.model.js';
import { login, register } from '../auth/auth.service.js';

const router = Router();

router.post('/login', async (req, res) => {
  const data = await login(req.body)
  if (data.error) {
    return res.status(400).json({ data: data.error });
  }
  return res.status(200).json({ data });
});

router.post('/register', async (req, res) => {
  const data = await register(req.body);
  if (data.error) {
    return res.status(400).json({ data: data.error })
  }
  return res.status(200).json({ data });

});



export default router;