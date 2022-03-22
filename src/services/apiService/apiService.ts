import axios, { AxiosInstance } from 'axios';

const createAxiosInstance = (url: string): AxiosInstance =>
  axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    url,
    params: {
      token: process.env.REACT_APP_API_KEY,
    },
  });

export const get = async <T>(url: string): Promise<T> => {
  const instance = createAxiosInstance(url);
  const result = await instance.get<T>(url);
  if (result.status !== 200) {
    throw new Error(
      `Call to ${url} failed with status ${result.status} and test ${result.statusText}`
    );
  }
  return result.data;
};

export const getCandles = async (symbol: string, from: number, to: number) => {
  const response: StocksCandleResponse = await get(
    `/stock/candle?symbol=${symbol}&resolution=D&from=${from}&to=${to}`
  );
  return response;
};
