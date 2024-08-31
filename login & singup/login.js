
let userArray = [];

// Initialize the userArray from localStorage
(() => {
    userArray = JSON.parse(localStorage.getItem('User Data')) || [];
  
    const userLogin = JSON.parse(localStorage.getItem('loginUser'));
  
    if (userLogin) {
        location.href = 'index.html';
    }
})();

// SHOW AND HIDE PASSWORD START
let eye;

function pass() {
    if (eye == 1) {
        document.getElementById('password').type = "password";
        document.getElementById('closeeye').style = "display: flex";
        document.getElementById('openeye').style = "display: none";
        eye = 0;
    } else {
        document.getElementById('password').type = "text";
        document.getElementById('closeeye').style = "display: none";
        document.getElementById('openeye').style = "display: flex";
        eye = 1;
    }
}
// SHOW AND HIDE PASSWORD END

let btn = document.getElementById('btn');

btn.addEventListener('click', (a) => {
    a.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(email == "") {
        document.getElementById("email-msg").innerHTML = `<div class="msg">Please enter your email or username.</div>`;
        return;
    }
    
    let userFound = null;

    // First check if the email or username exists in the userArray
    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].email === email || userArray[i].userName === email) {
            userFound = userArray[i];
            break;
        }
    }

    if (userFound) {
        // Now check if the password matches
        if (userFound.password === password) {
            localStorage.setItem('loginUser', JSON.stringify(userFound));
            location.href = 'index.html';
            document.getElementById('successful-msg').innerHTML = `<div class="success-msg">
                <i class="fas fa-check-circle" style="color: green;"></i>
                <span>Login Successful</span>
            </div>`;
            setTimeout(function () {
                document.getElementById('successful-msg').innerHTML = '';
            }, 2500);
        } else {
            document.getElementById('error-msg').innerHTML = `<div class="error-msg">
                <i class="fas fa-exclamation-circle" style="color: red;"></i>
                <span>Invalid password. Please try again.</span>
            </div>`;
            setTimeout(function () {
                document.getElementById('error-msg').innerHTML = '';
            }, 2500);
        }
    } else {
        document.getElementById('error-msg').innerHTML = `<div class="error-msg">
            <i class="fas fa-exclamation-circle" style="color: red;"></i>
            <span>Invalid email or username. Please try again.</span>
        </div>`;
        setTimeout(function () {
            document.getElementById('error-msg').innerHTML = '';
        }, 2500);
    }
});
