
function toggleDarkMode() {
    const body = document.body;
    const logo = document.getElementById('theme-logo');

    const currentMode = localStorage.getItem('theme');
  

    if (currentMode === 'dark') {
        body.classList.remove('dark-mode');
        logo.src = '../images/logos/light-logo.png';


        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        logo.src = '../images/logos/dark-logo.png';

        
        localStorage.setItem('theme', 'dark');
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('theme-logo');
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        logo.src = '../images/logos/dark-logo.png';
    }
    else{
        logo.src = '../images/logos/light-logo.png';

    }
});
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

// !--------------------------------------------------------

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

