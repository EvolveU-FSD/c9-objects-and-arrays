const getRandomLunch = (lunchItems) => {
  const length = lunchItems.length;

  const randomIndex = Math.floor(Math.random() * length);
  return lunchItems[randomIndex];
};
const getLunchPrepInstructions = (lunch) => {
  if (lunch.heatingTime > 0) {
    return `Put in the microwave for ${lunch.heatingTime} seconds`;
  } else {
    return `Put on plate and enjoy`;
  }
};
const getReady = () => {
  console.log("get dressed");
  console.log("gather things");

  const lunchChoices = [
    { id: "pizza", label: "Leftover Dominos", heatingTime: 35 },
    {
      id: "soup",
      label: "Homemade Soup",
      heatingTime: 90,
    },
    {
      id: "chocolate cake",
      label: "Store bought chocolate cake",
      heatingTime: 0,
    },
    { id: "lasagna", label: "Vegetarian lasagna", heatingTime: 70 },
  ];

  const randomLunch = getRandomLunch(lunchChoices);
  console.log(
    `Pack ${
      randomLunch.label
    } for lunch, to prepare: ${getLunchPrepInstructions(randomLunch)}`
  );
};
exports.getReady = getReady;
