export const READ = 'documents/READ'
export const READ_ALL = 'documents/READ_ALL'

const INITIAL_STATE = Immutable({
  data: {},
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
        }
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
  }
}
