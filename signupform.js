
const signupForm = document.getElementById('signup-form');
const error_message = document.getElementById('error-message');

const name_input = document.getElementById('name');
const email_input = document.getElementById('email');
const username_input = document.getElementById('username');
const password_input = document.getElementById('password');
const ruler_input = document.getElementById('ruler');
const camel_input = document.getElementById('camelColor');
const intro_input = document.getElementById('introSong');
const weight_input = document.getElementById('weight');
const child_input = document.getElementById('childAgree');
const sound_input = document.getElementById('sound');
const playBttn = document.getElementById('play-button');


playBttn.addEventListener('click', () => {
    const audio = new Audio('europapa.wav');
    audio.play();
});


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const errors = liveValidation(); // modify liveValidation to return array

    if (errors.length > 0) {
        error_message.innerHTML = errors.join('<br><br>');
        return;
    }

    alert('Sign up successful!');
});



function liveValidation() {
    const errors = [];

    if (!name_input.value.trim()) errors.push('Full name is required');
    if (!email_input.value.trim()) errors.push('Email is required');
    if (!username_input.value.trim()) errors.push('Username is required');

    
    const password = password_input.value;
    if (!password.trim()) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    } else {
        password_input.parentElement.classList.remove('incorrect');
        if (password.length < 15) errors.push('Password must be at least 15 characters long');
        if (!password.includes(' ')) errors.push('Password must include a space');
        if (!password.includes('67')) errors.push('Password must include 67');
        const upperCount = (password.match(/[A-Z]/g) || []).length;
        if (upperCount < 2) errors.push('Password must include at least TWO capital letters');
    }

  
    const rulerVal = ruler_input.value.trim();
    if (!rulerVal) {
        errors.push('Oldest ruler in Egypt is required');
        ruler_input.parentElement.classList.add('incorrect');
    } else if (rulerVal.toLowerCase() !== 'narmer') {
        errors.push('Oldest ruler in Egypt is wrong');
        ruler_input.parentElement.classList.add('incorrect');
    } else {
        ruler_input.parentElement.classList.remove('incorrect');
    }

   
    const camelVal = camel_input.value.trim();
    if (!camelVal) {
        errors.push('Camel rope color is required');
        camel_input.parentElement.classList.add('incorrect');
    } else if (camelVal.toLowerCase() !== 'green') {
        errors.push('Camel rope color must be "Green"');
        camel_input.parentElement.classList.add('incorrect');
    } else {
        camel_input.parentElement.classList.remove('incorrect');
    }

    
    const introVal = intro_input.value.trim();
    const introRegex = /^.+\s*-\s*.+$/;
    if (!introVal) {
        errors.push('Intro song is required');
        intro_input.parentElement.classList.add('incorrect');
    } else if (!introRegex.test(introVal)) {
        errors.push('Intro song must be in the format "Artist - Song"');
        intro_input.parentElement.classList.add('incorrect');
    } else {
        intro_input.parentElement.classList.remove('incorrect');
    }

    const weightVal = parseFloat(weight_input.value);
    if (isNaN(weightVal) || weightVal <= 0) {
        errors.push('Weight must be greater than 0');
        weight_input.parentElement.classList.add('incorrect');
    } else {
        weight_input.parentElement.classList.remove('incorrect');
    }

    
    const childVal = child_input.value.trim().toLowerCase();
    if (!childVal) {
        errors.push('Answer to child custody question is required');
        child_input.parentElement.classList.add('incorrect');
    } else if (childVal !== 'yes') {
        errors.push('You have to bro I dont make the rules');
        child_input.parentElement.classList.add('incorrect');
    } else {
        child_input.parentElement.classList.remove('incorrect');
    }

    const soundVal = sound_input.value.trim().toLowerCase();
    if (!soundVal) {
        errors.push('Sound input is required');
        sound_input.parentElement.classList.add('incorrect');
    } else if (soundVal !== 'what you just heard') {
        errors.push('Sound input must be exactly what you heard');
        sound_input.parentElement.classList.add('incorrect');
    } else {
        sound_input.parentElement.classList.remove('incorrect');
    }

    [name_input, email_input, username_input].forEach(input => {
        if (!input.value.trim()) input.parentElement.classList.add('incorrect');
        else input.parentElement.classList.remove('incorrect');
    });

    if (errors.length > 0) {
        error_message.innerText = errors.join('. ');
    } else {
        error_message.innerText = '';
    }
}

[name_input, email_input, username_input, password_input, ruler_input, camel_input, intro_input, weight_input, child_input, sound_input].forEach(input => {
    input.addEventListener('input', liveValidation);
});


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!liveValidation()) return;


    const user = {
        name: name_input.value.trim(),
        email: email_input.value.trim(),
        username: username_input.value.trim(),
        password: password_input.value,
        ruler: ruler_input.value.trim(),
        camel: camel_input.value.trim(),
        introSong: intro_input.value.trim(),
        weight: weight_input.value,
        childAgree: child_input.value.trim(),
        sound: sound_input.value.trim()
    };
    
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.some(u => u.username === user.username)) {
        error_message.innerHTML = 'Username already exists. Choose another one.';
        return;
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign up successful! You can now log in.');
    signupForm.reset();

    window.location.href = 'index.html';
});

