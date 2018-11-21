import { createStore,applyMiddleware,compose } from 'redux';
import reducer from '../reducer/index';
import logger from 'redux-logger'

const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(logger)
  )
)

export default function configureStore(){
  return store
}