// Country Actions

const URL = '/api/listcountries'

export const fetchCountriesPending = () => ({
  type: 'FETCH_COUNTRIES_PENDING'
})

export const fetchCountriesSuccess = (destination) => ({
  type: 'FETCH_COUNTRIES_SUCCESS',
  destination: destination
})

export const fetchCountriesError = (error) => ({
  type: 'FETCH_COUNTRIES_ERROR',
  errorMsg: error
})

export const fetchCountries = () => {
  return (dispatch) => {
    dispatch(fetchCountriesPending())
    console.log('fetch countries')
    return fetch(URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        dispatch(fetchCountriesSuccess(data))
      })
      .catch(err => {
        dispatch(fetchCountriesError(err))
      })
  }
}
