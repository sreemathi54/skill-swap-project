document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-btn');
    const skillForm = document.getElementById('skill-form');
    
    // Ensure the submit button is enabled when the page loads
    submitButton.disabled = false;

    skillForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const skills = document.getElementById('skills').value;
        const claim = document.getElementById('claim').value;

        if (name && skills) {
            // Create a new list item with the name and skills
            const listItem = document.createElement('li');
            listItem.textContent = `${name}: ${skills}`;

            // If there's a claim, show it in an alert box
            if (claim) {
                alert(`Claim: ${claim}`);
            }

            // Append the skill list item to the skills list
            document.getElementById('skills-list').appendChild(listItem);

            // Clear input fields after submission
            document.getElementById('name').value = '';
            document.getElementById('skills').value = '';
            document.getElementById('claim').value = ''; // Clear the claim field
        } else {
            alert("Please fill in both name and skills.");
        }
    });
});
