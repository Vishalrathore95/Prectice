var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.trim().length === 0) {
        nameError.innerHTML = "Name is required";
        return false;
    } else if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "please write full name";
        return false;
    } else {
        nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function validatePhone() {
    var phone = document.getElementById("contact-phone").value;
    var phoneError = document.getElementById("phone-error");

    if (phone.length === 0) {
        phoneError.innerHTML = "Phone is required";
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone number should be 10 digits";
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Enter only digits";
        return false;
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("email-error");

    // Regular expression for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }

    if (!emailRegex.test(email)) {
        emailError.innerHTML = "Enter a valid email address";
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById("message").value;
    var messageError = document.getElementById("message-error");

    var maxMessageLength = 30;

    if (message.length === 0) {
        messageError.innerHTML = "Message is required";
        return false;
    }

    if (message.length > maxMessageLength) {
        messageError.innerHTML = "Message should not exceed 30 characters";
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateForm(){
    if(!validateName()||!validatePhone()||!validateEmail()||!validateMessage()){
        submitError.style.display ="block"
        submitError.innerHTML ="please fix error to submit"
        setTimeout(function(){   submitError.style.display ="none";},3000);
        return false;
    }
}