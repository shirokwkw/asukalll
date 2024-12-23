// Prevent the input from resetting when clicked
document.getElementById('search-icon').addEventListener('click', function (event) {
    event.stopPropagation();
});

// Navigate to countdown.html when the search icon is clicked
document.getElementById('search-icon').addEventListener('click', function () {
    window.location.href = 'countdown.html';
});

// Navigate to login.html when the back button is clicked
document.getElementById('back').addEventListener('click', function () {
    window.location.href = 'login.html';
});
