const lunchItems = ["pizza", "soup", "chocolate cake"];

lunchItems.push("potatoes");
lunchItems[22] = undefined;
lunchItems[23] = "chips";

// console.log(lunchItems[15]);
lunchItems.forEach((item) => console.log(item));

let myTuple = [1, 2, 3];

// Object.freeze(myTuple);

myTuple.length = 1;
myTuple.length = 3;

console.log(myTuple.length, myTuple);
