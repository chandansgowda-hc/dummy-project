const button = document.getElementById("demoButton");
const message = document.getElementById("message");
const head = document.querySelector("#headEle")

head.addEventListener("dblclick",()=>{
  head.textContent = "GitHub Tutorial"
})

button.addEventListener("click", () => {
  // Intentional issue for the Fork + PR demo
  // Replace this placeholder with the proper success message.
  message.textContent =
    "Your Pull Request fix works! This is a changed message.";
});
