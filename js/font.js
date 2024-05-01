"use strict";
let container = document.createElement("div");
container.setAttribute("class", "container");
let fontToGuess = Math.floor(Math.random() * 5);
let fonts = [
    "Arial",
    "Verdana",
    "Georgia",
    "Times New Roman",
    "Courier New",
    "Tahoma",
    "Helvetica",
    "Courier",
    "Arial Black",
    "Comic Sans MS",
    "Trebuched MS",
    "Garamond",
    "Courier New",
    "Brush Script MT",
    "Luminari",
    "Bradley Hand",
    "Monaco",
    "Lucida",
    "Baskerville",
    "Palatino",
    "Gill Sans",
    "Impact",
    "Calibri",
    "Cambria",
    "Candara",
    "Century Gothic",
    "Consolas",
];
let guessingFonts = generateRandomFonts();
let gameWin = false;
let element = document.createElement("p");
element.setAttribute("id", "guessingFont");
element.innerHTML = guessingFonts[fontToGuess];
container.appendChild(element);
let fontDiv = document.createElement("div");
fontDiv.setAttribute("class", "fontContainer");
for (let i = 0; i < 5; i++) {
    let text = document.createElement("p");
    text.setAttribute("class", "font");
    text.innerHTML = "Sample";
    text.style.fontFamily = guessingFonts[i];
    text.addEventListener("click", () => {
        handle(text);
    });
    fontDiv.appendChild(text);
}
container.appendChild(fontDiv);
element = document.createElement("p");
element.setAttribute("id", "text");
element.innerHTML = "Guess the correct font";
container.appendChild(element);
document.body.appendChild(container);
function handle(selected) {
    let selectedFont = selected.style.fontFamily;
    if (selectedFont == guessingFonts[fontToGuess]) {
        if (!gameWin) {
            for (let i = 0; i < fontDiv.children.length; i++) {
                let child = fontDiv.children[i];
                if (child !== selected) {
                    child.style.color = "white";
                }
            }
            element = document.createElement("p");
            element.setAttribute("id", "win");
            element.innerHTML = "You're correct!";
            container.replaceChild(element, container.childNodes[2]);
            let a = document.createElement("a");
            a.setAttribute("href", "/font.html");
            element = document.createElement("button");
            element.setAttribute("id", "btn");
            element.innerHTML = "NEW GAME";
            a.appendChild(element);
            container.appendChild(a);
            gameWin = true;
        }
    }
    else {
        if (!gameWin && selected.style.color != "white") {
            selected.style.color = "white";
            element = document.createElement("p");
            element.setAttribute("id", "incorrect");
            element.innerHTML = "Incorrect, that font was: <span style=\"font-family:" + selectedFont + "\">" + selectedFont + "</span>";
            container.replaceChild(element, container.childNodes[2]);
        }
    }
}
function generateRandomFonts() {
    let arr = [];
    for (let i = 0; arr.length < 5;) {
        let selected = fonts[Math.floor(Math.random() * fonts.length)];
        if (arr.indexOf(selected) >= 0) {
            continue;
        }
        else {
            arr[i] = selected;
            i++;
        }
    }
    return arr;
}
