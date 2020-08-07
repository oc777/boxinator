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

export const addBoxInitial = () => ({
  type: 'ADD_BOX_INIT'
})

// do POST here
export const addBox = (data) => {
  console.log('adding box')

  return (dispatch) => {
    dispatch(addBoxPending())

    return fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log('res')
        console.log(res.status)
        if (res.status === 201) {
          dispatch(addBoxSuccess())
          setTimeout(() => dispatch(addBoxInitial()), 10000)
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(addBoxError(err))
      })
  }
}
