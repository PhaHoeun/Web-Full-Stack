const fs = require("fs/promises")
//npm install moment
const moment = require("moment") // datetime

const jwt = require("jsonwebtoken")
const { Config } = require('../config/config')

//create folder logs

const logError = async (controller, message, res) => {

    try {
        //append the log message to the file (create the file if it doesn't exist)
        const timestamp = moment().format('DD/MM/YYYY HH:mm:ss'); //use  'moment' for format timestamp
        const path = "./logs/" + controller + ".txt";
        const logMessage = "[" + timestamp + "] " + message + "\n\n";
        await fs.appendFile(path, logMessage);
    } catch (e) {
        console.error('Error writing to log file: ', error);

    }
    res.status(500).send({
        error: 'Internal Server Error!'
    });
    
}

const isEmptyOrNull = (value) => {
    if (value === '' || value === null || value === undefined) {
        return true;
    } else {
        return false;
    }
}


const validate_token = () => {
    // call in midleware in route, (role route, user route, .......)
    return (req, res, next) => {
        var authorization = req.headers.authorization; // token from client
        var token_from_client = null;
        if (authorization != null && authorization != "") {
            token_from_client = authorization.split(" "); //authorized: "Bearer lkjlsskfjjs;fjakfjsf;aj"
            token_from_client = token_from_client[1]; // get only access_token
        }

        if (token_from_client == null) {
            res.status(401).send({
                message: "Unauthorized!",
            });
        } else {
            jwt.verify(token_from_client, Config.ACCESS_TOKEN_KEY, (error, result) => {
                if (error) {
                    res.status(401).send({
                        message: "Unauthorize!",
                        // error: error,
                    });
                } else {
                    req.user = result.data; // write user property
                    req.user_id = result.data.id; // write user property
                    req.username = result.data.username;
                    next(); //continue
                }
            });
        }
    }
}


module.exports = {
    logError,
    isEmptyOrNull, 
    validate_token,
}