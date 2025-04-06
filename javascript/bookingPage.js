window.focus();
// Selecting form and input elements
const form = document.querySelector("form");
// const passwordInput = document.getElementById("password");
// const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fromInput = document.getElementById("from");
    const toInput = document.getElementById("to");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const classTypeInput = document.getElementById("classType");

    // Getting trimmed values from input fields
    const from = fromInput.value.trim();
    const to = toInput.value.trim();
    const email = emailInput.value.trim();
    // const password = passwordInput.value.trim();
    const date = dateInput.value;
    const classType = classTypeInput.value;

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (from === "") {
        showError(fromInput, "Please enter a valid destination");
    }
    if (to === "") {
        showError(toInput, "Please enter a valid destination");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    // if (password === "") {
    //     showError(passwordInput, "Enter your password");
    // }
    if (date === "") {
        showError(dateInput, "Select a valid date");
    }
    if (classType === "") {
        showError(classTypeInput, "Select your class");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
    window.confirm("Confirm booking?");
    window.location.assign(`submitPage.html?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&email=${encodeURIComponent(email)}&date=${encodeURIComponent(date)}&classType=${encodeURIComponent(classType)}`);
}

// Toggling password visibility
// passToggleBtn.addEventListener('click', () => {
//     passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
//     passwordInput.type = passwordInput.type === "password" ? "text" : "password";
// });

// Handling form submission event
form.addEventListener("submit", handleFormData);