// button text moving from left to right
// highlightable links in writing
// loading at the bottom that is of a head moving away from it's body
// 'type: what's this about?' or 'i want to grow' --> and then it turns into a button
// E gets long on hover of title?
// metaballs: https://editor.p5js.org/amandarito/sketches/_tT1S4LGN

let characterTracker = 0;
let currentText = "";
let deletionSpeed = 7;
let typingSpeed = 80;
let lineAppearingSpeed = 500;
let gifShowTime = 10000;
let logicChainDisplayTime = 25000;
let loadNavigatorTime = 5000;
let boot = [
  "(C) Copyright Corporation 039951",
  "ROM Version 1.20, 64 Megabytes RAM, 2 CPUs",
  "Memory Check: 3Port passed, main skipped.",
  " ",
  "Auto-booting ...",
  "Booting sd(0,1,0) boot",
  " ",
  " "
];

let intro1 = `I did think,
              let's go about this slowly.
              This is important. This should take
              some really deep thought.
              We should take small thoughtful steps.

              
              But, bless us, we didn't.


              [Mary Oliver]`;

function lineAppearing() {
  boot.forEach((line, index) => {
    setTimeout(() => {
      const introBootDiv = document.getElementById("intro-boot");
      const introDiv = document.getElementById("intro");
      introBootDiv.style.fontFamily = 'lores-21-serif';
      introBootDiv.style.fontSize = "17px";
      introDiv.style.fontFamily = 'lores-21-serif'; 
      introDiv.style.fontSize = "17px";
      introBootDiv.innerHTML += line + "<br>";
    }, index * lineAppearingSpeed);
  });

  // After boot lines are displayed, type intro1 then show chart
  setTimeout(() => {
    startTyping(intro1, showChart);
  }, boot.length * lineAppearingSpeed + 1000);
}


function startTyping(text, callback) {
  currentText = text;
  characterTracker = 0;
  typeWriter(callback);

  // Removed intro2 logic
}

function typeWriter(callback) {
  if (characterTracker < currentText.length) {
    let char = currentText.charAt(characterTracker);
    if (char === "\n") {
      document.getElementById("intro").innerHTML += "<br>";
    } else {
      document.getElementById("intro").innerHTML += char;
    }
    characterTracker++;
    setTimeout(() => typeWriter(callback), typingSpeed); //80
  } else {
    if (callback) callback();
  }
}

function deleteText(callback) {
  const introDiv = document.getElementById("intro");
  let current = introDiv.innerHTML;

  if (current.length > 0) {
    introDiv.innerHTML = current.slice(0, -1);
    setTimeout(() => deleteText(callback), deletionSpeed);
  } else {
    if (callback) callback();
  }
}

function showChart(){
	console.log("Showing chart");
	let logicChart = document.querySelector(".title-chart");
	logicChart.style.border = "1px solid black";
	logicChart.style.height = "80%";
	logicChart.style.marginRight = "0px";
	logicChart.style.padding = "15px";
}

function loadNavigator(){
	document.querySelector(".navigator").style.display = "flex";
	document.getElementById("loading").style.display = "none";
}

function backToHomePage(){
	console.log("back button");
	document.querySelector(".navigator").style.display = "none";
}

function hideNavigator(){
  document.querySelector(".navigator").style.display = "none";
  document.getElementById("loading").style.display = "none";
}

function showLoading(){
	console.log("CLICKED!");
	document.getElementById('loading').style.display = "block";
	setTimeout(() => loadNavigator(), 5000);
}

setTimeout(lineAppearing, 1000);


document.addEventListener('mousedown', function(event) {
  deletionSpeed = 2;
	typingSpeed = 3;
	lineAppearingSpeed = 50;
	gifShowTime = 100;
	logicChainDisplayTime = 2500;
	loadNavigatorTime = 500;
});

document.addEventListener('mouseup', function(event) {
  deletionSpeed = 7;
	typingSpeed = 80;
	lineAppearingSpeed = 500;
	gifShowTime = 10000;
	logicChainDisplayTime = 100;
	loadNavigatorTime = 5000;
});


// ------------------- 

document.getElementById("eyesNavigator").addEventListener('mouseenter', () => {document.getElementById("eyeC").style.display = "block";});
document.getElementById("eyesNavigator").addEventListener('mouseleave', () => {document.getElementById("eyeC").style.display = "none";});



