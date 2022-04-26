const GCloudPage = require("./gCloud.page");
const GCloudSetupPage = require("./googleCalc.page");

class YopmailPage extends GCloudPage {
  get acceptCookies() {
    return $("#accept");
  }
  get chooseMail() {
    return $("#login");
  }
  get emailEstimate() {
    return $("#email_quote");
  }
  get myEmail() {
    return $("#input_537");
  }
  get sendEmailButton() {
    return $(
      '//*[@ng-click="emailQuote.emailQuote(true); emailQuote.$mdDialog.hide()"]'
    );
  }
  get mailPriceFarme() {
    return $("/html/body/md-content");
  }
  get priceFromGoogle() {
    return $("//b");
  }

  get mailPrice() {
    return $("//td/h2");
  }
  get mailResultFrame() {
    return $("#ifmail");
  }

  async getPriceFromYopmail(mailLink, mailLogin) {
    const tabGoogle = await browser.getWindowHandle();
    await browser.newWindow(mailLink);

    if (await this.acceptCookies.isExisting()) {
      await this.acceptCookies.click();
    }
    const tabYopmail = await browser.getWindowHandle();

    const enterKey = "\uE007";
    await this.chooseMail.setValue(mailLogin + enterKey);
    await browser.switchToWindow(tabGoogle);
    await GCloudSetupPage.switchToCalcFrame();
    await this.emailEstimate.click();
    await this.myEmail.setValue(mailLogin + "@yopmail.com");

    await this.sendEmailButton.click();
    await browser.switchToWindow(tabYopmail);
    await browser.pause(3000);
    browser.refresh();
    await this.mailResultFrame.waitForExist({ timeout: 3000 });

    let resultMail = await this.mailResultFrame;
    await browser.switchToFrame(resultMail);
    let priceFromMail = await await this.mailPrice.getText();
    await browser.switchToWindow(tabGoogle);
    await GCloudSetupPage.switchToCalcFrame();
    return priceFromMail;
  }
}
module.exports = new YopmailPage();
