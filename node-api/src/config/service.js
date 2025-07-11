const fs = require("fs/promises")
//npm install moment
const moment = require("moment") // datetime

//create folder logs

const logError = async (controller, message, res) => {

    try {
        //append the log message to the file (create the file if it doesn't exist)
        const timestamp = moment().format('DD/MM/YYYY HM:mm:ss'); //use  'moment' for format timestamp
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

module.exports = {
    logError,
}