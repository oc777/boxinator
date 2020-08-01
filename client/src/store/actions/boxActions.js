// Box Actions

const URL = '/api/addbox'

export const addBoxPending = () => ({
  type: 'ADD_BOX_PENDING'
})

export const addBoxSuccess = () => ({
  type: 'ADD_BOX_SUCCESS'
})

export const addBoxError = (error) => ({
  type: 'ADD_BOX_ERROR',
  errorMsg: error
})

// do POST here
export const addBox = (data) => {
  console.log('adding box')

  return (dispatch) => {
    dispatch(addBoxPending())

    fetch(URL, {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json()
      })
      .catch(err => {
        dispatch(addBoxError(err))
      })
  }
}
