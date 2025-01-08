import { Router } from "express";
import { feedbackController } from "../controllers/feedback.controller";
import { updateFeedbackSchema } from "../validation/feedback.validaiton";
import validateRequest from "../middleware/validateRequest";
const feedbackRouter = Router();

feedbackRouter.post('/', feedbackController.createFeedback);
feedbackRouter.get('/', feedbackController.getFeedback);
feedbackRouter.put('/:id', validateRequest(updateFeedbackSchema), feedbackController.updateFeedback);
feedbackRouter.delete('/:id', feedbackController.deleteFeedback);

export { feedbackRouter };
