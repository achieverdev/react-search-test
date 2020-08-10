import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SearchView from '../Search/Search';
import App from './App';
Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
describe('App module case--->', () => {
  it('App Renders without crashing', () => {
    const component = shallow(<App />);
    expect(component.find(App)).toBeDefined();
  });

  it('App run without crashing', () => {
    const userStore = mockStore({});
    const component = shallow(<Provider store={userStore}><SearchView /></Provider>, {store: userStore});
    expect(component.find(SearchView)).toBeDefined();
  });
});