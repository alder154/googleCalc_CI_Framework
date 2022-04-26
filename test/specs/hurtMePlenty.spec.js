const GCloudSetupPage = require("../pageobjects/googleCalc.page");
const ConfigValidation = require("../../model/configValidation");

describe("Hurt-me-plenty task", async () => {
  let link = "https://cloud.google.com/";
  let cost = ConfigValidation.cost;
  let reqVMClass = ConfigValidation.VMClass;
  let reqInstType = ConfigValidation.instType;
  let reqRegion = ConfigValidation.region;
  let reqSSD = ConfigValidation.SSD;
  let reqTerm = ConfigValidation.term;

  before(async () => {
    await GCloudSetupPage.open(link);
    await GCloudSetupPage.navigateToComputeEngine();
    await GCloudSetupPage.switchToCalcFrame();
    await GCloudSetupPage.setParamToCalc();
  });

  it("validate total cost", async () => {
    let price = await GCloudSetupPage.price;
    await expect(price).toHaveTextContaining(cost);
  });

  it("validate VMClass", async () => {
    let VMClass = await GCloudSetupPage.VMClass;
    await expect(VMClass).toHaveTextContaining(reqVMClass);
  });

  it("validate instance type", async () => {
    let instType = await GCloudSetupPage.instType;
    await expect(instType).toHaveTextContaining(reqInstType);
  });

  it("validate region", async () => {
    let region = await GCloudSetupPage.region;
    await expect(region).toHaveTextContaining(reqRegion);
  });

  it("validate SSD setup", async () => {
    let SSD = await GCloudSetupPage.SSD;
    await expect(SSD).toHaveTextContaining(reqSSD);
  });

  it("validate commitment term", async () => {
    let term = await GCloudSetupPage.term;
    await expect(term).toHaveTextContaining(reqTerm);
  });
});
