/*    Javascript 6th Edition
      Chapter 12
      Hands-on 12-1
      Author: Jonathon Brogden
      Date:   16 March 2016
      Filename: script.js
*/

function display(event) {
  $(event.currentTarget).next().fadeIn("slow");
}

$("h3").click(display);
