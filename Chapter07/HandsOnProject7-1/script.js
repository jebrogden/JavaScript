// Global Variables
var valueElement = document.getElementById('value');
var resultElement = document.getElementById('sqRoot');

function convert() {
  var root = Math.sqrt(valueElement.value);
  resultElement.innerHTML = root.toFixed(2);
}

// add event listeners to Calculate square root button and clear form
function createEventListener() {
  var submitButton = document.getElementById('convertButton');
  if (submitButton.addEventListener) {
    submitButton.addEventListener('click', convert, false);
  } else if (submitButton.attachEvent) {
    submitButton.attachEvent('onclick', convert);
  }

  document.getElementById('value').value = '';

  //clear last starting value
  document.getElementById('sqRoot').innerHTML = '';

  // clear previous results
}

if (window.addEventListener) {
  window.addEventListener('load', createEventListener, false);
} else if (window.attachEvent) {
  window.attachEvent('onload', createEventListener);
}
