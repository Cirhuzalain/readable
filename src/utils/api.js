
const URL = 'http://localhost:3001'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {'Authorization' : token}

export function loadCategories(){
  return fetch(`${URL}/categories`, { headers })
          .then(res => res.json())
}

export function loadPosts(){
  return fetch(`${URL}/posts`, { headers })
          .then(res => res.json())
}

export function loadComments(postId){
  return fetch(`${URL}/posts/${postId}/comments`, { headers })
          .then(res => res.json())
}

export function addPost(post){
  return fetch(`${URL}/posts`,
                { headers : {...headers, 'Content-Type' : 'application/json'},
                  method : 'POST',
                  body : JSON.stringify(post)
                }).then(res => res.json())
}

export function updatePost(post){
  return fetch(`${URL}/posts/${post.id}`,
                { headers : {...headers, 'Content-Type' : 'application/json'},
                  method : 'PUT',
                  body : JSON.stringify(post)
                }).then(res => res.json())
}

export function deletePost(post){
  return fetch(`${URL}/posts/${post.id}`,
                { headers : {...headers, 'Content-Type' : 'application/json'},
                  method : 'DELETE'
                }).then(res => res.json())
}

export function upVotePost(post){
  return fetch(`${URL}/posts/${post.id}`,
                { headers : {...headers, 'Content-Type' : 'application/json'},
                  method : 'POST',
                  body : JSON.stringify({option : "upVote"})
                }).then(res => res.json())
}

export function downVotePost(post){
  return fetch(`${URL}/posts/${post.id}`,
                { headers : {...headers, 'Content-Type' : 'application/json'},
                  method : 'POST',
                  body : JSON.stringify({option : "downVote"})
                }).then(res => res.json())
}

export function addComment(comment){
  return fetch(`${URL}/comments`,
                { headers : {...headers, 'Content-Type' : 'application/json'},
                  method : 'POST',
                  body : JSON.stringify(comment)
                }).then(res => res.json())
}

export function updateComment(comment){
  return fetch(`${URL}/comments/${comment.id}`,
                { headers : {...headers, 'Content-Type' : 'application/json'},
                  method : 'PUT',
                  body : JSON.stringify(comment)
                }).then(res => res.json())
}

export function deleteComment(comment){
  return fetch(`${URL}/comments/${comment.id}`,
                { headers : {...headers, 'Content-Type' : 'application/json'},
                  method : 'DELETE'
                }).then(res => res.json())
}

export function upVoteComment(comment){
  return fetch(`${URL}/comments/${comment.id}`,
                { headers : {...headers, 'Content-Type' : 'application/json'},
                  method : 'POST',
                  body : JSON.stringify({option : "upVote"})
                }).then(res => res.json())
}

export function downVoteComment(comment){
  return fetch(`${URL}/comments/${comment.id}`,
                { headers : {...headers, 'Content-Type' : 'application/json'},
                  method : 'POST',
                  body : JSON.stringify({option : "downVote"})
                }).then(res => res.json())
}
