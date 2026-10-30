const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    const firstInvalid = form.querySelector(":invalid");
    status.textContent = "Please fix the highlighted field: " + firstInvalid.labels[0].firstChild.textContent.trim() + ".";
    firstInvalid.focus();
    return;
  }

  status.textContent = "Looks good. In a real site, a server would receive this message.";
  form.reset();
});
