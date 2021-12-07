import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'e844306b9emsh0fb0af59f01aafbp1d8a15jsn041d8fb5cc95',
    },
  });

  return data;
};
