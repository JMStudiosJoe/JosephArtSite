const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean,
    formatError,
} = require('graphql')

const db = require('../lib/db')
const { posts_db_name } = require('../Utilities/API_utilities')

const PostType = new GraphQLObjectType({
    name: 'PostType',
    description: 'type of post and contents for what goes into a post',
    fields: () => {
        return {
            _id: { type: GraphQLString },
            title: { type: GraphQLString },
            description: { type: GraphQLString },
            price: { type: GraphQLString },
            status: { type: GraphQLString },
            order: { type: GraphQLInt },
            available: { type: GraphQLBoolean },
            url: { type: GraphQLString },
            thumb: { type: GraphQLString },
            orientation: { type: GraphQLString },
            prints: { type: GraphQLString },
        }
    }
})

const PostQuery = new GraphQLObjectType({
    name: 'PostsQuery',
    description: 'Posts query to get the posts data using the PostType',
    fields: () => {
        return {
            posts: {
                type: new GraphQLList(PostType),
                description: 'return list of all posts',
                resolve: (parentValue, args, request) => {
                    return db.db.getAll(posts_db_name).then(result => {
                        return result
                    })
                }
            }
        }
    }
})

const PostSchema = new GraphQLSchema({
    query: PostQuery
})

module.exports = {
    PostSchema
}