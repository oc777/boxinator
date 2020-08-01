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
  console.log(data)

  return (dispatch) => {
    dispatch(addBoxPending())
    console.log('post box')

    fetch(URL, {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
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
