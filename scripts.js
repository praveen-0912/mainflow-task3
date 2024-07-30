
document.getElementById('myForm').addEventListener('submit', function(event) {
    let valid = true;
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    
    if (name.value === '') {
        valid = false;
        document.getElementById('nameError').textContent = 'Name is required';
    } else {
        document.getElementById('nameError').textContent = '';
    }
    
    if (email.value === '') {
        valid = false;
        document.getElementById('emailError').textContent = 'Email is required';
    } else {
        document.getElementById('emailError').textContent = '';
    }
    
    if (!valid) {
        event.preventDefault();
    }
});


const menuButton = document.querySelector('.menu-button');
const menuContent = document.querySelector('.menu-content');

menuButton.addEventListener('click', () => {
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
});


const updateButton = document.getElementById('updateContentButton');
const dynamicContent = document.getElementById('dynamicContent');

updateButton.addEventListener('click', () => {
    dynamicContent.innerHTML = '<p>Content has been updated!</p>';
});
