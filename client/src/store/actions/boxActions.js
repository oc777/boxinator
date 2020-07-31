// Box Actions

const URL = '/api/addbox';

export const addBoxPending = () => ({
    type: "ADD_BOX_PENDING"
})

export const addBoxSuccess = (dispatch) => ({
    type: "ADD_BOX_SUCCESS",
    dispatch: dispatch
})

export const addBoxError = (error) => ({
    type: "ADD_BOX_ERROR",
    errorMsg: error
})

// do POST here
export const addBox = () => {
    return (dispatch) => {
        dispatch(addBoxPending());
        console.log("post box");
        fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch(addBoxSuccess(data));
            })
            .catch(err => {
                dispatch(addBoxError(err));
            })
    }
}
