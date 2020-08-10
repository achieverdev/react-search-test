import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Search from './Search';
import SearchInput from '../../components/search/SearchInput';
import UserList from '../../components/user/UserList';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

describe('Search module case--->', () => {
  it('Search run without crashing', () => {
    const userStore = mockStore({});
    const component = shallow(<Provider store={userStore}><Search /></Provider>, {store: userStore});
    expect(component.find(Search)).toBeDefined();
  });

  it('SearchInput run without crashing', () => {
    const userStore = mockStore({});
    const component = shallow(<Provider store={userStore}><Search /></Provider>, {store: userStore});
    expect(component.find(SearchInput)).toBeDefined();
  });

  it('UserList run without crashing', () => {
    const userStore = mockStore({});
    const component = shallow(<Provider store={userStore}><UserList /></Provider>, {store: userStore});
    expect(component.find(UserList)).toBeDefined();
  });
  
});
