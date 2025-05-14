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



let timeout;

  function resetInactivityTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      window.location.href = 'index.html'; // change this if your index path is different
    }, 120000); // 60,000 milliseconds = 1 minute
  }

  // Reset the timer on any mouse movement
  window.addEventListener('mousemove', resetInactivityTimer);
  resetInactivityTimer();



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

  setTimeout(() => {
    startTyping(intro1, showChart);
  }, boot.length * lineAppearingSpeed + 1000);
}


function startTyping(text, callback) {
  currentText = text;
  characterTracker = 0;
  typeWriter(callback);
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

document.getElementById("handsNavigator").addEventListener('mouseenter', () => {document.getElementById("handC").style.display = "block";});
document.getElementById("handsNavigator").addEventListener('mouseleave', () => {document.getElementById("handC").style.display = "none";});

document.getElementById("skinNavigator").addEventListener('mouseenter', () => {document.getElementById("skinC").style.display = "block";});
document.getElementById("skinNavigator").addEventListener('mouseleave', () => {document.getElementById("skinC").style.display = "none";});

 const hoverArea = document.getElementById('heartNavigator');
  const text = "CHARTS OF HUMILITY ";
  const radius = 60;
  let circleContainer;
  let animationFrameId;
  let angleOffset = 0;
  let mouseX = 0;
  let mouseY = 0;

  function animate() {
    if (!circleContainer) return;

    const chars = circleContainer.querySelectorAll('span');
    const numChars = chars.length;

    for (let i = 0; i < numChars; i++) {
      const angle = ((i / numChars) * 2 * Math.PI) + angleOffset;

      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const deg = angle * (180 / Math.PI) + 90;

      const char = chars[i];
      char.style.fontFamily = 'lores-21-serif';
      char.style.left = `${x}px`;
      char.style.top = `${y}px`;
      char.style.transform = `rotate(${deg}deg)`;
    }

    angleOffset += 0.02;
    circleContainer.style.left = `${mouseX}px`;
    circleContainer.style.top = `${mouseY}px`;

    animationFrameId = requestAnimationFrame(animate);
  }

  hoverArea.addEventListener('mouseenter', () => {
    circleContainer = document.createElement('div');
    circleContainer.classList.add('circle-text');

    for (let i = 0; i < text.length; i++) {
      const char = document.createElement('span');
      char.innerText = text[i];
      circleContainer.appendChild(char);
    }

    document.body.appendChild(circleContainer);
    animate();
  });

  hoverArea.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  hoverArea.addEventListener('mouseleave', () => {
    if (circleContainer) {
      circleContainer.remove();
      circleContainer = null;
    }
    cancelAnimationFrame(animationFrameId);
    angleOffset = 0;
  });

