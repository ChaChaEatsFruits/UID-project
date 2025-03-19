const form=document.getElementById('loginForm');
const nameInput=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('confirm_password');

form.addEventListener('submit',(e)=>{
    //e.preventDefault();
    let errors=[];
    if (nameInput){
        //we are in signup
        errors=getSignupFormErrors(nameInput.value,email.value,phone.value,password.value,confirmPassword.value);
    }
    else{
        //login page
        errors=getLoginFormErrors(email.value,password.value)
    }
})

function getSignupFormErrors(name,email,phone,password,confirmPassword){
    let errors=[];
    
    if (password!==confirmPassword){
        errors.push('Passwords do not match');
        password.parentElement.classList.add='incorrect';
        confirmPassword.parentElement.classList.add='incorrect';
    }
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        errors.push('Invalid email address');
        email.parentElement.classList.add='incorrect';
    }
    if (!phone.checkValidity()) {
        errors.push('Invalid phone number');
        phone.parentElement.classList.add='incorrect';
    }

    if (errors.length>0){
        e.preventDefault();
        
    }
}