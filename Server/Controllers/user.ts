// File Name: user.ts
// Student Name: Chesta Patel
// Student ID: 200542446
// Date: 23rd June 2023

import { Request, Response, NextFunction } from "express";
import passport from "passport";

import User from "../Models/user";

/**
 * Function to handle registration
 */
export function ProcessRegisterPage(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    // instantiate a new user object
    let newUser = new User({
        username: req.body.username,
        emailAddress: req.body.EmailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName,
    });

    // Using Passport local mongoose to register the user
    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error("Error: Inserting New User");
            if (err.name == "UserExistsError") {
                console.error("Error: User Already Exists");
            }
            return res.json({
                success: false,
                msg: "User not Registered Successfully!",
            });
        }

        // automatically login the user
        return passport.authenticate("local")(req, res, () => {
            return res.json({
                success: true,
                msg: "User Logged in Successfully!",
                user: newUser,
            });
        });
    });
}
