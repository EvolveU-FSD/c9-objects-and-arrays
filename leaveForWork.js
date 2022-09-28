const leaveForWork = (forgotAccessCard) => {
  console.log("walk to work");
  console.log("did I forget my access card?");
  if (forgotAccessCard) {
    console.log("message someone to let me in");
  }
  console.log("arrive at work");
};

module.exports = { leaveForWork };
