const typeDefs = `
type Book {
    _id: ID!
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
}

type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
}
input BookInput {
    authors:[String]
    description: String!
    bookId: String
    image: String
    link: String
    title: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me:User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeBook(bookId: ID): User
    saveBook(bookData: BookInput!): User

}
`

module.exports = typeDefs;