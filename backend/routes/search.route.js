import express from "express";
import { getSearchHistory, removeSearchHistory, searchMovie, searchPerson, searchTv } from "../controllers/search.controller.js";


const router = express.Router();

//
router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history", getSearchHistory);

router.delete("/history/:id", removeSearchHistory);

export default router;