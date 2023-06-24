"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_1 = require("../Controllers/movie");
let router = express_1.default.Router();
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});
router.get("/list", function (req, res, next) {
    (0, movie_1.DisplayMovieList)(req, res, next);
});
router.get("/find/:id", function (req, res, next) {
    (0, movie_1.DisplayMovieByID)(req, res, next);
});
exports.default = router;
//# sourceMappingURL=index.js.map