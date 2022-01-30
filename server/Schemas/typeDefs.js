// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

input savedBookInput {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBookInput!): User
    removeBook(bookId: ID): User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
}

type Auth {
    token: ID!
    user: User
}
`;

// export the typeDefs
module.exports = typeDefs;