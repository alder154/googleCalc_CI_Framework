function generateMail() {
  let testMail = `test${new Date().getTime() % 10 ** 5}`;
  return testMail;
}
module.exports = { generateMail };
