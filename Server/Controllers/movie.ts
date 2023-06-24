// File Name: movie.ts
// Student Name: Chesta Patel
// Student ID: 200542446
// Date: 21st June 2023

import { Request, Response, NextFunction } from "express";

import Movie from "../Models/movie";

export function DisplayMovieList(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    Movie.find({})
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            console.error(err);
        });
}
