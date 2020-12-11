import { Router } from 'express';

const opportunitiesRoutes = Router();

opportunitiesRoutes.get('/', (req, res) => {
  return res.json('ok');
});

export default opportunitiesRoutes;
