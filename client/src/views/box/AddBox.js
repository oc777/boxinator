import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCountries } from '../../store/actions/countryActions'
import { addBox } from '../../store/actions/boxActions'

class AddBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: '1',
            color: '222,222,222'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val}, () => {
            console.log(nam + ' : ' + val)
        })
    }

    handleSubmit(event) {
        console.log('Submitted: ')
        console.log(JSON.stringify(this.state));
        event.preventDefault();
        this.props.addBox(this.state);
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
    
                <form className="add-box-form" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                        <input name="nameReceiver" type="text" onChange={this.handleChange} required />
                    
                    <label>Weight</label>
                        <input name="weight" type="number" min="0" step="0.01" onChange={this.handleChange} required />
                    
                    <label>Box colour</label>
                        <input name="color" type="text" value={this.state.color} required />
                    
                    <label>Country</label>
                        <select name="destination" value={this.state.country} onChange={this.handleChange}>
                            {list}
                        </select>
                    
                    <input type="submit" value="Save" />
                </form>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    data: state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCountries: fetchCountries,
    addBox: addBox
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBox);