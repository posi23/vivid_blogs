import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./app/routes";
import db from "./app/config/db"

const app = express();

app.use(cors());
app.use(bodyParser.json()); //to parse requests of content type - application/json
app.use(bodyParser.urlencoded({ extended: true })); //parse requests of content-type - application/x-www-form-urlencoded

app.use("/", routes);

// send back a 404 error for any unknown api request
app.use((req: Request, res: Response, next) => {
    res.status(404).send({ error: "Route not found" });
    next();
});

// Port that listens for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
