const images = document.querySelectorAll('img');
let activeElement = null;

images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    console.log('Hovered image ID:', img.id);

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
    // else if (img.id === 'memories') {
    //   highlightAllLetters("appleQ", "#c1ddf7", "#67356e");
    // }
    // else if (img.id === 'wires') {
    //   highlightAllLetters("appleQ", "#c1ddf7", "#67356e");
    // }
    // else if (img.id === 'religion') {
    //   highlightAllLetters("appleQ", "#c1ddf7", "#67356e");
    // }
    // else if (img.id === 'eyesChart') {
    //   highlightAllLetters("appleQ", "#c1ddf7", "#67356e");
    // }



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