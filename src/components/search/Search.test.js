import * as React from 'react';
import { shallow, mount, configure  } from 'enzyme';
import Search from './Search';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('Search Test', () => {
    
  it('Renders as designed', () => {
    const wrapper = shallow(<Search onSearch={() => {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Calls onSearch with criteria entered', () => {
    const handleSearch = jest.fn();
    const wrapper = mount(<Search onSearch={handleSearch}/>);

    const search = 'Skyline';

    wrapper.find('input').simulate('change', {
      target: { value: search }
    });
    wrapper.find('button').simulate('submit');

    const calls = handleSearch.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual({ search });
  });
});