import { getAllTheData } from "./assController.js";
const routes = (app) =>{
    app.route("/assertionTestOne/:paramOne").get((req, res, next) => {
        next();
    }, getAllTheData);
}
export default routes;