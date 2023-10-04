// SELECTIN ALL REQUIRED ELEMENTS
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const buttons = document.querySelectorAll(".btn");

// FUNCTIONS TO OPEN AND CLOSE THE MODAL WINDOW
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// ADDING EVENT LISTENER TO ALL THE ELEMENTS
buttons.forEach((btn) => btn.addEventListener("click", openModal));

close.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// LISTENING THE KEY PRESS ON THE DOCUMENT ELEMENT
document.documentElement.addEventListener("keydown", function (e) {
  e.key === "Escape" && closeModal();
});
