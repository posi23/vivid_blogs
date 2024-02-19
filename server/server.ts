import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./app/routes";
import db from "./app/config/db"
import { QueryTypes } from "sequelize";

const app = express();

const corsOptions = { origin: `http://localhost:${process.env.CLIENT_PORT}` };

app.use(cors(corsOptions));
app.use(bodyParser.json()); //to parse requests of content type - application/json
app.use(bodyParser.urlencoded({ extended: true })); //parse requests of content-type - application/x-www-form-urlencoded

// app.get("/", async (req: Request, res: Response) => {
//     let result: object[];
//     try {
//         result = await db.query("SELECT * FROM blog LIMIT 1", { type: QueryTypes.SELECT })
//     } catch (err) {
//         console.log(err);
//     }
//     res.json({ message: "Welcome to Posi's server.", blogs: result });
// });

app.use("/", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    res.status(404).send({ error: "Route not found" });
    next();
});

// Port that listens for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
