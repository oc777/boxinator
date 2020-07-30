// Dispatch Service

import { actions } from '../store/actions/dispatchActions';
const uri = 'http://server/listBoxes';

function fetchDispatch() {
    return dispatch => {
        dispatch(actions.fetchDispatchPending());
        fetch(uri)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchDispatchSuccess(res.products));
                return res.products;
            })
            .catch(error => {
                dispatch(fetchDispatchError(error));
            })
    }
}

export default fetchDispatch;