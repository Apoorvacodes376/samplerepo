document.addEventListener('DOMContentLoaded', () => {
  const forgotForm = document.getElementById('forgotForm');

  forgotForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();

    if (!email) {
      alert('Please enter your email address.');
      return;
    }

    // --- Simulation of Password Reset Link Process ---
    console.log(`Sending reset link to: ${email}`);

    // In a real application, send a request to a server endpoint

    // Simulation: Assume request was sent successfully
    alert(`A password reset link has been sent to ${email}. Check your inbox!`);

    // Optional: Redirect back to the login page after notification
    // window.location.href = "login.html";

    // Clear the form
    forgotForm.reset();
  });
});