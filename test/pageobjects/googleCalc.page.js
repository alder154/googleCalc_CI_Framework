const GCloudPage = require("./gCloud.page");
const ConfigValidation = require("../../model/configValidation");
const LocatorsForConfig = require("../../model/locatorsForConfig");

class GCloudSetupPage extends GCloudPage {
  async open(link) {
    return super.open(link);
  }

  get goSearch() {
    return $(".devsite-search-container");
  }
  get searchLine() {
    return $(".devsite-search-field");
  }
  get clickSearchRes() {
    return $('//b[text()="Google Cloud Pricing Calculator"]'); //
  }

  get googleCookieAgreement() {
    return $(".devsite-snackbar-action");
  }
  async navigateToComputeEngine() {
    await this.goSearch.click();
    const enterKey = await "\uE007";
    await this.searchLine.setValue(
      "Google Cloud Platform Pricing Calculator" + enterKey
    );
    await this.clickSearchRes.click();
    if (await this.googleCookieAgreement.isExisting()) {
      await this.googleCookieAgreement.click();
    }
  }

  get frameGlobal() {
    return $('//*[@id="cloud-site"]/devsite-iframe/iframe');
  }
  get calcFrame() {
    return $("#myFrame");
  }
  async switchToCalcFrame() {
    const elementGlobal = await this.frameGlobal;
    await browser.switchToFrame(elementGlobal);
    const calcElement = await this.calcFrame;
    await browser.switchToFrame(calcElement);
  }

  get computeEngine() {
    return $(
      '//*[@ng-class = "{estimated: listingCtrl.CartData[tab.estimatedLabel]}"]'
    );
  }
  get numberInstances() {
    return $(LocatorsForConfig.numberInstances)
  }
  get setOSDropDown() {
    return $("#select_value_label_73");
  }
  get setFreeOS() {
    return $(LocatorsForConfig.setFreeOS);
  }
  get machineClassDropDown() {
    return $("#select_value_label_74");
  }
  get machineClassRegular() {
    return $(LocatorsForConfig.machineClassRegular);
  }
  get instSeriesDropDown() {
    return $("#select_value_label_76");
  }
  get instSeriesN1() {
    return $(LocatorsForConfig.instSeriesN1);
  }
  get mashTypeDropDown() {
    return $("#select_value_label_77");
  }
  get mashTypeN130Gb() {
    return $(LocatorsForConfig.mashTypeN130Gb);
  }
  get addGPU() {
    return $(LocatorsForConfig.addGPU);
  }
  get GPUDropDown() {
    return $("#select_460");
  }
  get TeslaP100() {
    return $(LocatorsForConfig.TeslaP100);
  }
  get GPUNumberDropDown() {
    return $("#select_462");
  }
  get addOneGpu() {
    return $(LocatorsForConfig.addOneGpu);
  }
  get SSDDropDown() {
    return $("#select_422");
  }
  get SSD2x375() {
    return $(LocatorsForConfig.SSD2x375);
  }
  get locationDropDown() {
    return $("#select_114");
  }
  get locationFrankfurt() {
    return $(LocatorsForConfig.locationFrankfurt);
  }
  get usageDropDown() {
    return $("#select_121");
  }
  get usage1Year() {
    return $(LocatorsForConfig.usage1Year);
  }
  get estimateButton() {
    return $(
      '//*[@ng-click = "listingCtrl.addComputeServer(ComputeEngineForm);"]'
    );
  }
  async setParamToCalc() {
    await this.computeEngine.click();
    await this.numberInstances.setValue(ConfigValidation.numberInstances);

    await this.setOSDropDown.click();
    await this.setFreeOS.click();

    await this.machineClassDropDown.click();
    await this.machineClassRegular.click();

    await this.instSeriesDropDown.click();
    await this.instSeriesN1.click();

    await this.mashTypeDropDown.click();
    await this.mashTypeN130Gb.click();

    await this.addGPU.click();

    await this.GPUDropDown.click();
    await this.TeslaP100.click();

    await this.GPUNumberDropDown.click();
    await this.addOneGpu.click();

    await this.SSDDropDown.click();
    await this.SSD2x375.click();

    await this.locationDropDown.click();
    await this.locationFrankfurt.click();

    await this.usageDropDown.click();
    await this.usage1Year.click();

    await this.estimateButton.click();
  }

  get price() {
    return $("//b");
  }
  get VMClass() {
    return $('//md-list-item[contains(@ng-if, "item.items.editHook")]');
  }

  get instType() {
    return $('//div[contains(@ng-class, "item.items.isInstanceCommitted")]');
  }
  get region() {
    return $(
      '//md-list/md-list-item/div[@class = "md-list-item-text ng-binding"]'
    );
  }
  get SSD() {
    return $('//md-list-item[contains(@ng-if, "item.items.ssd")]');
  }
  get term() {
    return $('//md-list-item[contains(@ng-if, "item.items.termText")]');
  }
}

module.exports = new GCloudSetupPage();
