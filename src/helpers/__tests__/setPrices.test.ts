import { setPricesObject } from '../setPrices';

const props: { symbol: string; response: StocksCandleResponse } = {
  symbol: 'AEFC',
  response: {
    c: [123.2829, 123.83767304999999, 124.394942578725],
    h: [123.492, 124.047714, 124.605928713],
    l: [122.631, 123.1828395, 123.73716227774999],
    o: [123, 123.5535, 124.10949074999999],
    s: 'ok',
    t: [1645488000, 1645574400, 1645660800],
    v: [63, 81, 94],
  },
};

const expectedObj = {
  open: [
    { date: '22 Feb', AEFC: '123.00' },
    { date: '23 Feb', AEFC: '123.55' },
    { date: '24 Feb', AEFC: '124.11' },
  ],
  close: [
    { date: '22 Feb', AEFC: '123.28' },
    { date: '23 Feb', AEFC: '123.84' },
    { date: '24 Feb', AEFC: '124.39' },
  ],
  high: [
    { date: '22 Feb', AEFC: '123.49' },
    { date: '23 Feb', AEFC: '124.05' },
    { date: '24 Feb', AEFC: '124.61' },
  ],
  low: [
    { date: '22 Feb', AEFC: '122.63' },
    { date: '23 Feb', AEFC: '123.18' },
    { date: '24 Feb', AEFC: '123.74' },
  ],
};

describe('setPricesObj helper', () => {
  it('returns the correct object', () => {
    const newObj = setPricesObject(props.symbol, props.response);

    expect(newObj).toEqual(expectedObj);
  });
});
