const API_KEY = '44080316-241692617940885c4f90d7de4'; // Заміни на свій API-ключ

document
  .getElementById('searchForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняє стандартне відправлення форми

    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput.value.trim();

    if (searchQuery === '') {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query.',
      });
      return; // Зупиняє подальше виконання, якщо поле порожнє
    }

    // Виконуємо HTTP-запит з використанням fetch API
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
        searchQuery
      )}&image_type=photo&orientation=horizontal&safesearch=true`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Очищуємо попередні результати

        if (data.hits.length === 0) {
          iziToast.warning({
            title: 'No results',
            message:
              'Sorry, there are no images matching your search query. Please try again.',
          });
          return;
        }

        // Відображаємо результати
        data.hits.forEach(image => {
          const imgElement = document.createElement('img');
          imgElement.src = image.webformatURL;
          imgElement.alt = image.tags;
          resultsContainer.appendChild(imgElement);
        });
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: `There was a problem with the fetch operation: ${error.message}`,
        });
        console.error('There was a problem with the fetch operation:', error);
      });
  });
