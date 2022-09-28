const { getReady } = require("./getReady");
const { leaveForWork } = require("./leaveForWork");
const { wakeUp } = require("./wakeUp");

const goingToWork = (extraTime, forgotAccessCard) => {
  wakeUp(extraTime);
  getReady();
  leaveForWork(forgotAccessCard);
};

goingToWork(true, true);
console.log("\n");
goingToWork(true, false);
console.log("\n");

goingToWork(false, true);
console.log("\n");

goingToWork(false, false);
