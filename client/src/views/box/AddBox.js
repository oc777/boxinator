import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchCountries } from '../../store/actions/countryActions'
import { addBox } from '../../store/actions/boxActions'

class AddBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      destination: '1',
      color: '255,255,255',
      hex: '#ffffff'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleChange (event) {
    const nam = event.target.name
    const val = event.target.value
    this.setState({ [nam]: val })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.addBox(this.state)
  }

  componentDidMount () {
    // fetch
    this.props.fetchCountries()
  }

  handleColorChange (event) {
    const color = event.target.value
    const r = parseInt(color.substr(1, 2), 16)
    const g = parseInt(color.substr(3, 2), 16)
    const b = parseInt(color.substr(5, 2), 16)

    this.setState({
      hex: color,
      color: `${r},${g},${b}`
    })
  }

  render () {
    const data = this.props.data.countryReducer

    let list
    if (data.destination || []) {
      list = data.destination.map(item => {
        return (
          <option key={item.id} value={item.id}>{item.name}</option>
        )
      })
    }

    return (
      <>
        <div className='addbox'>
          <h1>Add new Box</h1>
          <p>Here be boxes... or dragons... or forms...</p>
        </div>

        <form className='add-box-form' onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input name='nameReceiver' type='text' onChange={this.handleChange} required />

          <label>Weight</label>
          <input name='weight' type='number' min='0' step='0.01' onChange={this.handleChange} required />

          <label>Box colour</label>
          <div className='color-picker'>
            <label htmlFor='color'>- click to pick the colour -</label>
            <input
              name='color' id='color' type='color' value={this.state.hex}
              onChange={this.handleColorChange} required
            />
          </div>

          <label>Country</label>
          <select name='destination' value={this.state.country} onChange={this.handleChange}>
            {list}
          </select>

          <input type='submit' value='Save' />
        </form>
      </>
    )
  }
}

const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCountries: fetchCountries,
  addBox: addBox
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBox)
