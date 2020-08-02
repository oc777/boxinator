// Box Reducers

const initialState = {
  pending: false,
  error: null,
  success: false
}

const boxReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOX_PENDING':
      return {
        ...state,
        pending: true
      }
    case 'ADD_BOX_SUCCESS':
      return {
        ...state,
        pending: false,
        success: true
      }
    case 'ADD_BOX_ERROR':
      return {
        ...state,
        pending: false,
        error: action.errorMsg
      }
    default:
      return state
  }
}

export default boxReducer
