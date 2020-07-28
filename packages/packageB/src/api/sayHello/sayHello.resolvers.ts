import { SayHelloResponse, SayHelloQueryArgs } from 'src/types/graph'

export default {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => ({
      text: `Hello ${args.name}?`,
      error: false
    })
  }
}
