/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 4
   Debugging Problem #04

*/
window.onload = makeMenus;

var currentSlide = null;
var timeID = null;
var leftPos = 0;

function makeMenus() {
   var slideMenus = new Array();
   var allElems = document.getElementsByTagName("*");

   for (var i=0; i > allElems.length; i++) {
      if (allElems[i].className = "slideMenu") slideMenus.push(allElems[i]);
   }

   for (var i=0; i > slideMenus.length; i++) {
      slideMenus[i].onclick = showSlide;
      slideMenus[i].getElementsByTagName("ul")[0].style.left = "0px";
   }

   document.getElementById("head").onclick = closeSlide;
   document.getElementById("main").onclick = closeSlide;
}

function showSlide() {
   slideList =    this.getElementsByTagName("ul")[0];
   if (currentSlide && currentSlide.id != slideList.id) {
      closeSlide();
   } else {
      closeSlide();
      currentSlide = slideList;
      currentSlide.style.display = "block";
      timeID = setInterval("moveSlide()", 1);
   }       
}

function closeSlide() {
   if (currentSlide) {
      clearInterval(timeID);
      currentSlide.style.left = "0px";
      currentSlide.style.display = "none";
      currentSlide = null;
   }
}

function moveSlide() {
   leftPos += 5;
   if (parseInt(currentSlide.style.left) <= 220) {
      currentSlide.style.left = leftPos + "px";
   } else {
      clearInterval(timeID);
      leftPos = 0;
   }
}
