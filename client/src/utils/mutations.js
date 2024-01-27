export const LOGIN_USER = `
mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        username
      }
    }
  }
`

export const CREATE_USER = `
mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        email
        username
      }
    }
  }
`
export const SAVE_BOOK =  `
mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`


export const DELETE_BOOK = `
mutation deleteBook($id: ID) {
    deleteBook(_id: $id) {
      _id
      authors
      title
      image
    }
  }
`

