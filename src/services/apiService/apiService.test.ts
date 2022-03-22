import axios, { AxiosResponse } from 'axios';

import { get } from './apiService';

describe('API service tests', () => {
  it('returns data when http response 200', async () => {
    type MockData = {
      name: string;
    };

    const mockedAxios = jest.spyOn(axios, 'get');
    const mockedData: MockData = {
      name: 'Foo',
    };

    mockedAxios.mockReturnValue(
      new Promise<AxiosResponse<MockData>>((resolve) =>
        resolve({
          status: 200,
          data: mockedData,
          statusText: 'text',
          headers: {},
          config: {},
        })
      )
    );
    jest.spyOn(axios, 'create').mockReturnValue(axios);
    const result = await get<MockData>('http://url.com');

    expect(mockedData.name).toEqual(result.name);
  });
});
