"use strict";
let containerDiv = document.createElement("div");
containerDiv.setAttribute("class", "container");
let guess = Math.floor(Math.random() * 5);
let available = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let colors = generateRandomColors();
let flag = false;
let info = document.createElement("p");
info.setAttribute("id", "guessingColor");
info.innerHTML = colors[guess];
containerDiv.appendChild(info);
let colorDiv = document.createElement("div");
colorDiv.setAttribute("class", "colorContainer");
for (let i = 0; i < 5; i++) {
    let circleDiv = document.createElement("div");
    circleDiv.setAttribute("class", "circle");
    circleDiv.style.backgroundColor = colors[i];
    circleDiv.addEventListener("click", () => {
        check(circleDiv);
    });
    colorDiv.appendChild(circleDiv);
}
containerDiv.appendChild(colorDiv);
info = document.createElement("p");
info.setAttribute("id", "text");
info.innerHTML = "Guess the correct color";
containerDiv.appendChild(info);
document.body.appendChild(containerDiv);
function check(element) {
    let barve = element.style.backgroundColor.substring(4, element.style.backgroundColor.length - 1).split(",");
    let R = parseInt(barve[0], 10).toString(16).toUpperCase().padStart(2, "0");
    let G = parseInt(barve[1], 10).toString(16).toUpperCase().padStart(2, "0");
    let B = parseInt(barve[2], 10).toString(16).toUpperCase().padStart(2, "0");
    let hex = "#" + R + G + B;
    if (hex == colors[guess]) {
        if (!flag) {
            for (let i = 0; i < colorDiv.children.length; i++) {
                let child = colorDiv.children[i];
                if (child !== element) {
                    child.style.backgroundColor = 'transparent';
                }
            }
            info = document.createElement("p");
            info.setAttribute("id", "win");
            info.innerHTML = "You're correct!";
            containerDiv.replaceChild(info, containerDiv.childNodes[2]);
            let a = document.createElement("a");
            a.setAttribute("href", "https://timhaj.github.io/WhatTheStyle/color.html");
            info = document.createElement("button");
            info.setAttribute("id", "btn");
            info.innerHTML = "NEW GAME";
            a.appendChild(info);
            containerDiv.appendChild(a);
            flag = true;
        }
    }
    else {
        if (!flag && element.style.backgroundColor != "transparent") {
            element.style.backgroundColor = "transparent";
            info = document.createElement("p");
            info.setAttribute("id", "incorrect");
            info.innerHTML = "Incorrect, that color was: <span style=\"color:" + hex + "\">" + hex + "</span>";
            containerDiv.replaceChild(info, containerDiv.childNodes[2]);
        }
    }
}
function generateRandomColors() {
    let arr = [];
    let randomColor = "#";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
            randomColor += available[Math.floor(Math.random() * available.length)];
        }
        arr[i] = randomColor;
        randomColor = "#";
    }
    return arr;
}
