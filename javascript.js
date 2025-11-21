// etch-a-sketch script

function gridGenerator(squareNum) {
  squareSide = squareDimen / squareNum;

  for (let i = 0; i < squareNum ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute(
      "style",
      `width: ${squareSide}px; height: ${squareSide}px;`
    );

    let randomR = Math.floor(Math.random() * 255);
    let randomG = Math.floor(Math.random() * 255);
    let randomB = Math.floor(Math.random() * 255);
    square.style.backgroundColor =
      "rgb(" + randomR + "," + randomG + "," + randomB + ")";
    square.addEventListener("mouseover", () => {
      square.style.opacity = Number(square.style.opacity) + 0.2;
    });
    container.appendChild(square);
  }

  return;
}

const container = document.querySelector(".container");

let squareDimen = 800;
let defSide = 16;

gridGenerator(defSide);

const generator = document.querySelector(".generator");

generator.addEventListener("click", () => {
  gridNum = parseInt(prompt("Number of squares per side?:"));

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  if (gridNum > 64) {
    alert("Input cannot be more than 64!");
    gridNum = 64;
  }

  gridGenerator(gridNum);
});
