let now = new Date();
let screenshotName = now.toISOString().slice(0,19).replaceAll(":", "-")
module.exports = { screenshotName };