import { isAdmin } from '@/middlewares/isAdmin';
import { verifyToken } from '@/middlewares/verifyToken';
import { createProductController } from '@/useCases/product/create';
import { deleteProductController } from '@/useCases/product/delete';
import { getProductController } from '@/useCases/product/get';
import { getAllProductController } from '@/useCases/product/getAll';
import { updateProductController } from '@/useCases/product/update';
import { Router } from 'express';

const productRouter = Router();

productRouter.post('/', verifyToken, isAdmin, createProductController.handle);

productRouter.get('/', getAllProductController.handle);

productRouter.get('/:id', getProductController.handle);

productRouter.delete('/:id', verifyToken, isAdmin, deleteProductController.handle);

productRouter.put('/:id', verifyToken, isAdmin, updateProductController.handle);

export { productRouter };
