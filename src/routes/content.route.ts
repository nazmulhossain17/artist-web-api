import { Router } from 'express';
import { contentController } from '../controllers/content.controller';
import validateRequest from '../middleware/validateRequest';
import { updateContentSchema } from '../validation/feedback.validaiton';

const contentRouter = Router();

contentRouter.get('/content', contentController.getContent);
contentRouter.post('/content', contentController.createContent);
contentRouter.put('/content/:id', validateRequest(updateContentSchema), contentController.updateContent);

export default contentRouter;