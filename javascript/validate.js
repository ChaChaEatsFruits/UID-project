const form=document.getElementById('loginForm');
const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');
const phoneInput=document.getElementById('phone');
const passwordInput=document.getElementById('password');
const confirmPasswordInput=document.getElementById('confirm_password');

form.addEventListener('submit',(e)=>{
    let errors=[];
    e.preventDefault();
    if (nameInput){
        //we are in signup
        errors=getSignupFormErrors(nameInput.value,emailInput.value,phoneInput.value,passwordInput.value,confirmPasswordInput.value);
        if (errors.length>0){
            e.preventDefault();
            alert(errors.join('\n'));
        }
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
        passwordInput.parentElement.classList.add('incorrect');
        confirmPasswordInput.parentElement.classList.add('incorrect');
    }
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        errors.push('Invalid email address');
        emailInput.parentElement.classList.add('incorrect');
    }
    return errors;
    
}