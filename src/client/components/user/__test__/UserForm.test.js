import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import UserForm from '../UserForm';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
describe('UserForm module case--->', () => {
  it('UserForm run without crashing', () => {
    const userStore = mockStore({});
    const component = shallow(<Provider store={userStore}><UserForm /></Provider>, {store: userStore});
    expect(component.find(UserForm)).toBeDefined();
  });
});
