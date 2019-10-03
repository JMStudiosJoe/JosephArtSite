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

const GalleryType = new GraphQLObjectType({
    name: 'GalleryType',
    description: 'type of Gallery and contents for what goes into a gallery',
    fields: () => {
        return {
            _id: { type: GraphQLString },
            name: { type: GraphQLString },
            address: { type: GraphQLString },
            city: { type: GraphQLString },
            state: { type: GraphQLString },
            zipcode: { type: GraphQLString },
            imgURL: { type: GraphQLString },
            url: { type: GraphQLString },
            _id: { type: GraphQLString },
        }
    }
})

const GalleryQuery = new GraphQLObjectType({
    name: 'GalleryQuery',
    description: 'Gallery query to get the galleries data using the GalleryType',
    fields: () => {
        return {
            galleries: {
                type: new GraphQLList(GalleryType),
                description: 'return list of all galleries',
                resolve: (parentValue, args, request) => {
                    return db.db.getAll('galleries').then(result => {
                        return result
                    })
                }
            }
        }
    }
})

const GallerySchema = new GraphQLSchema({
    query: GalleryQuery
})

module.exports = {
    GallerySchema
}