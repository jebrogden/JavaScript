/*    JavaScript 6th Edition
 *    Chapter 6
 *    Chapter Case

 *    Snoot Flowers
 *    Functions
 *    Author: Jonathon Brogden
 *    Date:   04 April 2016

 *    Filename: snoot.js
 */

"use scrict"; // interpret document contents in JavaScript Strict modernizr

/* remove default values and formatting from state and delivery date selection lists */
function removeSelectDefaults() {
  var emptyBoxes = document.getElementsByTagName("select");
  for (var i = 0; i < emptyBoxes.length; i++) {
    emptyBoxes[i].selectedIndex = -1;
  }
}

/* run setup function when page finishes loading */
if (window.addEventlistener) {
  window.addEventlistener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", removeSelectDefaults);
}
