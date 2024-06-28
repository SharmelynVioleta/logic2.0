const mano = document.getElementById("img_mano");
const input1 = document.getElementById("first_input");
const divEntero = document.getElementById("entero_item");

let mientras = true;

function moverMano() {
  mano.style.top = "260px";
  mano.style.left = "-40px";
  setTimeout(() => {
    mano.style.top = "100px";
    mano.style.left = "30px";
  }, 1000);
}

moverMano();
setTimeout(async () => {
  moverMano();
  setTimeout(() => {
    mano.style.display = "none";
    input1.style.border = "5px solid yellow";
  }, 3000);
}, 3000);

let offsetX, offsetY;

divEntero.addEventListener("touchstart", (event) => {
  const touch = event.touches[0];
  offsetX = touch.clientX - 60;
  offsetY = touch.clientY - 90;

  divEntero.style.position = "absolute";
  divEntero.style.zIndex = "1000";
});

divEntero.addEventListener("touchmove", (event) => {
  const touch = event.touches[0];
  divEntero.style.left = touch.clientX - offsetX + "px";
  divEntero.style.top = touch.clientY - offsetY + "px";

  event.preventDefault();
});

divEntero.addEventListener("touchend", () => {
  const rectInput = input1.getBoundingClientRect();
  const rectDraggable = divEntero.getBoundingClientRect();

  if (
    rectDraggable.left >= rectInput.left &&
    rectDraggable.right <= rectInput.right &&
    rectDraggable.top >= rectInput.top &&
    rectDraggable.bottom <= rectInput.bottom
  ) {
    input1.value = divEntero.innerText;
    divEntero.style.display = "none";
    input1.style.border = "none";
    input1.disabled = true;
    input1.style.backgroundColor = "white";
    phase2();
  }
  divEntero.style.position = "";
  divEntero.style.left = "50";
  divEntero.style.top = "50";
  divEntero.style.zIndex = "100";
});

function phase2() {
  const input2 = document.getElementById("second_input");
  const text_title = document.getElementById("text_title");

  input2.addEventListener("blur", () => {
    console.log("El usuario hizo clic fuera del input.");

    if (input2.value.length > 0) {
      input2.style.border = "none";
      input2.style.backgroundColor = "white";
      input2.disabled = true;
      phase3();
    }
  });

  input2.style.border = "5px solid yellow";
  input2.disabled = false;
  text_title.innerHTML = "Escribe el nombre de tu variable";
}

function phase3() {
  const input3 = document.getElementById("third_input");
  const text_title = document.getElementById("text_title");

  input3.addEventListener("blur", () => {
    console.log("El usuario hizo clic fuera del input.");

    if (input3.value.length > 0) {
      input3.style.border = "none";
      input3.style.backgroundColor = "white";
      input3.disabled = true;
      completed();
    }
  });

  input3.style.border = "5px solid yellow";
  input3.disabled = false;
  text_title.innerHTML = "Escribe el nombre de tu variable";
}
