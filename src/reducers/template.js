export const REQUEST_TEMPLATE = Symbol('REQUEST_TEMPLATE')
export const RECEIVE_TEMPLATE = Symbol('RECEIVE_TEMPLATE')

const template = (state = {
  data: []
}, action) => {
  switch (action.type) {
    case REQUEST_TEMPLATE:
      return {
        ...state
      }
      break;
    case RECEIVE_TEMPLATE:
      return {
        ...state,
        data: action.data
      }
      break;
    default:
      return state
      break;
  }
}
export default template;