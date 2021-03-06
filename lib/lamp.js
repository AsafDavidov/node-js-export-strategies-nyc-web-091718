// // lamp.js
//
const Lamp = function Lamp(maxBrightness) {
  this.currentBrightness = 0;
  this.maxBrightness = maxBrightness;
};

Lamp.prototype.brighten = function(amount) {
  amount = amount || 1;

  this.currentBrightness += amount;

  if (this.currentBrightness > this.maxBrightness) {
    this.currentBrightness = this.maxBrightness;
  }
};

Lamp.prototype.dim = function(amount) {
  amount = amount || 1;

  this.currentBrightness -= amount;

  if (this.currentBrightness < 0) {
    this.currentBrightness = 0;
  }
};

Lamp.prototype.turnOff = function() {
  this.currentBrightness = 0;
};

Lamp.prototype.turnOn = function() {
  this.currentBrightness = this.maxBrightness;
};
//++++++++++++++++++++++++++++++++++
//CLASS NOTATION
//++++++++++++++++++++++++++++++++++++
// class Lamp {
//   constructor(maxBrightness) {
//       this.currentBrightness = 0;
//       this.maxBrightness = maxBrightness
//   }
//   brighten(amount) {
//     amount = amount || 1;
//
//     this.currentBrightness += amount;
//
//     if (this.currentBrightness > this.maxBrightness) {
//       this.currentBrightness = this.maxBrightness;
//     }
//   };
//
//   dim(amount) {
//     amount = amount || 1;
//
//     this.currentBrightness -= amount;
//
//     if (this.currentBrightness < 0) {
//       this.currentBrightness = 0;
//     }
//   };
//   turnOff() {
//     this.currentBrightness = 0;
//   };
//
//   turnOn() {
//     this.currentBrightness = this.maxBrightness;
//   };
// }
module.exports = Lamp;
