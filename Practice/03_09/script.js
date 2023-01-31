/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newName: function(rename){
    this.name = rename;
  },
  newVolume:function (expand){
    this.volume = expand;
  },
  newColor:function(darken){
    this.color = darken;
  },
  newPoketNum: function(addPocket){
    this.pocketNum = addPocket;
  }
};
console.log ("name before:",backpack.name);
backpack.newName("purse");
console.log ("name after:",backpack.name);
console.log ("volume before:", backpack.volume);
backpack.newVolume(45);
console.log ("Volume after:", backpack.volume);
console.log("color before:", backpack.color);
backpack.newColor ("black");
console.log ("color after:", backpack.color);
console.log ("number of pockets before:", backpack.pocketNum);
backpack.newPoketNum (20)
console.log ("number of pockets after:", backpack.pocketNum);
