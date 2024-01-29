let container = document.querySelector(".container");

for (let i = 0; i < 273; i++) {
  let div = document.createElement("div");
  container.appendChild(div);
}

function generateNewGrid() {
  let value = +prompt("Please enter the number of squares per side");

  // Check The value
  if (value > 100 || value < 0 || isNaN(value)) {
    alert("Error: Number Entred Cannot Exceed This Range 0--100!");
  } else {
    container.innerHTML = "";

    let SquareNumber = value * value + value + 1;

    for (let i = 0; i < SquareNumber; i++) {
      let div = document.createElement("div");
      container.appendChild(div);
    }
  }
}

generateNewGrid();
