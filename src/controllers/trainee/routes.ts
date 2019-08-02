import { Router } from 'express';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { traineeController } from './Controller';
const traineeRouter = new Router();
traineeRouter.route('/')
.get(validationHandler(validation.get), traineeController.get)
.post(validationHandler(validation.create), traineeController.create)
.put(validationHandler(validation.update), traineeController.update)
.delete(validationHandler(validation.delete), traineeController.delete);
export default traineeRouter;
