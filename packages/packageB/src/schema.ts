// import { GraphQLSchema } from 'graphql'
import path from 'path'
import { makeExecutableSchema } from 'graphql-tools'
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas'


const allTypes = fileLoader(
  path.join(__dirname, './api/**/*.graphql'),
  { recursive: true }
)

const allResolvers = fileLoader(
  path.join(__dirname, './api/**/*.resolvers.*'),
  { recursive: true }
)

const mergedTypes = mergeTypes(allTypes, { all: true })
const mergedResolvers = mergeResolvers(allResolvers)

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
})

export default schema
