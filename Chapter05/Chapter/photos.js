/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: Jonathon Brogden
 *    Date:   February 24 2016

 *    Filename: photos.js
 */

'use strict'; /* interpret document contents in JavaScript strict mode */

/* global variables */
var photoOrder = [1, 2, 3, 4, 5];

/* add src values to img elements based on order specified in photoOrder arraw */
function populateFigures() {
  var filename;
  var currentFig;
  for (var i = 1; i < 4; i++) {
    filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
    currentFig = document.getElementsByTagName("img")[i - 1];
    currentFig.src = filename;
  }
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
  for (var i = 0; i < 5; i++) {
    if ((photoOrder[i] + 1) === 6) {
      photoOrder[i] = 1;
      } else {
        photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
  for (var i = 0; i < 5; i++) {
    if ((photoOrder[i] - 1) === 0) {
      photoOrder[i] = 5;
    } else {
      photoOrder[i] -= 1;
    }
    populateFigures();
  }
}

/* switch to 5-image layout */
function previewFive() {
  // create figure and img elements for fifth image
  var articleEl = document.getElementsByTagName("article")[0];
  var lastFigure = document.createElement("figure");
  lastFigure.id = "fig5";
  lastFigure.style.zIndex = "5";
  lastFigure.style.position = "absolute";
  lastFigure.style.right = "45px";
  lastFigure.style.top = "67px";
  var lastImage = document.createElement("img");
  lastImage.width = "240";
  lastImage.height = "135";
  lastFigure.appendChild(lastImage);
  //clone figure element for fifth image and edit to be the first image
  var firstFigure = lastFigure.cloneNode(true);
  firstFigure.id = "fig1";
  firstFigure.style.right = "";
  firstFigure.left = "45px";
}

/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {
  var leftarrow = document.getElementById("leftarrow");
  if (leftarrow.addEventListener) {
    leftarrow.addEventListener("click", leftArrow, false);
  } else if (leftarrow.attachEvent) {
    leftarrow.attachEvent("onclick", leftArrow);
  }
  var rightarrow = document.getElementById("rightarrow");
  if (rightarrow.addEventListener) {
    rightarrow.addEventListener("click", rightArrow, false);
  } else if (rightarrow.attachEvent)  {
    rightarrow.attachEvent("onclick", rightarrow);
  }
  var mainFig = document.getElementsByTagName("img") [1];
  if (mainFig.addEventListener) {
    mainFig.addEventListener("click", zoomFig, false);
  } else if (mainFig.attachEvent) {
    mainFig.attachEvent("onclick", zoomFig);
  }
  var showAllButton = document.querySelector("#fiveButton p");
  if (showAllButton.addEventListener) {
    showAllButton.addEventListener("click", previewFive, false);
  } else if (showAllButton.attachEvent) {
    showAllButton.attachEvent("onclick", previewFive);
  }
}

/* open center figure in separate window */
function zoomFig() {

}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}
