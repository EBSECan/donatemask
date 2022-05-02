module.exports = async function globalTeardown() {
  const instance = global.__MONGOINSTANCE;
  console.log('Stopping in-memory mongodb server...');
  await instance.stop();
};
