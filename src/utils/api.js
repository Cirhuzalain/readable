
const URL = 'http://localhost:5001';
const headers = {'Authorization' : 'KHGJ874596TY'};

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
