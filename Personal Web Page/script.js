// Function to display an alert message
function showWelcomeMessage() {
    alert("Hello, welcome to my page!");
}

// Function to change background color on hover over the profile picture
document.getElementById('profile-pic').addEventListener('mouseover', function() {
    document.body.style.backgroundColor = '#e0ffff';
});

document.getElementById('profile-pic').addEventListener('mouseout', function() {
    document.body.style.backgroundColor = '#f0f8ff';
});
