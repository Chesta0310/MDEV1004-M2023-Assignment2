// File Name: index.ts
// Student Name: Chesta Patel
// Student ID: 200542446
// Date: 23rd June 2023
import express from "express";
import {
    AddMovie,
    DeleteMovie,
    DisplayMovieByID,
    DisplayMovieList,
    UpdateMovie,
} from "../Controllers/movie";
import {
    ProcessLogin,
    ProcessLogout,
    ProcessRegisterPage,
} from "../Controllers/user";
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

router.post("/update/:id", function (req, res, next) {
    UpdateMovie(req, res, next);
});

router.delete("/delete/:id", function (req, res, next) {
    DeleteMovie(req, res, next);
});

router.post("/register", function (req, res, next) {
    ProcessRegisterPage(req, res, next);
});

router.post("/login", function (req, res, next) {
    ProcessLogin(req, res, next);
});

router.get("/logout", function (req, res, next) {
    ProcessLogout(req, res, next);
});

export default router;
