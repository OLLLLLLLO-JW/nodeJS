import express from "express";
import routes from './assRoutes.js';

const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
    res.send("Response from testing server for assertion testing");
    next();
});

routes(app);



app.listen(port, console.log(`listening on port ${port}`));
