import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './../reducers';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

function configureStore(){
  const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));
  const persistor = persistStore(store);
  return {store, persistor}
}

export default configureStore;
