import URI from 'urijs'
import Immutable from 'seamless-immutable'

export const READ = 'documents/READ'
export const READ_ALL = 'documents/READ_ALL'

const API_KEY = 'Hp2f89PeWtMJLhAzRrqaMZNmNukuxzh6YyMCTbuk'
const API_URI = 'https://api.data.gov:443/regulations/v3/documents.json'

export const readAll = (query = {}) => {
  let uri = new URI(API_URI)
    .search({
      api_key: API_KEY,
      ...query,
    })
    .toString()

  uri = "https://api.data.gov:443/regulations/v3/documents.json?api_key=Hp2f89PeWtMJLhAzRrqaMZNmNukuxzh6YyMCTbuk"

  const promise = new Promise(async (resolve, reject) => {
    try {
      const headers = new Headers({
        'Content-Type': 'application/json',
      })

      const response = await fetch(
        uri,
        {
          headers,
          method: 'GET',
        },
      )

      const json = await response.json()
      return resolve(json)
    } catch (err) {
      console.log(err)
      return reject(err)
    }
  })

  return {
    type: READ_ALL,
    payload: promise,
  }
}

const INITIAL_STATE = Immutable({
  data: [],
  status: 'INITIAL',
})

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${READ}_PENDING`:
    case `${READ_ALL}_PENDING`:
      return state.merge({
        status: `${action.type}_PENDING`,
      })

    case `${READ}_REJECTED`:
    case `${READ_ALL}_REJECTED`:
      return state.merge({
        status: `${action.type}_REJECTED`,
      })

    case `${READ}_FULFILLED`:
      return state.merge(
        {
          data: {
            [action.payload.id]: action.payload,
          },
        },
        {
          deep: true,
        },
      )

    case `${READ_ALL}_FULFILLED`:
      return state.merge(
        {
          data: action.payload.documents,
        },
        {
          deep: true,
        },
      )

    default:
      return state
  }
}
