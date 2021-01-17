import { Router } from 'express';

const usersRouter = Router();

//listar todos os usuarios
usersRouter.get('/', async (request, response) => {
  return response.status(200).json({ message: 'ola mundo' });
});

export default usersRouter;
