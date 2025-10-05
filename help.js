document.addEventListener('DOMContentLoaded', () => {

  // --- 1. FAQ Collapse/Expand Functionality ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      // Toggle the 'active' class on the button
      question.classList.toggle('active');

      // Toggle the answer's visibility (collapsible effect)
      if (answer.style.maxHeight) {
        // If the answer is open, close it
        answer.style.maxHeight = null;
      } else {
        // If the answer is closed, open it by setting max-height
        // to its scroll height (required for a smooth CSS transition)
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // --- 2. Help Search Functionality (Simple simulation) ---
  const searchBtn = document.getElementById('helpSearchBtn');
  const searchInput = document.getElementById('helpSearchInput');

  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      alert(`Simulating search for help articles related to: "${query}".`);
      // In a real application, you'd filter the FAQ list or redirect to a search results page.
    } else {
      alert('Please enter a search term for the Help Center.');
    }
  });

});
