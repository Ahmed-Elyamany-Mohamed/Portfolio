
function toggleDarkMode() {
    const body = document.body;
    const currentMode = localStorage.getItem('theme');
  

    if (currentMode === 'dark') {
        body.classList.remove('dark-mode');
        // logo.src = '../images/icons/dark-logo.svg';
        // light.classList.remove('light');

        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        // dark.classList.add('dark');
        // logo.src = '../images/icons/light-logo.svg';
        // logo.src = '../images/icons/1-removebg-preview.png';
        // images\icons\1-removebg-preview.png
        localStorage.setItem('theme', 'dark');
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    let light=document.querySelector('.light');
    let dark=document.querySelector('.dark');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        light.classList.remove('light');

    }
    else{
        
        // dark.classList.add('dark');



    }
});
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// --------------------------------------------------------
const words = [" Developer.", " Designer.", " Creator."];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const textElement = document.querySelector(".animated-text");

function typeEffect() {
    const currentWord = words[currentWordIndex];

    // Typing or deleting logic
    if (isDeleting) {
        currentCharIndex--;
    } else {
        currentCharIndex++;
    }

    // Update the text element
    textElement.textContent = currentWord.substring(0, currentCharIndex);

    // Check if the word is fully typed or deleted
    if (!isDeleting && currentCharIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
        return;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length; // Move to the next word
    }

    // Adjust typing speed
    const typingSpeed = isDeleting ? 100 : 150;
    setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect
typeEffect();


  AOS.init();

