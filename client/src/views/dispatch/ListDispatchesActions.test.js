import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as dispatchActions from '../../store/actions/dispatchActions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('ListDispatches actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('should call proper action on box list fetch', () => {
    const store = mockStore({ })
  
    const dispatch = [
      { nameReceiver: "Bilbo", weight: 1.2, color: "#2a2a2a", shippingCost: 2.3 },
      { nameReceiver: "Frodo", weight: 0.45, color: "#2a2a2a", shippingCost: 8 }
    ]
    fetchMock.getOnce('/api/listboxes', dispatch )

    const expectedActions = [
      { type: 'FETCH_DISPATCH_PENDING' },
      { type: 'FETCH_DISPATCH_SUCCESS', dispatch: dispatch}
    ]

    return store.dispatch(dispatchActions.fetchDispatch()).then(() => {
      console.log(store.getActions())
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })

  })

})