import express from "express";
import {
    getjadwal, 
    getjadwalById,
    createjadwal,
    updatejadwal,
    deletejadwal
} from "../controllers/JadwalController.js";
 
const router = express.Router();
 
router.get('/jadwal', getjadwal);
router.get('/jadwal/:id', getjadwalById);
router.post('/jadwal', createjadwal);
router.patch('/jadwal/:id', updatejadwal);
router.delete('/jadwal/:id', deletejadwal);
 
export default router;