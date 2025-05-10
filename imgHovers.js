const images = document.querySelectorAll('img');
let activeElement = null;

images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    console.log('Hovered image ID:', img.id);

    //EYES ----------

    if (img.id === 'bigBrother') {
      highlightAllLetters("bigBrotherQ", "#ffe642", "#53455e");
    }
    else if (img.id === 'appleAd') {
      highlightAllLetters("appleQ", "#c1ddf7", "#67356e");
    }
    else if (img.id === 'internalShame') {
      highlightAllLetters("internalShameQ", "#a4cc8d", "#363b33");
    }
    else if (img.id === 'seduced') {
      highlightAllLetters("seducedQ", "#2e414a", "#d6976f");
    }
    else if (img.id === 'studies') {
      highlightAllLetters("studiesQ", "#d6a698", "#3a389c");
    }
    else if (img.id === 'articles') {
      highlightAllLetters("articlesQ", "#a5d1c8", "#8c663c");
    }
    else if (img.id === 'memories') {
      highlightAllLetters("memoriesQ", "#beccc6", "#1b1a2b");
    }
    else if (img.id === 'wires') {
      highlightAllLetters("wiresQ", "#b84132", "#ede7b4");
    }
    else if (img.id === 'religion') {
      highlightAllLetters("religionQ", "#522659", "#e3d5b3");
    }
    else if (img.id === 'eyesChart') {
      highlightAllLetters("eyesChartQ", "#c5eef0", "1a2f30");
    }
    else if (img.id === 'self-control') {
      highlightAllLetters("self-controlQ", "#2a5459", "#c5dbcd");
    }

    //HANDS ----------
    else if (img.id === 'skinSweat') {
      highlightAllLetters("skinSweatQ", "#c5eef0", "1a2f30");
    }
    else if (img.id === 'homunculusQ') {
      highlightAllLetters("homunculusQ", "#2a5459", "#c5dbcd");
    }
    else if (img.id === 'cyborgSelfQ') {
      highlightAllLetters("cyborgSelfQ", "#b84132", "#ede7b4");
    }
    else if (img.id === 'daisyQ') {
      highlightAllLetters("daisyQ", "#d6a698", "#3a389c");
    }
    else if (img.id === 'arkQ') {
      highlightAllLetters("arkQ", "#2a5459", "#c5dbcd");
    }
    else if (img.id === 'dateQ') {
      highlightAllLetters("dateQ", "#a4cc8d", "#363b33");
    }
    else if (img.id === 'promptsQ') {
      highlightAllLetters("promptsQ", "#c1ddf7", "#67356e");
    }
    else if (img.id === 'commentQ') {
      highlightAllLetters("commentQ", "#2a5459", "#c5dbcd");
    }
    else if (img.id === 'motionPicQ') {
      highlightAllLetters("motionPicQ", "#beccc6", "#1b1a2b");
    }
    else if (img.id === 'workerQ') {
      highlightAllLetters("workerQ", "#d6a698", "#3a389c");
    }
    else if (img.id === 'requiemQ') {
      highlightAllLetters("requiemQ", "#522659", "#e3d5b3");
    }
    else if (img.id === 'copyQ') {
      highlightAllLetters("copyQ", "#c1ddf7", "#67356e");
    }

    //SKIN -----------

    else if (img.id === 'karmaQ') {
      highlightAllLetters("karmaQ", "#2e414a", "#d6976f");
    }
    else if (img.id === 'dataCenterQ') {
      highlightAllLetters("dataCenterQ", "#d6a698", "#3a389c");
    }
    else if (img.id === 'arcadeQ') {
      highlightAllLetters("arcadeQ", "#a5d1c8", "#8c663c");
    }
    else if (img.id === 'lithium') {
      highlightAllLetters("lithium", "#beccc6", "#1b1a2b");
    }
    else if (img.id === 'treeQ') {
      highlightAllLetters("treeQ", "#b84132", "#ede7b4");
    }
    else if (img.id === 'carQ') {
      highlightAllLetters("carQ", "#522659", "#e3d5b3");
    }
    else if (img.id === 'theHeartQ') {
      highlightAllLetters("theHeartQ", "#c5eef0", "1a2f30");
    }
    else if (img.id === 'corruptionQ') {
      highlightAllLetters("corruptionQ", "#2a5459", "#c5dbcd");
    }
    else if (img.id === 'houseQ') {
      highlightAllLetters("houseQ", "#2a5459", "#c5dbcd");
    }



  });

  img.addEventListener('mouseleave', () => {
    console.log('mouse left', img.id);
    resetAllHighlights();
  });
});


function highlightAllLetters(className, highlightColor, bgColor) {
  const elements = document.querySelectorAll(`.${className}`);

  elements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';

    for (let char of text) {
      const span = document.createElement('span');
      span.textContent = char;
      element.appendChild(span);
    }

    const spans = element.querySelectorAll('span');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.color = highlightColor;
        span.style.backgroundColor = bgColor;
      }, index * 20);
    });
  });
}

function resetAllHighlights() {
  const spans = document.querySelectorAll('span');

  spans.forEach(element => {
    const originalText = element.textContent;
    element.innerHTML = '';
    element.textContent = originalText;
  });
}