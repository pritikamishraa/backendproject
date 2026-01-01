
import dotenv from "dotenv"
import connectDB from "./db/index.js";
//import {app} from './app.js'
dotenv.config({
    path: './.env'
})
import express from "express";

const app = express(); // 👈 THIS LINE WAS MISSING



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



//second method to  connect mongodb we dont have to make separate index.js for that

// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("mongodb connected yeas");
//     app.on("error", (error) => {
//       console.log("ERRR: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw error;
//   }
// })();
