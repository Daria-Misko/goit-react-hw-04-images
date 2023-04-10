import axios from 'axios';

const KEY = '33738394-f05239cb600a9563394d46095';

const fetchApi = async (query, page) => {
  const apiConfig = `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(apiConfig);
  return response.data;
};

export default fetchApi;
