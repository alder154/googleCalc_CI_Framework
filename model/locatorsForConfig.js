const { getObj } = require("../resources/hmpObjects.js");
class LocatorsForConfig {
  constructor ([
    numberInstances,
    setFreeOS,
    machineClassRegular,
    instSeriesN1,
    mashTypeN130Gb,
    addGPU,
    TeslaP100,
    addOneGpu,
    SSD2x375,
    locationFrankfurt,
    usage1Year,
  ]) {
    this.numberInstances = numberInstances;
    this.setFreeOS = setFreeOS;
    this.machineClassRegular = machineClassRegular;
    this.instSeriesN1 = instSeriesN1;
    this.mashTypeN130Gb = mashTypeN130Gb;
    this.addGPU = addGPU;
    this.TeslaP100 = TeslaP100;
    this.addOneGpu = addOneGpu;
    this.SSD2x375 = SSD2x375;
    this.locationFrankfurt = locationFrankfurt;
    this.usage1Year = usage1Year;
  }
}

module.exports = new LocatorsForConfig(getObj());
