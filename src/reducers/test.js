export  const REQUEST_TEST  = Symbol('REQUEST_TEST')
export  const RECEIVE_TEST  = Symbol('RECEIVE_TEST')

const test = (state={},action) => {
  switch (action.type) {
    case REQUEST_TEST:
      return {
        ...state
      }
      break;
    case RECEIVE_TEST:
      return {
        ...state,
        data:action.data
      }
      break;
    default:
      return state
      break;
  }
}
export default test;