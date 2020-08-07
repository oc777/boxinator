import { AddBox } from './AddBox'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

const defaultProps = {
  countryData: {
    destination:[
      {id: 1,name: "Sweden",multiplier: 1.3},
      {id: 2,name: "China",multiplier: 4}
    ]
  },
  boxData: {
    pending: false,
    errors: null,
    success: false
  },
  fetchCountries: jest.fn(),
  addBox: jest.fn()
}

describe('AddBox snapshot', () => {
  it('renders without crashing with required props', () => {
    const wrapper = renderer.create(<AddBox {...defaultProps} />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

describe('AddBox default state', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<AddBox {...defaultProps} />)
    // console.log(wrapper.debug())
    // console.log(wrapper.find('select').debug())
  })

  it('should render the form', () => {
    expect(wrapper.find('form').length).toBe(1)
    expect(wrapper.find('input').length).toBe(4)
  })

  it('should set correct value for color', () => {
    expect(wrapper.find('input[type="color"]').props().value).toBe('#ffffff')
  })

  it('should render select with correct options', () => {
    expect(wrapper.find('select').children().length).toBe(2)
  })
})

describe('AddBox handleChange', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<AddBox {...defaultProps} />)
  })

  it('should update state on change', () => {
    const name = wrapper.find('input[name="nameReceiver"]')
    const weight = wrapper.find('input[name="weight"]')
    const color = wrapper.find('input[name="color"]')
    const destination = wrapper.find('select[name="destination"]')

    name.simulate('change', { target: { name: 'nameReceiver', value: 'bob' } })
    expect(wrapper.state().nameReceiver).toMatch(/bob/)

    weight.simulate('change', { target: { name: 'weight', value: 1.2 } })
    expect(wrapper.state().weight).toBe(1.2)

    color.simulate('change', { target: { value: '#2a2a2a' }} )
    expect(wrapper.state().hex).toMatch(/2a2a2a/)

    destination.simulate('change', { target: { name: 'destination', value: 2 } })
    expect(wrapper.state().destination).toBe(2)
  })
})

describe('AddBox form validation', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<AddBox {...defaultProps} />)
  })

  it('should assert error when input fields are empty', () => {
    const name = wrapper.find('input[name="nameReceiver"]')
    const weight = wrapper.find('input[name="weight"]')

    name.simulate('change', { target: { name: 'nameReceiver', value: '' } })
    expect(wrapper.state().nameError).toEqual('Fill in the name')
    weight.simulate('change', { target: { name: 'weight', value: '' } })
    expect(wrapper.state().weightError).toEqual('Weight must be over 0.1kg')
  })

  it('should assert error when color is blue', () => {
    const color = wrapper.find('input[name="color"]')

    color.simulate('change', { target: { value: '#03fce7' }})
    expect(wrapper.state().colorError).toEqual('All shades of blue are forbidden')
    
    color.simulate('change', { target: { value: '#3503fc' }})
    expect(wrapper.state().colorError).toEqual('All shades of blue are forbidden')
  })

  it('should validate when color is not blue', () => {
    const color = wrapper.find('input[name="color"]')

    color.simulate('change', { target: { value: '#03fc90' }})
    expect(wrapper.state().colorError).toEqual('')
    
    color.simulate('change', { target: { value: '#4503fc' }})
    expect(wrapper.state().colorError).toEqual('')
  })
})
