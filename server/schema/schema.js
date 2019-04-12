const graphql = require("graphql");

const Message = require("../models/message.js");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

// Schema Types
const MessageType = new GraphQLObjectType({
    name: "Message",
    fields: () => ({
        id: { type: GraphQLID },
        handle: { type: GraphQLString },
        text: { type: GraphQLString }
    })
})

// Root Queries
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        message: {
            type: MessageType,
            resolve(parent, args) {
                return Message.find();
            }
        }
    }
});

// Mutations
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addMsg: {
            type: MessageType,
            args: {
                handle: { type: GraphQLString },
                text: { type: GraphQLString }
            },
            resolve(parent, args) {
                let newMsg = new Message({
                    handle: args.handle,
                    text: args.text
                });
                return newMsg.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});