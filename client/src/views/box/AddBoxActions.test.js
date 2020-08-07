import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as boxActions from '../../store/actions/boxActions'
import * as countryActions from '../../store/actions/countryActions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('AddBox actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('should call proper action on country list fetch', () => {
    const store = mockStore({ })
  
    const countries = [
      { id: 1, name: "Sweden", multiplier: 1.3 },
      { id: 2, name: "China", multiplier: 4 }
    ]
    fetchMock.getOnce('/api/listcountries', countries )

    const expectedActions = [
      { type: 'FETCH_COUNTRIES_PENDING' },
      { type: 'FETCH_COUNTRIES_SUCCESS', destination: countries}
    ]

    return store.dispatch(countryActions.fetchCountries()).then(() => {
      console.log(store.getActions())
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })

  })

  it('should call proper action on form submit', () => {
    const store = mockStore({ })

    const box = {
      nameReceiver: "bob",
      weight: 1.2,
      color: "#2a2a2a",
      destination: 1
    }
    fetchMock.postOnce('/api/addbox', 201, box)

    const expectedActions = [
      { type: 'ADD_BOX_PENDING' },
      { type: 'ADD_BOX_SUCCESS' }
    ]
    

    return store.dispatch(boxActions.addBox(box)).then(() => {
      console.log(store.getActions())
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })

  })

})