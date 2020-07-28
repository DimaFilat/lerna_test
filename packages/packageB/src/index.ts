import app from './app'
import { Options } from 'graphql-yoga'

const PORT:string | number = process.env.PORT || 4000
const PLAYGROUND_ENDPOINT = '/playground'
const GRAPHQL_ENDPOINT = '/graphql'

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
}

const handleAppStart = () => console.log(`Listening on port ${PORT}`)
app.start(appOptions, handleAppStart)
