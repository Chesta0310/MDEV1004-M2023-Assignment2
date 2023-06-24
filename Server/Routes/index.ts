// File Name: index.ts
// Student Name: Chesta Patel
// Student ID: 200542446
// Date: 23rd June 2023
import express from "express";
import {
    AddMovie,
    DisplayMovieByID,
    DisplayMovieList,
} from "../Controllers/movie";
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/list", function (req, res, next) {
    DisplayMovieList(req, res, next);
});

router.get("/find/:id", function (req, res, next) {
    DisplayMovieByID(req, res, next);
});

router.post("/add", function (req, res, next) {
    AddMovie(req, res, next);
});

export default router;
