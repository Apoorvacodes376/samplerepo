document.addEventListener('DOMContentLoaded', () => {
  const eventsGrid = document.getElementById('eventsGrid');
  const applyFiltersBtn = document.getElementById('applyFiltersBtn');

  // Sample Event Data (The data you would fetch from a server)
  const allEvents = [
    { id: 1, title: 'The Annual Tech Summit', date: 'Sat, Oct 19', category: 'tech', location: 'San Francisco' },
    { id: 2, title: 'Summer Jam Music Festival', date: 'Fri, Aug 2', category: 'music', location: 'Los Angeles' },
    { id: 3, title: 'Gourmet Italian Cooking Class', date: 'Sun, Nov 3', category: 'food', location: 'New York' },
    { id: 4, title: 'Modern Art Exhibition', date: 'Sat, Sep 28', category: 'business', location: 'New York' },
    { id: 5, title: 'City Charity Marathon', date: 'Sun, Oct 27', category: 'tech', location: 'San Francisco' },
    { id: 6, title: 'Indie Film Night', date: 'Fri, Nov 15', category: 'music', location: 'Austin' },
    // Add more events here...
  ];

  /**
   * Creates the HTML structure for a single event card.
   * @param {object} event - The event data object.
   * @returns {string} The HTML string for the card.
   */
  function createEventCardHTML(event) {
    return `
            <div class="event-card" data-category="${event.category}">
                <img src="https://via.placeholder.com/300?text=${event.title.replace(/\s/g, '+')}" alt="${event.title}">
                <div class="event-info">
                    <p class="event-date">${event.date}</p>
                    <h3>${event.title}</h3>
                    <p>${event.location}</p>
                </div>
            </div>
        `;
  }

  /**
   * Renders a list of events to the grid.
   * @param {array} events - The array of events to display.
   */
  function renderEvents(events) {
    eventsGrid.innerHTML = events.map(createEventCardHTML).join('');
  }

  // Initial load: Display all events
  renderEvents(allEvents);

  // Filter Logic
  applyFiltersBtn.addEventListener('click', () => {
    const checkedCategories = Array.from(document.querySelectorAll('.filter-group input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.value);

    // Simple filtering based on category
    let filteredEvents = allEvents;

    if (checkedCategories.length > 0) {
      filteredEvents = allEvents.filter(event =>
        checkedCategories.includes(event.category)
      );
    }

    // Note: Date filtering would require more complex date comparison logic

    if (filteredEvents.length === 0) {
      eventsGrid.innerHTML = '<p style="padding: 20px;">No events match your current filters. Try adjusting your selection!</p>';
    } else {
      renderEvents(filteredEvents);
    }
  });

  // You could add event listeners to the cards here to handle clicks:
  eventsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.event-card');
    if (card) {
      alert(`You clicked on event: ${card.querySelector('h3').textContent}`);
      // In a real app, you would navigate to the event's detail page
    }
  });
});
