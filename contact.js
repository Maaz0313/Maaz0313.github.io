    function sendEmail() {
  // Get the form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validate the form data
  if (name == "") {
    alert("Please enter your name.");
    return;
  }

  if (!isEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (message == "") {
    alert("Please enter your message.");
    return;
  }

  // Send the email
  var emailjs = require("emailjs");
  emailjs.sendForm("iIHAbaUJ7cEU-_Mdy", "contact_form", {
    name: name,
    email: email,
    message: message
  });
}

// Add an event listener to the submit button
document.getElementById("contact-form").addEventListener("submit", sendEmail);

// Function to validate email address
function isEmail(email) {
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
}
