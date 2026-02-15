function showEmailPopup(event) {
  event.preventDefault(); // stop the form from submitting

  // Collect what the user typed
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Show popup with your email address
  alert(
    "Please send this mail to: janmejaya214@gmail.com\n\n" +
    "From: " + name + " (" + email + ")\n\n" +
    "Message:\n" + message
  );
}