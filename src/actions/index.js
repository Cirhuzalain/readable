import * as types from './actionType'
import * as ReadableAPI from './../utils/api'

export function loadDataSuccess(data){
  return {type : types.LOAD_APP_DATA, data}
}

/* Post Actions */
export function addPost(post){
  return {type : types.ADD_POST, post}
}

export function editPost(post){
  return {type : types.EDIT_POST, post}
}

export function deletePost(post){
  return {type : types.DELETE_POST, post}
}

export function downVotePost(post){
  return {type : types.DOWN_VOTE_POST, post}
}

export function upVotePost(post){
  return {type : types.UP_VOTE_POST, post}
}

export function orderScorePost(){
  return {type : types.ORDER_SCORE_POST}
}

export function orderDatePost(){
  return {type : types.ORDER_DATE_POST}
}


/* Comment Actions */
export function addComment(comment){
  return {type : types.ADD_COMMENT, comment}
}

export function editComment(comment){
  return {type : types.EDIT_COMMENT, comment}
}

export function deleteComment(comment){
  return {type : types.DELETE_COMMENT, comment}
}

export function downVoteComment(comment){
  return {type : types.DOWN_VOTE_COMMENT, comment}
}

export function upVoteComment(comment){
  return {type : types.UP_VOTE_COMMENT, comment}
}

export function loadContents(){
  return function (dispatch){
    Promise.all([
      ReadableAPI.loadCategories(),
      ReadableAPI.loadPosts()
    ]).then((data) => {
      const [categories, postsInfos] = data;
      const commentInfos = postsInfos.map(post => ReadableAPI.loadComments(post.id))
      Promise.all(commentInfos)
      .then((data) => {
        const commentsInfos = [].concat(...data)
        const categ = categories.categories.map(cat => {
          return {
            ...cat
          }
        })
        const posts = {}
        postsInfos.map(post => {
          posts[post.id] = {
            ...post
          }
          return post
        })
        const comments = {}
        commentsInfos.map(comment => {
          comments[comment.id] = {
            ...comment
          }
          return comment
        })
        const readableData = {categ, posts, comments}
        dispatch(loadDataSuccess(readableData));
      })
    }, (err) => {
      throw(err);
    })
  }
}

export function addNewPost(post){
  return function(dispatch){
    ReadableAPI.addPost(post).then(data => {
      dispatch(addPost(data))
    }).catch(err => console.log(err))
  }
}

export function editPostContent(post){
  return function(dispatch){
    ReadableAPI.updatePost(post).then(data => {
      dispatch(editPost(data))
    }).catch(err => console.log(err))
  }
}

export function deletePostContent(post){
  return function(dispatch){
    ReadableAPI.deletePost(post).then(data => {
      dispatch(deletePost(data))
    }).catch(err => console.log(err))
  }
}

export function upVotePostContent(post){
  return function(dispatch){
    ReadableAPI.upVotePost(post).then(data => {
      dispatch(upVotePost(data))
    }).catch(err => console.log(err))
  }
}

export function downVotePostContent(post){
  return function(dispatch){
    ReadableAPI.downVotePost(post).then(data => {
      dispatch(downVotePost(data))
    }).catch(err => console.log(err))
  }
}

export function addNewComment(comment){
  return function(dispatch){
    ReadableAPI.addComment(comment).then(data => {
      dispatch(addComment(data))
    }).catch(err => console.log(err))
  }
}

export function editCommentContent(comment){
  return function(dispatch){
    ReadableAPI.updateComment(comment).then(data => {
      dispatch(editComment(data))
    }).catch(err => console.log(err))
  }
}

export function deleteCommentContent(comment){
  return function(dispatch){
    ReadableAPI.deleteComment(comment).then(data => {
      dispatch(deleteComment(data))
    }).catch(err => console.log(err))
  }
}

export function upVoteCommentContent(comment){
  return function(dispatch){
    ReadableAPI.upVoteComment(comment).then(data => {
      dispatch(upVoteComment(data))
    }).catch(err => console.log(err))
  }
}

export function downVoteCommentContent(comment){
  return function(dispatch){
    ReadableAPI.downVoteComment(comment).then(data => {
      dispatch(downVoteComment(data))
    }).catch(err => console.log(err))
  }
}
