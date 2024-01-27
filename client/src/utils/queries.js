export const QUERY_ME = `
query queryMe {
    me {
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`