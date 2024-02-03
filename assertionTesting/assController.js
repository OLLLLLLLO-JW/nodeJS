import { serviceDataResponse } from "./serviceData.js";

export const getAllTheData = (req, res) =>{

    res.send(serviceDataResponse);
}