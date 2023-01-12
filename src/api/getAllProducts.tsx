

import axios, {AxiosRequestConfig} from 'axios';

export const GetAllProducts = async () => {
  return new Promise((resolve, reject) => {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `https://teamsuit.co/reportSv/2/api/products/getAll.php`,
    };
    axios(config)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error.response);
      });
  });
};
