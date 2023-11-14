var loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', function() {
    if (document.getElementById('usernameField').value != "" & document.getElementById('passwordField').value != "") {
        window.open("homePage.html","_self")
    }
}); 
