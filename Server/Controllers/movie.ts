// File Name: movie.ts
// Student Name: Chesta Patel
// Student ID: 200542446
// Date: 21st June 2023

import { Request, Response, NextFunction } from "express";

import Movie from "../Models/movie";

/**
 * Fucntion get list of movies
 */
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

/**
 * Fucntion get Movie By ID
 */
export function DisplayMovieByID(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    // Getting the id from url params
    let id = req.params.id;

    // finding movie by passed id
    Movie.findById({ _id: id })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (err) {
            console.error(err);
        });
}
