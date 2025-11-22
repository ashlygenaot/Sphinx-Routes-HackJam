
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = loginUsername.value.trim();
    const password = loginPassword.value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // store logged-in user info
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert(`Welcome back, ${user.name}!`);
        // redirect to a protected page
        window.location.href = 'welcome.html';
    } else {
        error_message.innerHTML = 'Invalid username or password';
    }
});
