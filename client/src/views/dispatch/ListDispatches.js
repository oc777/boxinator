import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { fetchDispatch } from '../../store/actions/dispatchActions'

class ListDispatches extends Component {

    componentDidMount() {
        // fetch
        this.props.fetchData();
    }
    
    render() {
        const data = this.props.data.dispatchReducer;

        let pending, error, table;
        let totalWeight = 0;
        let totalCost = 0;
    
        if (data.pending) pending = "Loading...";
        if (data.error) error = "Something went terribly wrong here :(";
        if (data.dispatch || []) {
            table = data.dispatch.map(item => {
                totalWeight += item.weight;
                totalCost += item.shippingCost;

                const style = {
                    backgroundColor: 'rgb(' + item.color+ ')',
                    minWidth: '90px'
                };
                return (
                    <tr>
                        <td>{item.nameReceiver}</td>
                        <td>{item.weight} kilograms</td>
                        <td style={style}></td>
                        <td>{item.shippingCost} SEK</td>
                    </tr>
                );
            })
            
        }
        console.log(table)

        return (
            <React.Fragment>
                <div className='listboxes'>
                    <h1>List Dispatches</h1>
                    <p>Here be dispatches... or dragons... or tables...</p>
                    
                </div>
                <p className='pending'>{pending}</p>
                <p className='error'>{error}</p>
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
                            <td></td>
                            <td>{totalCost.toFixed(2)} SEK</td>
                        </tr>
                    </tfoot>
                    
                </table>
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