require("dotenv").config({ path: "./config.env" });

const api = require('./api');
const dbo = require("./db/conn");

dbo.connectToServer(function (err) {
    if (err) {
        console.error({ err }, 'Unable to connect to database');
        process.exit(-1);
    }

    api.listen(443, () => {
        console.log('Running server.');
    });
});
