const { Book, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async () => {
            return User.findOne({ username})
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
              }
        
              const correctPw = await user.isCorrectPassword(password);
        
              if (!correctPw) {
                throw AuthenticationError;
              }
            const token = signToken(user);
      
            return { token, user };
          },
        createUser: async (_, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user} ;
        },
        deleteBook: async (parent, { bookId } ) => {
            const book = await Book.findOneAndDelete({
                _id:bookId
            })

            return book;
        
        
        },
        saveBook: async (parent, args) => {
            const book = await Book.findOneAndUpdate({
                _id: args.id
            },
            {
               $set: {authors: args.authors, description: args.description, bookId: args.bookId, image: args.image, link: args.link, title: args.title}

            })
            return book;
        }
    }
}

module.exports = resolvers;