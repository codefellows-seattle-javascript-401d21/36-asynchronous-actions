import React from 'react';
import Enzyme from 'enzyme';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');


Enzyme.configure({adapter: new Adapter()});
import ExpenseForm from '../../components/expense-form/index';


describe('ExpenseForm component', () => {

  let wrapper;
  beforeAll(() => {
    wrapper = mount(<ExpenseForm />);
    wrapper.setProps({onComplete: jest.fn()});
  });
  afterAll(() => wrapper.unmount());

  test('should reset the state.name value to empty string on form submit', () => {
    wrapper.setState({name: 'Submit'});
    expect(wrapper.state('name')).toEqual('Submit');
    wrapper.simulate('submit', {preventDefault: () => {}});
    expect(wrapper.state().name).toEqual('');
  });

  test('should have called onComplete in the previous assertion', () => {
    expect(wrapper.props().onComplete).toHaveBeenCalled();
  });

});
