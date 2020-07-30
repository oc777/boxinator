// Dispatch Actions

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