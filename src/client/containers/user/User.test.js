import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import User from './User';
import UserForm from '../../components/user/UserForm';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
describe('User module case--->', () => {
  it('User run without crashing', () => {
    const userStore = mockStore({user:{user_data:[{id:"d" , title:"a", body:"b"}]}});
    const component = shallow(<Provider store={userStore}><User /></Provider>);
    expect(component.find(User)).toBeDefined();
  });

  it('UserForm run without crashing', () => {
    const userStore = mockStore({user:{user_data:[{id:"d" , title:"a", body:"b"}]}});
    const component = shallow(<Provider store={userStore}><User /></Provider>);
    expect(component.find(UserForm)).toBeDefined();
  });
});