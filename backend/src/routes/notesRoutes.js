import express from "express"
import { createNote, deleteNote, getAllnotes, updateNote } from "../controllers/notesController.js";

const router = express.Router();

export default router

router.get("/", getAllnotes)
router.post("/",createNote)
router.put("/:id", updateNote)
router.delete("/:id",deleteNote)