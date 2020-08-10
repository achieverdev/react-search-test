
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import SearchInput from '../SearchInput';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
describe('SearchInput module case--->', () => {
  it('SearchInput run without crashing', () => {
    const userStore = mockStore({});
    const component = shallow(<Provider store={userStore}><SearchInput /></Provider>, {store: userStore});
    expect(component.find(SearchInput)).toBeDefined();
  });
});
