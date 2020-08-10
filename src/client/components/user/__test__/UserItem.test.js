import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import UserItem from '../UserItem';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

describe('UserItem module case--->', () => {
  it('UserItem run without crashing', () => {
    const userStore = mockStore({});
    const component = shallow(<Provider store={userStore}><UserItem /></Provider>, {store: userStore});
    expect(component.find(UserItem)).toBeDefined();
  });
});