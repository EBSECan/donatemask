const { MongoMemoryServer } = require("mongodb-memory-server");

/* istanbul ignore next */
module.exports.start = async () => {
  console.log("Starting in-memory mongodb server for testing");
  const instance = await MongoMemoryServer.create();

  const shutdown = async () => {
    console.log("Stopping in-memory mongodb server");
    try {
      await instance.stop();
      process.exit();
    } catch (err) {}
  };

  // Tear down server on shutdown
  process.once("SIGINT", async () => await shutdown());
  process.once("SIGTERM", async () => await shutdown());

  // Return the URI we should use with clients
  const uri = instance.getUri();
  return uri.slice(0, uri.lastIndexOf("/"));
};
