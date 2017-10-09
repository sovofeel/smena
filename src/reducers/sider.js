import {CHANGE_COLLAPSE} from 'actions/siderActions'

export default (state = {collapsed: false}, action) => {
  switch (action.type) {
    case CHANGE_COLLAPSE:
      return {
        ...state,
        collapsed: action.payload
      }
    default:
      return state
  }
}
