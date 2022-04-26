const GCloudSetupPage = require("../pageobjects/googleCalc.page");
const YopmailPage = require("../pageobjects/yopmail.page");
const { generateMail } = require("../../utilities/generateMail");

describe("Hardcore", async () => {
  let link = "https://cloud.google.com/";
  let yopmailLInk = "https://yopmail.com/";
  const mailLogin = generateMail();

  before(async () => {
    await GCloudSetupPage.open(link);
    await GCloudSetupPage.navigateToComputeEngine();
    await GCloudSetupPage.switchToCalcFrame();
    await GCloudSetupPage.setParamToCalc();
  });

  it("validate price", async () => {
    let priceYopMail = await YopmailPage.getPriceFromYopmail(yopmailLInk, mailLogin);
    let priceGoogle = await YopmailPage.priceFromGoogle
    await expect(priceGoogle).toHaveTextContaining(priceYopMail.slice(-8));
  });
});
