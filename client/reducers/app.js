import Immutable from 'seamless-immutable'

export const SET_DRAWER = 'app/SET_DRAWER'
export const SET_DIALOG = 'app/SET_DIALOG'
export const TOGGLE_DIALOG = 'app/TOGGLE_DIALOG'

export const setDrawerOpen = isDrawerOpen => ({
  type: SET_DRAWER,
  payload: isDrawerOpen,
})

export const setDialogOpen = isDialogOpen => ({
  type: SET_DIALOG,
  payload: isDialogOpen,
})

const INITIAL_STATE = Immutable({
  isDrawerOpen: true,
  isDialogOpen: false,
  modal: {
    open: false,
  },
})

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_DRAWER:
      return state.merge({
        isDrawerOpen: action.payload,
      })

    case 'TOGGLE_DIALOG':
      return state.merge({
        modal: {
          open: !state.modal.open,
        },
      })

    default:
      return state
  }
}
