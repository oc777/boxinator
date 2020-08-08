import { ListDispatches } from './ListDispatches'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

const defaultProps = {
  data: {
    dispatchReducer: {
      dispatch:[
        { nameReceiver: "Bilbo", weight: 1.2, color: "#2a2a2a", shippingCost: 2.3 },
        { nameReceiver: "Frodo", weight: 0.45, color: "#2a2a2a", shippingCost: 8 }
      ],
      pending: false,
      error: null
    }
  },
  fetchData: jest.fn()
}

describe('ListDispatches snapshot', () => {
  it('renders without crashing with required props', () => {
    const wrapper = renderer.create(<ListDispatches {...defaultProps} />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})

describe('ListDispatches default state', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ListDispatches {...defaultProps} />)
  })

  it('should render a table', () => {
    expect(wrapper.find('table').length).toBe(1)
    expect(wrapper.find('th').length).toBe(4)
  })

  it('should fill a table cell with color', () => {
    const row = wrapper.find('tbody').children().at(0)
    const color = row.children().at(2)
    //console.log(color.debug())
    expect(color.prop('style').backgroundColor).toMatch(/2a2a2a/)
  })

  it('should calculate total weight and cost', () => {
    const row = wrapper.find('tfoot').children().at(0)
    const weight = row.children().at(1)
    const cost = row.children().at(3)

    const totalWeight = 
      defaultProps.data.dispatchReducer.dispatch[0].weight + 
      defaultProps.data.dispatchReducer.dispatch[1].weight
    const totalCost = 
      defaultProps.data.dispatchReducer.dispatch[0].shippingCost + 
      defaultProps.data.dispatchReducer.dispatch[1].shippingCost

    expect(weight.text()).toContain(totalWeight)
    expect(cost.text()).toContain(totalCost)
  })
})
