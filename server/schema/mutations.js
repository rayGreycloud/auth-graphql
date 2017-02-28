const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp: {
      type: UserType,
      args: {
        email: { GraphQLString },
        password: { GraphQLString }
      },
      resolve(parentValue, args, request) {
        // Destructuring here to keep args as parameter
        const { email, password } = args;
        // async process so return promise
        return AuthService.signUp({ email, password, req: request });
      }
    }
  }
});

module.exports = mutation;
