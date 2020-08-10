import '@testing-library/jest-dom/extend-expect';
import MockData from './client/config/mocks/MockData';

jest.spyOn(global, 'fetch').mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve(JSON.parse(MockData))
  })
);

beforeEach(() => {
  global.fetch.mockClear();
});