import { combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist';
import storage  from 'redux-persist/es/storage';
import * as types from './../actions/actionType';

let initialState = {
  categ : null,
  posts : null,
  comments : null
}

function loadData(state = initialState, action){
  switch (action.type) {
    case types.LOAD_APP_DATA:
      return Object.assign({}, state, action.data.contents);
    default:
      return state;

  }
}

/*function handlePosts(state, action){
  switch (action.type) {
    case types.ADD_POST:
      return Object.assign({}, state, action.data);
      break;
    default:
      return state;

  }
}
function handleComment(state, action){
  switch (action.type) {
    case types.ADD_COMMENT:
      return Object.assign({}, state, action.contents);
      break;
    default:
      return state;

  }
}*/

const config = {
  key : 'root',
  storage,
}

export default persistCombineReducers(config, {loadData});
