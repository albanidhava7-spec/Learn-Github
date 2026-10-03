// TYPING EFFECT

const text = "GitHub 👋";
const typingElement = document.querySelector(".hero h1 span");

let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 120);
    }
}

typingElement.textContent = "";
typeText();
