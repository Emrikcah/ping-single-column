const form = document.querySelector("[data-form]");
const email = document.querySelector("[data-email]");
const error = document.querySelector("[data-error]");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = email.value.trim();

  if (validateEmail(emailInput)) {
    form.classList.remove("error");
    error.innerHTML = "";
  } else {
    form.classList.add("error");
    error.innerHTML = "Please provide a valid email address";
    email.value = "email@example/com";
    email.color = "hsl(209,33%,12%)";

    email.addEventListener("focus", (e) => {
      e.target.value = "";
    });
  }

  // validateEmail() stackoverflow https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  function validateEmail(value) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }
});
