function handleSubmit() {
    // Get form values
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email_address"]').value;
    var subject = document.querySelector('input[name="subject"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    // Check if form fields are not empty
    if (name && email && subject && message) {
        // Display alert message
        alert('Form submitted successfully!');
        return true; // Allow form submission
    } else {
        // Display specific error messages for each field
        if (name == "") {
            alert("Please enter your name.");
        } else if (email == "") {
            alert("Please enter your email.");
        } else if (subject == "") {
            alert("Please enter the subject.");
        } else if (message == "") {
            alert("Please enter your message.");
        }

        return false; // Prevent form submission
    }
}
