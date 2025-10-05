document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic password matching validation
    if (password !== confirmPassword) {
      alert('Error: Passwords do not match.');
      return;
    }

    // Additional simple checks
    if (password.length < 6) {
      alert('Error: Password must be at least 6 characters long.');
      return;
    }

    // --- Simulation of Sign Up Process ---
    console.log(`Attempting sign up for: ${email}`);

    // In a real application, send data to an API

    // Simulation: Assume success
    alert(`Success! Account created for ${fullName}. Redirecting to log in.`);

    // Redirect to the login page
    window.location.href = "login.html";

    // Optional: clear the form
    signupForm.reset();
  });
});