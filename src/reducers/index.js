import { persistCombineReducers } from 'redux-persist'
import storage  from 'redux-persist/es/storage'
import * as types from './../actions/actionType'

let initialState = {
  categ : null,
  posts : null,
  comments : null
}

function sortByDate(post1, post2){
  if (post1.timestamp < post2.timestamp) return -1
  if (post1.timestamp > post2.timestamp) return 1
  return 0
}

function sortByVote(post1, post2){
  if (post1.voteScore < post2.voteScore) return -1
  if (post1.voteScore > post2.voteScore) return 1
  return 0
}

function loadData(state = initialState, action){
  switch (action.type) {
    case types.LOAD_APP_DATA:
      return Object.assign({}, state, action.data)
    case types.ADD_POST:
      return {
        categ : [...state.categ],
        comments : {...state.comments},
        posts : {
          ...state.posts,
          [action.post.id] : {
            ...action.post
          }
        }
      }
    case types.EDIT_POST:
      return {
        categ : [...state.categ],
        comments : {...state.comments},
        posts : {
          ...state.posts,
          [action.post.id] : {
            ...action.post
          }
        }
      }
    case types.DELETE_POST:
      const {categ, comments, posts} = state
      const {[action.post.id] : omit, ...res} = posts
      return {
        categ : categ,
        comments : comments,
        posts : res
      }
    case types.UP_VOTE_POST:
      return {
        categ : [...state.categ],
        comments : {...state.comments},
        posts : {
          ...state.posts,
          [action.post.id] : {
            ...action.post
          }
        }
      }
    case types.DOWN_VOTE_POST:
      return {
        categ : [...state.categ],
        comments : {...state.comments},
        posts : {
          ...state.posts,
          [action.post.id] : {
            ...action.post
          }
        }
      }
    case types.ORDER_SCORE_POST:
      const postsInfos= state.posts
      const postLists = Object.values(postsInfos)
      const sortPostList = postLists.sort(sortByVote)
      const postsObject = {}
      sortPostList.map(post => {
        postsObject[post.id] = {
          ...post
        }
        return post
      })
      return {
        categ : [...state.categ],
        comments : {...state.comments},
        posts : postsObject
      }
    case types.ORDER_DATE_POST:
        const postsInfo = state.posts
        const postList = Object.values(postsInfo)
        const sortPost = postList.sort(sortByDate)
        const postObject = {}
        sortPost.map(post => {
          postObject[post.id] = {
            ...post
          }
          return post
        })
        return {
          categ : [...state.categ],
          comments : {...state.comments},
          posts : postObject
        }
    case types.ADD_COMMENT:
      const postInc = state.posts[action.comment.parentId]
      ++postInc.commentCount
      return {
        categ : [...state.categ],
        comments : {
          ...state.comments,
          [action.comment.id] : {
            ...action.comment
          }
        },
        posts : {
          ...state.posts,
          [action.comment.parentId] : {
            ...postInc
          }
        }
      }
    case types.EDIT_COMMENT:
        return {
          categ : [...state.categ],
          comments : {...state.comments,
            [action.comment.id] : {
              ...action.comment
            }
          },
          posts : {
            ...state.posts
          }
        }
    case types.DELETE_COMMENT:
        const postDec = state.posts[action.comment.parentId]
        --postDec.commentCount
        const commentInfo = state.comments
        const postInfo = state.posts
        const {[action.comment.id] : omits, ...res1} = commentInfo
        return {
          categ : [...state.categ],
          comments : res1,
          posts : {
            ...postInfo,
            [action.comment.parentId] : {
              ...postDec
            }
          }
        }
    case types.UP_VOTE_COMMENT:
          return {
            categ : [...state.categ],
            comments : {
              ...state.comments,
              [action.comment.id] : {
                ...action.comment
              }
            },
            posts : {
              ...state.posts
            }
          }
    case types.DOWN_VOTE_COMMENT:
          return {
            categ : [...state.categ],
            comments : {
              ...state.comments,
              [action.comment.id] : {
                ...action.comment
              }
            },
            posts : {
              ...state.posts
            }
          }
    default:
      return state

  }
}

const config = {
  key : 'root',
  storage
}

export default persistCombineReducers(config, {loadData})
