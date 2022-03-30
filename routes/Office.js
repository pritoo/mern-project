import  express from "express";
import {getEmployees,createEmployees,deleteEmployee} from "../controllers/office.js";
import office from '../models/office.js'
const router =express.Router();
 
router.get('/',getEmployees);

router.post('/',createEmployees);

router.delete('/:id',deleteEmployee);

export default router
