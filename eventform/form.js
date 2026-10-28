// Date
const dateInput = document.getElementById("event-date");
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
dateInput.min = tomorrow.toLocaleDateString("en-CA");

//Dropdown
const type = document.getElementById("type");
const extraField = document.getElementById("extra-field");
const extraLabel = document.getElementById("extra-label");
const extraInput = document.getElementById("extra-input");

type.addEventListener("change", () => {
    extraInput.value = "";

    if (type.value === "student") {
        extraLabel.textContent = "Student I#";
        extraInput.name = "student-id";
        extraInput.pattern = "\\d{9}";
        extraInput.inputMode = "numeric";
        extraInput.maxLength = 9;
        extraInput.title = "Enter your 9-digit student I number";
        extraInput.required = true;
        extraField.hidden = false;
    } else if (type.value === "guest") {
        extraLabel.textContent = "Access Code";
        extraInput.name = "access-code";
        extraInput.pattern = "EVENT131";
        extraInput.removeAttribute("inputmode");
        extraInput.removeAttribute("maxlength");
        extraInput.title = "Enter the event access code";
        extraInput.required = true;
        extraField.hidden = false;
    } else {
        extraField.hidden = true;
        extraInput.required = false;
        extraInput.removeAttribute("pattern");
    }
});

extraInput.addEventListener("invalid", () => {
    if (extraInput.validity.valueMissing) {
        extraInput.setCustomValidity("Please fill in this field.");
    } else if (extraInput.validity.patternMismatch) {
        if (type.value === "student") {
            extraInput.setCustomValidity("Student I# must be 9 digits.");
        } else {
            extraInput.setCustomValidity("That access code is not valid.");
        }
    }
});

extraInput.addEventListener("input", () => extraInput.setCustomValidity(""));

const form = document.querySelector(".signup-form");
const ticket = document.getElementById("ticket");
const formError = document.getElementById("form-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formError.textContent = "";
  ticket.hidden = true;

  // Specific messages first
  if (type.value === "student" && extraInput.validity.patternMismatch) {
    formError.textContent = "Student I# must be 9 digits";
    return;
  }
  if (type.value === "guest" && extraInput.validity.patternMismatch) {
    formError.textContent = "That access code is not valid";
    return;
  }
  if (dateInput.validity.rangeUnderflow) {
    formError.textContent = "The event date must be after today";
    return;
  }
  if (!form.checkValidity()) {
    formError.textContent = "Please complete all fields";
    return;
  }

  // Success: read values BEFORE resetting the form
  const first = document.getElementById("first-name").value;
  const last = document.getElementById("last-name").value;
  const typeText = type.value;
  const dateText = dateInput.value;

  document.getElementById("ticket-name").textContent = `${first} ${last}`;
  document.getElementById("ticket-type").textContent = typeText;
  document.getElementById("ticket-date").textContent = dateText;

  form.reset();
  extraField.hidden = true;
  extraInput.required = false;
  ticket.hidden = false;
});