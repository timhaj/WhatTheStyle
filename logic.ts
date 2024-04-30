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
    colorDiv.appendChild(circleDiv);
}
containerDiv.appendChild(colorDiv);
document.body.appendChild(containerDiv);

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