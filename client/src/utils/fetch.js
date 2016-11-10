export const fetchOptions = {
  method: 'POST',
  headers: {
    Accept: '*/*',
    'content-type': 'application/json',
  },
  credentials: 'include'
}


export const apiUrl = process.env.NODE_ENV === 'production'? 'https://api-tictacturing.herokuapp.com/graphql' : 'http://localhost:3001/graphql'
