import  express from "express";
import {getEmployees,createEmployees,deleteEmployee} from "../controllers/officeController.js";
//import Office from '../models/Office.js'
const router =express.Router();
 
router.get('/',getEmployees);

router.post('/',createEmployees);

router.delete('/:id',deleteEmployee);

export default router

