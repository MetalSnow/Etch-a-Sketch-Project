let container = document.querySelector(".container");
let adjustBtn = document.querySelector(".adjust-btn");
let clearBtn = document.querySelector(".clear-btn");
let checkBox = document.querySelector("#rainbow");

for (let i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "midnightblue";
  });
  clearBtn.addEventListener("click", () => {
    div.style.backgroundColor = "beige";
  });
  container.appendChild(div);
}

function generateNewGrid() {
  let value = +prompt("Please enter the number of squares per side");

  // Check The value
  if (value > 100 || value <= 0 || isNaN(value)) {
    alert("Error: Number Entred Cannot Exceed This Range 1--100!");
  } else {
    container.innerHTML = "";

    let SquareNumber = value * value;
    const squareSize = 500 / value;
    container.style.gridTemplateColumns = `repeat(${value}, ${squareSize}px)`;
    container.style.gridTemplateRows = `repeat(${value}, ${squareSize}px)`;

    for (let i = 0; i < SquareNumber; i++) {
      let div = document.createElement("div");
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "midnightblue";
      });
      clearBtn.addEventListener("click", () => {
        div.style.backgroundColor = "beige";
      });
      container.appendChild(div);
    }
  }
}

adjustBtn.addEventListener("click", generateNewGrid);

//Raibow Color
function GetRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
