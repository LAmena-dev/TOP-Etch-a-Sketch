// etch-a-sketch script

let defSquareSize = 40;
let num = prompt("Number of squares:");
let numOfSquares = num * num;
let squareDimen = num * defSquareSize + num * 2;
const generator = document.querySelector(".generator");
const container = document.querySelector(".container");
container.setAttribute(
  "style",
  `width: ${squareDimen}px; height: ${squareDimen}px;`
);

for (let i = 0; i < numOfSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.textContent = i + 1;
  square.setAttribute(
    "style",
    `display: flex; flex: 1 0 none; justify-content: center; align-items: center; background-color: rgb(85, 95, 140); color: white; width: ${defSquareSize}px; height: ${defSquareSize}px; margin: 0; padding: 0`
  );

  square.addEventListener("mouseenter", () => {
    square.setAttribute("data-hovered", "true");
  });

  container.appendChild(square);
}
