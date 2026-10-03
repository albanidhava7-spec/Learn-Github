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

// THEME TOGGLE

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});

// LOAD SAVED THEME

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeButton.textContent = "🌙";
}
