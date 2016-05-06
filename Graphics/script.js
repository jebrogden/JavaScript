// layer 1
var l1 = document.getElementById('layer1');
// Grass
var g = l1.getContext('2d');
g.fillStyle = '#66CD00';
g.fillRect(0, 150, 600, 150);

// layer 2
var l2 = document.getElementById('layer2');
// sky
var s = l2.getContext('2d');
var grd = s.createLinearGradient(-100, 0, 600, 150);
grd.addColorStop(0, '#7EC0EE');
grd.addColorStop(1, '#F2F8FD');
s.fillStyle = grd;
s.fillRect(0, 0, 600, 150);

// layer 3
var l3 = document.getElementById('layer3');
// house frame
var h = l3.getContext('2d');
h.fillStyle = '#FF0000';
h.fillRect(170, 100, 250, 150);

// layer 4
var l4 = document.getElementById('layer4');
// roof
var rf = l4.getContext('2d');
rf.beginPath();
rf.moveTo(150, 100);
rf.lineTo(300, 25);
rf.lineTo(440, 100);
rf.closePath();
rf.fillStyle = '#FFCC00';
rf.fill();

// layer 5
var l5 = document.getElementById('layer5');
// door
var dr = l4.getContext('2d');
dr.fillStyle = '#654321';
dr.fillRect(270, 175, 50, 75);
