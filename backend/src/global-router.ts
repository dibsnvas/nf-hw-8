import { Router } from 'express';
import { roadmapRouter } from './roadmap/roadmap.router';
import userPromptRouter from './roadmap/userprompt.route';

const globalRouter = Router();


globalRouter.use(roadmapRouter);
globalRouter.use(userPromptRouter);

export default globalRouter;