document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the default form submission

    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value;

    // Simple input validation (though HTML 'required' helps here too)
    if (!emailInput || !passwordInput) {
      alert('Please enter both email and password.');
      return;
    }

    // --- Simulation of Login Process ---
    console.log(`Attempting login for: ${emailInput}`);

    // In a real application, you would send this data to an API endpoint:
    // fetch('/api/login', { method: 'POST', body: JSON.stringify({ email: emailInput, password: passwordInput }) })
    // .then(response => ...)

    // For this simulation, we'll assume success:
    if (passwordInput === "password123") { // Example check
      alert(`Login successful! Welcome back, ${emailInput}.`);

      // Redirect to the dashboard or homepage after success
      // window.location.href = "index.html";

    } else {
      // Simulate a failed login
      alert("Login failed. Please check your email and password.");
    }

    // Optional: clear the password field after an attempt
    document.getElementById('password').value = '';
  });
});