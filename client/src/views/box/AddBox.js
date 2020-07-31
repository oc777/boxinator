import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCountries } from '../../store/actions/countryActions'

class AddBox extends Component {
    componentDidMount() {
        // fetch
        this.props.fetchCountries();
    }

    render() {
        const data = this.props.data.countryReducer;
        console.log(data)
        return (
            <div className='addbox'>
                <h1>Add new Box</h1>
                <p>Here be boxes... or dragons... or forms...</p>
            </div>
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