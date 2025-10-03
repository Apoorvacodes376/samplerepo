document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');

  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      alert(`Searching for events related to: ${query}`);
      // In a real application, you would handle search logic here,
      // such as making an API call and displaying results.
    } else {
      alert('Please enter a search term.');
    }
  });
});
