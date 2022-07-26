import { apiKey, apiUrl } from './settings';

const fromApiResponseToGifs = (res) => {
  const { data = [] } = res;
        const gifs = data.map(image => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium

          return {title, id, url}
        });
        return gifs
};

export default function getGif({ keyword = 'panda', limit = 10, page = 0, rating = 'g' } = {}) {
    const apiURL = `${apiUrl}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`;
    return fetch(apiURL)
      .then(res => res.json())
      .then(fromApiResponseToGifs)
};
