// File Name: app.ts
// Student Name: Chesta Patel
// Student ID: 200542446
// Date: 23rd June 2023

// express modules
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

// database modules
import mongoose from "mongoose";
import db from "./db";

mongoose.connect(db.remoteURI);

// DB Connection Events
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB`);
});

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});

import indexRouter from "../Routes/index";

let app = express();

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../Client")));

app.use("/api/", indexRouter);

export default app;
