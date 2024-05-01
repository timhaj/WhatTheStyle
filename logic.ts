let containerDiv: any = document.createElement("div");
containerDiv.setAttribute("class", "container");
let guess: number = Math.floor(Math.random() * 5);
let available: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let colors: string[] = generateRandomColors();

let info: any = document.createElement("p");
info.setAttribute("id", "guessingColor");
info.innerHTML = colors[guess];
containerDiv.appendChild(info);

let colorDiv: any = document.createElement("div");
colorDiv.setAttribute("class", "colorContainer");

for (let i = 0; i < 5; i++) {
    let circleDiv: any = document.createElement("div");
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

function check(element: any): void {
    let barve: string[] = element.style.backgroundColor.substring(4, element.style.backgroundColor.length - 1).split(",");
    let R: string = parseInt(barve[0], 10).toString(16).toUpperCase().padStart(2, "0");
    let G: string = parseInt(barve[1], 10).toString(16).toUpperCase().padStart(2, "0");
    let B: string = parseInt(barve[2], 10).toString(16).toUpperCase().padStart(2, "0");
    let hex: string = "#" + R + G + B;
    if (hex == colors[guess]) {
        info = document.createElement("p");
        info.setAttribute("id", "win");
        info.innerHTML = "You're correct!";
        containerDiv.replaceChild(info, containerDiv.childNodes[2]);
    }
    else {
        info = document.createElement("p");
        info.setAttribute("id", "incorrect");
        info.innerHTML = "Incorrect, that color was: " + hex;
        containerDiv.replaceChild(info, containerDiv.childNodes[2]);
    }
}

function generateRandomColors(): string[] {
    let arr: string[] = [];
    let randomColor: string = "#";
    for (let i: number = 0; i < 5; i++) {
        for (let i: number = 0; i < 6; i++) {
            randomColor += available[Math.floor(Math.random() * available.length)]
        }
        arr[i] = randomColor;
        randomColor = "#";
    }
    return arr;
}