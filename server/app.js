require("dotenv").config({ path: "./config.env" });

const api = require("./api");
const dbo = require("./db/conn");

const start = async () => {
  try {
    await dbo.connectToServer();
  } catch (err) {
    console.error({ err }, "Unable to connect to database");
    process.exit(-1);
  }

  // Allow overriding port, but default to 443
  const port = process.env.PORT || 443;

  api.listen(port, () => {
    console.log(`Running server on port ${port}`);
  });
};

start();
