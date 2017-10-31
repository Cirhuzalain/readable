import * as types from './actionType';
import * as api from './../utils/api';
import configureStore from './../store/store';

const { store } = configureStore()

export function loadDataSuccess(data){
  return {type : types.LOAD_APP_DATA, data};
}

export function loadContents(){
  return function (dispatch){
    Promise.all([
      api.loadCategories(),
      api.loadPosts()
    ]).then((data) => {
      const [categories, postsInfos] = data;
      const commentInfos = postsInfos.map(post => api.loadComments(post.id))
      Promise.all(commentInfos)
      .then((data) => {
        const [commentsInfos] = data;
        const categ = categories.categories.map(cat => {
          return {
            ...cat,
            posts : postsInfos.filter(post => post.category === cat.name ).map(post => post.id )
          }
        })
        const posts = {}
        postsInfos.map(post => {
          posts[post.id] = {
            ...post,
            comments : commentsInfos.filter(comment => comment.parentId === post.id).map(comment => comment.id)
          }
        })
        const comments = {}
        commentsInfos.map(comment => {
          comments[comment.id] = {
            ...comment
          }
        })
        const readableData = {contents : {categ, posts, comments}}
        store.dispatch(loadDataSuccess(readableData));
      })
    }, (err) => {
      throw(err);
    })
  }
}
