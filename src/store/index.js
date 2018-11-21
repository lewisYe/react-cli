import { createStore,applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers/index';
import logger from 'redux-logger'
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(
      sagaMiddleware,
      logger
    )
  )
)

export default function configureStore(){
  sagaMiddleware.run(rootSaga)
  return store
}