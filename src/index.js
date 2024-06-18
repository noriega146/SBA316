import "./styles.css";
document.addEventListener("DOMContentLoaded", function () {
  // Cache the elements
  const textElement = document.getElementById("text");
  const buttonElement = document.getElementById("changeTextBtn");
  const formElement = document.getElementById("detailsForm");

  // Add an event listener to the button
  buttonElement.addEventListener("click", function () {
    // modify the text 
    textElement.textContent = "Please enter your details below:";
    formElement.classList.remove("hidden");
  });

  // Add a submit event listener to the form
  formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    // Update the text content with the entered details
    textElement.textContent = `Thank you, ${name}! We have received your phone number (${phone}).`;
    alert(`Name: ${name}\nPhone: ${phone}`);
    formElement.parentNode.style.backgroundColor = "grey";
    formElement.classList.add("hidden");
    window.close;
  });
});
