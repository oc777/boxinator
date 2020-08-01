import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchDispatch } from '../../store/actions/dispatchActions'

class ListDispatches extends Component {
  state = {
    pending: false,
    error: false
  }

  componentDidMount () {
    // fetch
    this.props.fetchData()
  }

  render () {
    const data = this.props.data.dispatchReducer

    let table
    let totalWeight = 0
    let totalCost = 0

    if (data.dispatch || []) {
      table = data.dispatch.map((item, index) => {
        totalWeight += item.weight
        totalCost += item.shippingCost

        const style = {
          backgroundColor: 'rgb(' + item.color + ')',
          minWidth: '90px'
        }
        return (
          <tr key={index}>
            <td>{item.nameReceiver}</td>
            <td>{item.weight} kilograms</td>
            <td style={style} />
            <td>{item.shippingCost.toFixed(2)} SEK</td>
          </tr>
        )
      })
    }

    return (
      <>
        <div className='list-boxes'>
          <h1>List Dispatches</h1>

          {!this.state.pending && <p className='info'>The list of boxes, including total weight and shipping cost</p>}
          {this.state.pending && <p className='loading'>Loading...</p>}
          {this.state.error && <p className='error'>Something went terribly wrong here :(</p>}

        </div>

        <table className='dispatch-table'>
          <thead>
            <tr>
              <th>Receiver</th>
              <th>Weight</th>
              <th>Box colour</th>
              <th>Shipping cost</th>
            </tr>
          </thead>
          <tbody>
            {table}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{totalWeight} kilograms</td>
              <td />
              <td>{totalCost.toFixed(2)} SEK</td>
            </tr>
          </tfoot>

        </table>

      </>
    )
  }
}

const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchData: fetchDispatch
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDispatches)
