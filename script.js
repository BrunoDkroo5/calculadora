// Identificando elementos
const display = document.getElementById("display");
const buttons = document.getElementsByClassName("btn");
const erase = document.getElementById("erase");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

var operation = "";

// Fazer Interação
Array.prototype.forEach.call(buttons, (element) => {
  element.addEventListener("click", () => {
    operation += element.value.replace(/[*]/g, "x").replace(/[/]/g, "÷");
    display.innerText = operation;
  });
});

// clear
clear.addEventListener("click", () => {
  operation = "";
  display.innerText = "0";
});

// erase
erase.addEventListener("click", () => {
  operation = operation.substring(0, operation.length - 1);
  display.innerText = operation.substring(0, operation.length);

  if (operation.length <= 0) {
    display.innerText = "0";
  }
});

// Resultado
equals.addEventListener("click", () => {
  res = parseFloat(
    eval(operation.replace(/[x]/g, "*").replace(/[÷]/g, "/")).toFixed(2)
  );

  operation = res;
  display.innerText = res;
});
