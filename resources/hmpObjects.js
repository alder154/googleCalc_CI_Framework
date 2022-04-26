function getObj() {
  let numberInstances = "#input_81";
  let setFreeOS = "#select_option_83";
  let machineClassRegular = "#select_option_96";
  let instSeriesN1 = "#select_option_221";
  let mashTypeN130Gb = "#select_option_427";
  let addGPU = '//*[@ng-model="listingCtrl.computeServer.addGPUs"]';
  let TeslaP100 = "#select_option_465";
  let addOneGpu = "#select_option_471";
  let SSD2x375 = "#select_option_448";
  let locationFrankfurt = "#select_option_242";
  let usage1Year = "#select_option_119";
  return [
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
  ];
}

module.exports = { getObj };
