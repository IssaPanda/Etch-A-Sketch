const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
  const mouseOverFunction = function () {
    this.style.backgroundColor = 'blue';
  };
  
  container.onmouseover = mouseOverFunction;  
};

makeRows(16, 16);
