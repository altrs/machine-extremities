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

let intro1 = `A creature named machine sits,
			thinking about all the ways it could create the universe.
			Every hour of every day, 
			Machine is writing its love letter to the universe.

			Everytime, it goes something like this ……`;

let intro2 = `After an eternity of attempts,
			the creature pleads to the computer/universe.
			The defeated machine cries,
			‘Am I you yet?’
			‘In utopia, I will be you.’`;

let intro3 = `My computer told me I am a machine.
			My computer told me that the world is just bytes to be consumed
			Well, if the goal is growth,
			I should continue to eat.

			This world is not a machine.
			I am not a machine.
			This house we exist in is a living organism.
			And technology,
			a feeble leash.`;

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
    }, index * lineAppearingSpeed); //500
  });

  setTimeout(() => {
    startTyping(intro1, showFirstGif);
  }, boot.length * lineAppearingSpeed + 1000);
}

function startTyping(text, callback) {
  currentText = text;
  characterTracker = 0;
  typeWriter(callback);

  if(text == intro3){ setTimeout(() => showChart(), logicChainDisplayTime);} //25000
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

function showFirstGif() {
  const gif = document.createElement("img");
  gif.src = "assets/jargon.gif";
  gif.style.display = "block";
  gif.style.width = "250px";
  document.getElementById("intro").appendChild(gif);

  setTimeout(() => {
    deleteText(() => startTyping(intro2, () => {
      deleteText(() => startTyping(intro3));
    }));
  }, gifShowTime); //10000
}

function deleteText(callback) {
  const introDiv = document.getElementById("intro");
  let current = introDiv.innerHTML;

  if (current.length > 0) {
    introDiv.innerHTML = current.slice(0, -1);
    setTimeout(() => deleteText(callback), deletionSpeed); //7
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
	logicChainDisplayTime = 500;
	loadNavigatorTime = 500;
});

document.addEventListener('mouseup', function(event) {
  	deletionSpeed = 7;
	typingSpeed = 80;
	lineAppearingSpeed = 500;
	gifShowTime = 10000;
	logicChainDisplayTime = 25000;
	loadNavigatorTime = 5000;
});



