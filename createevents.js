document.addEventListener('DOMContentLoaded', () => {
  // Master list of all events
  const allEvents = [
    { id: 101, title: 'Rock the Summer Fest', date: 'Sat, Jul 20', category: 'music', location: 'City Park', image: 'Music Fest' },
    { id: 102, title: 'Startup Pitch Battle 2025', date: 'Fri, Sep 13', category: 'business', location: 'Innovation Center', image: 'Business Pitch' },
    { id: 103, title: 'Taco Tuesday Cook-off', date: 'Tue, Oct 1', category: 'food', location: 'Local Kitchen', image: 'Taco Cook' },
    { id: 104, title: 'Indie Band Showcase', date: 'Fri, Aug 9', category: 'music', location: 'The Basement Club', image: 'Indie Band' },
    { id: 105, title: 'Digital Marketing Workshop', date: 'Wed, Oct 23', category: 'business', location: 'Online Webinar', image: 'Marketing Workshop' },
    { id: 106, title: 'Wine Tasting Masterclass', date: 'Sat, Nov 9', category: 'food', location: 'Vineyard Estates', image: 'Wine Tasting' },
    { id: 107, title: 'Jazz Night Live', date: 'Sat, Dec 7', category: 'music', location: 'The Blue Note', image: 'Jazz' },
    { id: 108, title: 'Leadership Summit', date: 'Mon, Sep 30', category: 'business', location: 'Convention Hall', image: 'Leadership' },
  ];

  /**
   * Creates the HTML structure for a single event card.
   * @param {object} event - The event data object.
   * @returns {string} The HTML string for the card.
   */
  function createEventCardHTML(event) {
    // Use event.image for the placeholder text to differentiate images
    const placeholderText = event.image.replace(/\s/g, '+');
    return `
            <div class="event-card" data-category="${event.category}">
                <img src="https://via.placeholder.com/300?text=${placeholderText}" alt="${event.title}">
                <div class="event-info">
                    <p class="event-date">${event.date}</p>
                    <h3>${event.title}</h3>
                    <p>${event.location}</p>
                </div>
            </div>
        `;
  }

  /**
   * Filters and renders events for the specified category.
   * This function is called from the <script> tag within each HTML file.
   * @param {string} category - The category to display ('music', 'business', or 'food').
   */
  window.renderCategoryEvents = function(category) {
    const eventsGrid = document.getElementById('eventsGrid');

    const filteredEvents = allEvents.filter(event => event.category === category);

    if (filteredEvents.length === 0) {
      eventsGrid.innerHTML = `<p style="padding: 20px; text-align: center; font-size: 1.2rem;">
                Sorry, no ${category} events are currently listed. Check back soon!
            </p>`;
    } else {
      eventsGrid.innerHTML = filteredEvents.map(createEventCardHTML).join('');
    }
  };
});
