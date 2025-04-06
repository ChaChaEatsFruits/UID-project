window.focus();
const allStar = document.querySelectorAll('.rating .star');
const ratingValue = document.querySelector('.rating input');
const form = document.querySelector('#form');
const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');

// Your existing star rating code
allStar.forEach((item, idx) => {
    item.addEventListener('click', () => {
        let click = 0;
        ratingValue.value = idx + 1;
        allStar.forEach(i => {
            i.classList.replace('bxs-star', 'bx-star')
            i.classList.remove('active');
        })
        for (let i = 0; i < allStar.length; i++) {
            if (i <= idx) {
                allStar[i].classList.replace('bx-star', 'bxs-star');
                allStar[i].classList.add('active');
            }
            else {
                allStar[i].style.setProperty('--i', click)
                click++;
            }
        }
    })
})

// Enhanced form submission with validation using window.alert
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let errorMessage = '';
    
    // Validate name
    if (!nameInput.value.trim()) {
        errorMessage += '• Name is required\n';
    }

    // Validate email
    if (!emailInput.value.trim()) {
        errorMessage += '• Email is required\n';
    } else if (!isValidEmail(emailInput.value)) {
        errorMessage += '• Please enter a valid email\n';
    }

    // Validate rating
    if (!ratingValue.value || ratingValue.value == 0) {
        errorMessage += '• Please select a rating\n';
    }

    if (errorMessage) {
        window.alert("Please fix the following errors:\n\n" + errorMessage);
    } else {
        window.alert("Thank you for your Valuable Feedback!");
        form.submit();
    }
});

// Email validation helper function
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}