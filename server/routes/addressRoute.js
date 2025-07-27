import express from 'express';
import { addAddress, getAddress } from '../controllers/addressController.js';
import authUser from '../middlewares/authUser.js';

const addressRouter = express.Router();

// Add new address (only if user is logged in)
addressRouter.post('/add', authUser, addAddress);

// Get all addresses for the user
addressRouter.get('/get', authUser, getAddress);

export default addressRouter;
