import { Router } from 'express';
import multer from 'multer';

import { SessionController, UserController } from './app/controllers';
import { authMiddleware } from './app/middlewares';
import { multerConfig } from './config';

const upload = multer(multerConfig);
const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), (request, response) => {
  return response.json({ ok: true });
});

export default routes;
