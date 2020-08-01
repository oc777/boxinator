// Dispatch Reducers

const initialState = {
  pending: false,
  dispatch: [],
  error: null
}

const dispatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DISPATCH_PENDING':
      return {
        ...state,
        pending: true
      }
    case 'FETCH_DISPATCH_SUCCESS':
      return {
        ...state,
        pending: false,
        dispatch: action.dispatch
      }
    case 'FETCH_DISPATCH_ERROR':
      return {
        ...state,
        pending: false,
        error: action.errorMsg
      }
    default:
      return state
  }
}

export default dispatchReducer
