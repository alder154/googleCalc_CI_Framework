const { getSetup } = require("../resources/hmpConfig.js");
class ConfigValidation {
  constructor([cost, VMClass, instType, region, SSD, term, numberInstances]) {
    this.cost = cost;
    this.VMClass = VMClass;
    this.instType = instType;
    this.region = region;
    this.SSD = SSD;
    this.term = term;
    this.numberInstances = numberInstances;
  }
}

module.exports = new ConfigValidation(getSetup());
