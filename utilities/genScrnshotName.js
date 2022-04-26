let now = new Date();
scrnshotName = String(now).slice(4, 24).replaceAll(" ", "-");
module.exports = { scrnshotName };
