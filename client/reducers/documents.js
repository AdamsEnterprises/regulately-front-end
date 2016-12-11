import URI from 'urijs'
import Immutable from 'seamless-immutable'
import documents from 'mock/documents.json'

export const READ = 'documents/READ'
export const READ_ALL = 'documents/READ_ALL'

const API_URI = 'http://23.99.1.48/dockets?'
//const API_URI = 'http://localhost:5000/dockets?'

export const readAll = (query = {}) => {
  let uri = new URI(API_URI)
    .search({
      ...query,
    })
    .toString()

  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        uri,
        {
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
  data: documents,
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
          data: action.payload,
        },
        {
          deep: true,
        },
      )

    default:
      return state
  }
}
