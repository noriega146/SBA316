import "./styles.css";

document.addEventListener("load", function () {
  // Cache the elements
  const textElement = document.getElementById("text");
  const buttonElement = document.getElementById("changeTextBtn");
  const formElement = document.getElementById("detailsForm");

  // Add an event listener to the button
  buttonElement.addEventListener("click", function () {
    textElement.textContent = "Please enter your details below:";
    formElement.classList.remove("hidden");
  });

  // Add a submit event listener to the form
  formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    alert(`Name: ${name}\nPhone: ${phone}`);
    textElement.textContent = `Thank you, ${name}! We have received your phone number (${phone}).`;
    document.body.style.backgroundColor = "red";
  });
});
