module.exports = class GCloudPage {
  async open(link) {
    return await browser.url(link);
  }
};
