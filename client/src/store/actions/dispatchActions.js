// Dispatch Actions

// const URL = 'http://localhost:5555/api/listBoxes';
const URL = '/api/listboxes';

export const fetchDispatchPending = () => ({
    type: "FETCH_DISPATCH_PENDING"
})

export const fetchDispatchSuccess = (dispatch) => ({
    type: "FETCH_DISPATCH_SUCCESS",
    dispatch: dispatch
})

export const fetchDispatchError = (error) => ({
    type: "FETCH_DISPATCH_ERROR",
    errorMsg: error
})

export const fetchDispatch = () => {
    return (dispatch) => {
        dispatch(fetchDispatchPending());
        console.log("fetch dispatch");
        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch(fetchDispatchSuccess(data));
            })
            .catch(err => {
                dispatch(fetchDispatchError(err));
            })
    }
}
