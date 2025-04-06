const form=document.getElementById('loginForm');
const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');
const phoneInput=document.getElementById('phone');
const passwordInput=document.getElementById('password');
const confirmPasswordInput=document.getElementById('confirm_password');
window.focus();

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
        else{
            saveUserDetails(nameInput.value,emailInput.value,phoneInput.value,passwordInput.value);
            alert('Signed Up Successfully!');
        }
    }
    else{
        //login page
        errors=getLoginFormErrors(emailInput.value,passwordInput.value)
        if (errors.length>0){
            e.preventDefault();
            alert(errors.join('\n'));
        }
        else{
            checkUserLogin(emailInput.value,passwordInput.value);
            
        }
    }
})

function getSignupFormErrors(name,email,phone,password,confirmPassword){
    let errors=[];
    if (password.length<8){
        errors.push('Password must be at least 8 characters long');
        passwordInput.parentElement.classList.add('incorrect');
    }
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
function getLoginFormErrors(email,password){
    let errors=[];
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        errors.push('Invalid email address');
        emailInput.parentElement.classList.add('incorrect');
    }
    return errors
}

function saveUserDetails(name,email,phone,password){
    //save user details to local storage
    var users=JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user=>user.email===email)){
        alert('User with this email alredy exists');
        emailInput.parentElement.classList.add('incorrect');
        return;
    }
    else{
        users.push({name,email,phone,password});
        localStorage.setItem('users',JSON.stringify(users));
    }
}
function checkUserLogin(email,password){
    var users=JSON.parse(localStorage.getItem('users'))|| [];
    if (users.some(user=>user.email===email && user.password===password)){
        alert('Logged In Successfully!');
        localStorage.setItem('currentUser',JSON.stringify(email));
        localStorage.setItem('isLoggedIn',true);
        window.location.assign("index.html");
    }
    else{
        alert('Invalid Credentials');
        emailInput.parentElement.classList.add('incorrect');
        passwordInput.parentElement.classList.add('incorrect');
    }
}


//change back if there are errors
const allInputs=[nameInput,emailInput,phoneInput,passwordInput,confirmPasswordInput].filter(input=>input!=null);
allInputs.forEach(input=>{
    input.addEventListener('input',()=>{
        if (input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect');
        }
    })
})
