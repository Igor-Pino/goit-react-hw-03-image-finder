function fetchPictures(request, page, key) {
  return fetch(`https://pixabay.com/api/?q=${request}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12
    `).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Error, no such querry ${request}`));
  });
}

const api = { fetchPictures };

export default api;
