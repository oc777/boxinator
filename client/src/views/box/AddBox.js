import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCountries } from '../../store/actions/countryActions'

class AddBox extends Component {
    constructor(props) {
        super(props);
        this.state = {country: '1'};
    
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCountryChange(event) {
        this.setState({country: event.target.value}, () => {
            console.log('new state ' + this.state.country)
        })
    }

    handleSubmit(event) {
        console.log('Submitted:');
        event.preventDefault();
    }

    componentDidMount() {
        // fetch
        this.props.fetchCountries();
        console.log("Mounted")
        console.log(this.state)
    }



    render() {
        const data = this.props.data.countryReducer;
        console.log(data)

        let list;
        if (data.destination || []) {
            list = data.destination.map(item => {
                return (
                    <option value={item.id}>{item.name}</option>
                )
            });
        }

        return (
            <React.Fragment>
                <div className='addbox'>
                    <h1>Add new Box</h1>
                    <p>Here be boxes... or dragons... or forms...</p>
                </div>
    
                <form onSubmit={this.handleSubmit}>
                <label>
                    Country
                    <select value={this.state.country} onChange={this.handleDestinationChange}>
                        {list}
                    </select>
                </label>
                <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    data: state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCountries: fetchCountries
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBox);