// let gender = document.getElementById('gender');
// if(gender == 'Male'){
//     document.getElementById('genderr').style = "display: none";
// }



let eror = false;
let userArray = [];

(() => {
    userArray = JSON.parse(localStorage.getItem('User Data')) || [];
    const userLogin = JSON.parse(localStorage.getItem('loginUser'));

    if (userLogin) {
        location.href = 'index.html';
    }
})();

let btn = document.getElementById('btn');

btn.addEventListener('click', (a) => {
    a.preventDefault();

    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let adress = document.getElementById('adress').value;
    let DOB = document.getElementById('DOB').value;
    let gender = document.getElementById('gender').value;

    let nameIsValid = true;
    let emailIsValid = true;
    let passwordIsValid = true;
    let confirmPasswordIsValid = true;
    let adressIsValid = true;
    let DOBIsValid = true;
    let ageIsValid = true;
    let genderIsValid = true;

    eror = false;

    document.getElementById("name-msg").innerHTML = "";
    document.getElementById("email-msg").innerHTML = "";
    document.getElementById("pass-msg").innerHTML = "";
    document.getElementById("password-msg").innerHTML = "";
    document.getElementById("adress-msg").innerHTML = "";
    document.getElementById("DOB-msg").innerHTML = "";
    document.getElementById("gender-msg").innerHTML = "";

    // Validate User Name

    if (userName == '') {
        document.getElementById("name-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
    <div class="msg">Please enter your user name.</div>`;
        nameIsValid = false;
    } else if (userName.length < 3) {
        document.getElementById("name-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
    <div class="msg">User name should contain at least 3 characters.</div>`;
        nameIsValid = false;
    } else if (userName.length > 20) {
        document.getElementById("name-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
    <div class="msg">User name should contain 20 characters.</div>`;
        nameIsValid = false;
    } else if (userName.search(/[a-zA-Z]/) < 0) {
        document.getElementById("name-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
      <div class="msg">User name should contain at least one alphabet.</div>`;
        nameIsValid = false;
    }

    // Validate Email

    if (email == '') {
        document.getElementById("email-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
      <div class="msg">Please enter your email address.</div>`;
        emailIsValid = false;
    } else if (email.search(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]/)) {
        document.getElementById("email-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
    <div class="msg">Kindly enter a valid email address.</div>`;
        emailIsValid = false;
    }

    // Validate Password

    if (password == "") {
        document.getElementById("pass-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
        <div class="msg">Please enter your password.</div>`;
        passwordIsValid = false;
    } else if (password.length < 6) {
        document.getElementById("pass-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
        <div class="msg">Password should be at least 6 characters long.</div>`;
        passwordIsValid = false;
    } else if (password.length > 16) {
        document.getElementById("pass-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
        <div class="msg">Password should be no more than 16 characters long.</div>`;
        passwordIsValid = false;
    } else if (password.search(/[a-z]/) < 0) {
        document.getElementById("pass-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
        <div class="msg">Your password must contain at least one lowercase letter.</div>`;
        passwordIsValid = false;
    } else if (password.search(/[A-Z]/) < 0) {
        document.getElementById("pass-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
        <div class="msg">Your password must contain at least one uppercase letter.</div>`;
        passwordIsValid = false;
    } else if (password.search(/[0-9]/) < 0) {
        document.getElementById("pass-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
        <div class="msg">Your password must contain at least one number.</div>`;
        passwordIsValid = false;
    } else if (password.search(/[!@#$%^&*]/) < 0) {
        document.getElementById("pass-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
        <div class="msg">Your password must contain at least one special character.</div>`;
        passwordIsValid = false;
    }

    // Validate Confirm Password

    if (confirmPassword == '') {
        document.getElementById("password-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
        <div class="msg">Please enter your confirm password.</div>`;
        confirmPasswordIsValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("password-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
        <div class="msg">Those passwords didn't match. Try again.</div>`;
        confirmPasswordIsValid = false;
    }

    // Validate Address

    if (adress == '') {
        document.getElementById("adress-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
    <div class="msg">Please enter your address.</div>`;
        adressIsValid = false;
    } else if (adress.length < 6) {
        document.getElementById("adress-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
    <div class="msg">Kindly enter a valid address.</div>`;
        adressIsValid = false;
    } else if (adress.search(/[a-zA-Z]/) < 0) {
        document.getElementById("adress-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
    <div class="msg">Kindly enter a valid address.</div>`;
        adressIsValid = false;
    } else if (adress.search(/[0-9]/) < 0) {
        document.getElementById("adress-msg").innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
      <div class="msg">Kindly enter a valid address.</div>`;
        adressIsValid = false;
    }

    // Validate Date of Birth and Age

    if (DOB == '') {
        document.getElementById("DOB-msg").innerHTML = `<div class="msg">Please enter your date of birth.</div>`;
        DOBIsValid = false;
    } else {
        let dob = new Date(DOB);
        let ageDiff = Date.now() - dob.getTime();
        let ageDate = new Date(ageDiff);
        let age = Math.abs(ageDate.getUTCFullYear() - 1970);

        if (age < 18) {
            document.getElementById("DOB-msg").innerHTML = `<div class="msg">You must be atleast 18+ to register.</div>`;
            ageIsValid = false;
        }
    }

    // Validate Gender

    if (gender == 'Gender') {
        document.getElementById("gender-msg").innerHTML = `<div class="msg gender-msg">Please select your gender.</div></div>`;
        genderIsValid = false;
    }


    for (let i = 0; i < userArray.length; i++) {
        if (userName === userArray[i].userName) {
            document.getElementById('name-msg').innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
            <div class="msg">User name already exists.</div>`;
            eror = true;
        }
        if (email === userArray[i].email) {
            document.getElementById('email-msg').innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>
            <div class="msg">Email already exists.</div>`;
            eror = true;
        }
    }

    if (!nameIsValid || !emailIsValid || !passwordIsValid || !confirmPasswordIsValid || !adressIsValid || !DOBIsValid || !ageIsValid || !genderIsValid || eror) {
        return;
    }

    let registeredDate = new Date();
    const userObject = {
        userName,
        email,
        password,
        confirmPassword,
        adress,
        DOB,
        gender,
        registeredDate,
    };

    userArray.push(userObject);
    localStorage.setItem('User Data', JSON.stringify(userArray));
    document.getElementById('signUpForm').reset();

    document.getElementById('successful-msg').innerHTML = `<div class="success-msg">
        <i class="fas fa-check-circle" style="color: green;"></i>
        <span>Registration Successful</span>
    </div>`;
    setTimeout(function () {
        document.getElementById('successful-msg').innerHTML = '';
    }, 2000);
});

document.getElementById('userName').addEventListener('input', function () {
    document.getElementById("name-msg").innerHTML = "";
});

document.getElementById('email').addEventListener('input', function () {
    document.getElementById("email-msg").innerHTML = "";
});

document.getElementById('password').addEventListener('input', function () {
    document.getElementById("pass-msg").innerHTML = "";
});

document.getElementById('confirmPassword').addEventListener('input', function () {
    document.getElementById("password-msg").innerHTML = "";
});

document.getElementById('adress').addEventListener('input', function () {
    document.getElementById("adress-msg").innerHTML = "";
});

document.getElementById('DOB').addEventListener('input', function () {
    document.getElementById("DOB-msg").innerHTML = "";
});

document.getElementById('gender').addEventListener('change', function () {
    document.getElementById("gender-msg").innerHTML = "";
});











