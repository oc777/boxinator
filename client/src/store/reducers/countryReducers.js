// Country Reducers

const initialState = {
  pending: false,
  destination: [],
  error: null
}

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COUNTRIES_PENDING':
      return {
        ...state,
        pending: true
      }
    case 'FETCH_COUNTRIES_SUCCESS':
      return {
        ...state,
        pending: false,
        destination: action.destination
      }
    case 'FETCH_COUNTRIES_ERROR':
      return {
        ...state,
        pending: false,
        error: action.errorMsg
      }
    default:
      return state
  }
}

export default countryReducer
