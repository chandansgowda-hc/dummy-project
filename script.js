const button = document.getElementById("demoButton");
const message = document.getElementById("message");
const statusNote = document.querySelector(".status-note");

button.addEventListener("click", () => {
  // Changed: Update the status line so the page gives immediate feedback after clicking.
  statusNote.textContent = "Button clicked successfully!";
  // Intentional issue for the Fork + PR demo
  // Replace this placeholder with the proper success message.
  message.textContent =
    "Your Pull Request fix works! This is a changed message.";
});
