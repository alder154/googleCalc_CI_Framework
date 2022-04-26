const argv = require("yargs").argv;
function setCapabilities() {
  let capabilities = [
    {
      browserName: "firefox",
    },
    {
      browserName: "chrome",
    },
  ];

  if (argv.browser) {
    const browsers = argv.browser.split(",");
    capabilities = browsers.map((browserName) => {
      return { browserName };
    });
  }
  return capabilities;
}

module.exports = { setCapabilities };
