document
  .getElementById('searchForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняє стандартне відправлення форми

    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput.value.trim();

    if (searchQuery === '') {
      alert('Please enter a search query.');
      return; // Зупиняє подальше виконання, якщо поле порожнє
    }
    
  });
