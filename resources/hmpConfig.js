function getSetup() {
  let cost = "4,026.13";
  let VMClass = "regular";
  let instType = "n1-standard-8";
  let region = "Frankfurt";
  let SSD = "2x375";
  let term = "1 Year";
  let numberInstances = 4;
  return [cost, VMClass, instType, region, SSD, term, numberInstances];
}

module.exports = { getSetup };
