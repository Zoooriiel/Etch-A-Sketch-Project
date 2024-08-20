const container = document.querySelector(".container");
const startBtn = document.querySelector(".btn");

function createGrid(divsPerRow) {
  container.innerHTML = "";
  const divBoxSize = 100 / divsPerRow;

  for (let i = 0; i < divsPerRow * divsPerRow; i++) {
    const divBox = document.createElement("div");
    divBox.classList.add("divBox");
    divBox.style.flexBasis = `${divBoxSize}%`;
    divBox.style.height = `${divBoxSize}%`;
    container.appendChild(divBox);

    divBox.addEventListener("mouseover",() => {
      divBox.style.backgroundColor = "grey"
      divBox.style.boxShadow = "3px 3px 2px white"
    })

  }

}


startBtn.addEventListener("click", () => {
  let userChoice = parseInt(prompt("How many divs per grid?"), 10);
  if (isNaN(userChoice) || typeof userChoice !== "number") {
    alert("Please enter a number!!");
  } else if (userChoice > 100) {
    alert("Please enter a number below 100");
  } else {
    createGrid(userChoice);
  }
});
