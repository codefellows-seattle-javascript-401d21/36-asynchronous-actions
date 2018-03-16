import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../../lib/store';
import Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';
import Dashboard from '../../components/dashboard/index';
import App from '../../components/app/index';

require('jest');

configure({adapter: new Adapter()});


describe('<Dashboard />', function(){

  beforeAll(() => {
    this.wrapper = mount(<Provider store={createStore()}><Dashboard /></Provider>);
    this.wrapper.setProps({categories: [{id: '1', name: 'test', budget: 100}]});
  });
  afterAll(() => this.wrapper.unmount());

  test('should render a CategoryForm component', () => {
    expect(this.wrapper.find('CategoryForm').length).toBe(1);
  });

  test('should have an access to state in store', () => {
    expect(this.wrapper.props().categories[0]).toEqual({id: '1', name: 'test', budget: 100});
  });

});

