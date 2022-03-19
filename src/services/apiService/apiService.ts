import axios, { AxiosInstance } from 'axios';

const createAxiosInstance = (url: string): AxiosInstance =>
  axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    url,
    params: {
      token: process.env.REACT_APP_API_KEY,
    },
    // headers: { 'X-Finnhub-Token': process.env.REACT_APP_API_KEY as string },
  });

const get = async <T>(url: string): Promise<T> => {
  const instance = createAxiosInstance(url);
  const result = await instance.get<T>(url);
  if (result.status !== 200) {
    throw new Error(
      `Call to ${url} failed with status ${result.status} and test ${result.statusText}`
    );
  }
  return result.data;
};

export default get;
