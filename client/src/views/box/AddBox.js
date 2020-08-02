import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchCountries } from '../../store/actions/countryActions'
import { addBox } from '../../store/actions/boxActions'

class AddBox extends Component {
  state = {
    destination: 1,
    color: '255,255,255',
    hex: '#ffffff',
    nameReceiver: '',
    weight: '',
    nameError: '',
    weightError: '',
    colorError: ''
  }

  componentDidMount () {
    // fetch
    this.props.fetchCountries()
  }

  componentDidUpdate(prevProps) {
    if (this.props.boxData.success !== prevProps.boxData.success) {
        console.log('component updated')
        this.setState({
            destination: 1,
            color: '255,255,255',
            hex: '#ffffff',
            nameReceiver: '',
            weight: ''
        })
      }
  }

  handleChange = (event) => {
    const nam = event.target.name
    const val = event.target.value
    this.setState({ [nam]: val })
    this.validateInput(nam, val)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBox(this.state)
  }

  handleColorChange = (event) => {
    const color = event.target.value
    console.log(color)
    const r = parseInt(color.substr(1, 2), 16)
    const g = parseInt(color.substr(3, 2), 16)
    const b = parseInt(color.substr(5, 2), 16)
    console.log(`${r},${g},${b}`)

    this.setState({
        colorError: (b > r && b > g) ? 'You cannot choose any shade of blue' : '',
        hex: (b > r && b > g) ? '#ffffff' : color,
        color: (b > r && b > g) ? '255,255,255' : `${r},${g},${b}`
    })
  }

  validateInput = (name, value) => {
    switch (name) {
      case 'nameReceiver':
        this.setState({
          nameError: (value.length < 1) ? 'Name cannot be empty' : ''
        })
        break;
      case 'weight':
        this.setState({
          weightError: (value < 1 || value.length < 1) ? 'Weight cannot be negative, null, or empty' : '',
          weight: (value < 0) && '0'
        })
        break;
      default:
        break;
    }
  }

  getCountryList() {
    const data = this.props.countryData
    let list
    if (data.destination || []) {
      list = data.destination.map(item => {
        return (
          <option key={item.id} value={item.id}>{item.name}</option>
        )
      })
    }
    return list
  }

  render () {
    const list = this.getCountryList()

    return (
      <>
        <div className='addbox'>
          <h1>Add new Box</h1>
          <p>Fill in the form and click <code>Save</code></p>
        </div>

        <div className='info'>
          {this.props.boxData.pending && <p className='loading'>Sending...</p>}
          {this.props.boxData.success && <p className='success'>Success!</p>}
          {this.props.boxData.error && <p className='error'>Something went terribly wrong here :(</p>}
        </div>

        <form className='add-box-form' onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input name='nameReceiver' type='text'
          onChange={this.handleChange} value={this.state.nameReceiver}
          required />
          <p className='input-err'>{this.state.nameError}</p>

          <label>Weight</label>
          <input name='weight' type='number' min='0' step='0.01'
          onChange={this.handleChange} value={this.state.weight}
          required />
          <p className='input-err'>{this.state.weightError}</p>

          <label>Box colour</label>
          <div className='color-picker'>
            <label htmlFor='color'>- click to pick the colour -</label>
            <input
              name='color' id='color' type='color' value={this.state.hex}
              onChange={this.handleColorChange} required
            />
          </div>
          <p className='input-err'>{this.state.colorError}</p>

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
  boxData: state.boxReducer,
  countryData: state.countryReducer
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCountries: fetchCountries,
  addBox: addBox
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBox)
