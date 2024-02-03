import { getAllTheData } from "./assController.js";
const routes = (app) =>{
    app.route("/assertionTestOne/:paramOne").get((req, res, next) => {
        // res.send("test Responseflksl");
        next();
    }, getAllTheData);
}
export default routes;