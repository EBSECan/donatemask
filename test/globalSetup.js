const { MongoMemoryServer } = require('mongodb-memory-server');

module.exports = async function globalSetup() {
  console.log('Starting in-memory mongodb server for testing...');
  const instance = await MongoMemoryServer.create();
  const uri = instance.getUri();
  global.__MONGOINSTANCE = instance;
  process.env.ATLAS_URI = uri.slice(0, uri.lastIndexOf('/'));
};
