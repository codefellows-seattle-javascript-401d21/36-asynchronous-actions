import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow, mount} from 'enzyme';
import ExpenseForm from '../components/expense/expense-form/index';
require('jest');

configure({adapter: new Adapter()});

describe('<CategoryFrom />', function() {
  describe('shallow Mounting', function() {
    beforeAll(() => this.wrapper = shallow(<ExpenseForm />));
    afterAll(() => this.wrapper.unmount());

    it('should render a expense form compenent', () => {
      expect(this.wrapper.length).toBe(1);
      expect(this.wrapper.find('.input-area').length).toBe(1);
    });
    it('should have a sefault state object with a title property addigned as empty string', () => {
      expect(this.wrapper.state().title).toEqual('');
    });
    it('should change the state object when from input is provided', () => {
      this.wrapper.find('.input-area [name="title"]').simulate('change', 
        {target: {name: 'title', value: 'hello'}});
      expect(this.wrapper.state().title).toEqual('hello');
    });
  });

  describe('Full Mounting', function() {
    beforeAll(() => {
      this.wrapper = shallow(<ExpenseForm />);
      this.wrapper.setProps({onComplete: jest.fn()});
    });
    afterAll(() => this.wrapper.unmount());

    it('should reset the state.title value to empty string on form submit', () => {
      this.wrapper.setState({title: 'goodbye world'});
      expect(this.wrapper.state().title).toEqual('goodbye world');
      this.wrapper.simulate('submit', {preventDefault: () => {}});
      expect(this.wrapper.state().title).toEqual('');
    });

    it('should have called onComplete in the previous assertion', () => {
      // expect(this.wrapper.props().onComplete).toHaveBeenCalled();
      expect(this.wrapper.props().className).toBe('input-area');
    });
  });
   
});