import axios from 'axios';

axios.defaults.baseURL = 'http://5af1eee530f9490014ead8c4.mockapi.io';

export async function getItems() {
  const response = await axios.get('/items');
  return response;
}
