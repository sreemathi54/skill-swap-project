document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating a login check (simple validation for non-empty fields)
    if (username && password) {
        // Redirect to the skills page
        window.location.href = 'skills.html';
    } else {
        alert("Please enter both username and password.");
    }
});
