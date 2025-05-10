import express from "express";
import { addDoctor , getDoctors, doctors } from "../controllers/doctorController.js";

const router = express.Router();


router.post('/add-doctor', addDoctor)
router.get('/list-doctors-with-filter', getDoctors);
router.get('/getdoctors',doctors)
export default router;