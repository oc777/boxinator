import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


//import dispatchReducer from '../../store/reducers/dispatchReducers'
import { fetchDispatch } from '../../store/actions/dispatchActions'

class ListDispatches extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        // fetch
        this.props.fetchData();
    }
    
    render() {
        console.log(this.props.data)

        return (
            <React.Fragment>
                <div className='listboxes'>
                    <h1>List Dispatches</h1>
                    <p>Here be dispatches... or dragons... or tables...</p>
                </div>
                
            </React.Fragment>
        );
    }


}

const mapStateToProps = state => ({
    data: state
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData: fetchDispatch
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListDispatches);