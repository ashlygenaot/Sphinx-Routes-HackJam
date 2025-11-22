const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-button");
const error_message = document.getElementById('error-message');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const firstname_input = document.getElementById('firstname-input');
const weight_input = document.getElementbyId('weight_input')


FormData.addEventListener('submit', (e) => {
    let errors = []

    if (firstname_input) {
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value)
    }
  else{
    // If we don't have a firstname input then we are in the login
    errors = getLoginFormErrors(email_input.value, password_input.value)
  }

  if(errors.length > 0){
    // If there are any errors
    e.preventDefault()
    error_message.innerText  = errors.join(". ")
  }
})

function getSignupFormErrors(firstname, email, password){
  let errors = []

  if(firstname === '' || firstname == null){
    errors.push('First name is required')
    firstname_input.parentElement.classList.add('incorrect')
  }
  if(email === '' || email == null){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password.length < 15){
    errors.push('Password must have AT LEAST 15 characters long')
    password_input.parentElement.classList.add('incorrect')
  }
  if(!password.includes(" ")){
    errors.push('Password must include a space')
  }
  if(!password.includes(6 && 7)){
    errors.push('Password must include 67')
  }
  if(!/[A-Z]/.test(password)) {
    errors.push('Password must have capital letters')
  }
  if()
  return errors;
}

function getLoginFormErrors(email, password){
  let errors = []

  if(email === '' || email == null){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }

  return errors;
}

const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      error_message.innerText = ''
    }
  })
})




loginButton.addEventListener("click", (e) =>){
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
}

if (username && password == )