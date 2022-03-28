import  express from "express";
import {getEmployees} from "../controllers/office.js";
import employee from '../models/office.js'
const router =express.Router();
 
router.get('/getEmployees',getEmployees);

export default router

