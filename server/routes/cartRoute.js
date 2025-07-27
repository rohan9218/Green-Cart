import express from 'express';
import { updateCart } from "../controllers/cartController.js";
import authUser from "../middlewares/authUser.js";

const cartRouter = express.Router();

// Update Cart
cartRouter.post('/update', authUser, updateCart);

/* Optional: Get Cart
cartRouter.post('/get', authUser, getCart);
*/
export default cartRouter;
