import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { offsetLimitPagination, concatPagination, relayStylePagination } from '@apollo/client/utilities'
import { setContext } from '@apollo/client/link/context'
import { useCookies } from '@vueuse/integrations/useCookies'
import { onError } from "@apollo/client/link/error"

const cookies = useCookies(['locale'])

const httpLink = new HttpLink({
  uri: 'http://localhost/graphql'
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        myTodos: relayStylePagination(),
        blogs: relayStylePagination(),
      },
    },
  },
});

const authLink = setContext((_, { headers }) => {
  const token = cookies.get('password_access_token')

  const token_type = cookies.get('password_token_type') || 'Bearer'

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `${token_type} ${token}` : "",
    }
  }
});

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  console.log(graphQLErrors)
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      console.log(err)
      switch (err.extensions.category) {
        // Apollo Server sets code to UNAUTHENTICATED
        // when an AuthenticationError is thrown in a resolver
        case 'authentication':

          // Modify the operation context with a new token
          const oldHeaders = operation.getContext().headers;

          operation.setContext({
            headers: {
              ...oldHeaders,
              // authorization: getNewToken(),
            },
          });
          console.log('test', operation)

          // Retry the request, returning the new observable
          return forward(operation);
      }
    }
  }

  // To retry on network errors, we recommend the RetryLink
  // instead of the onError link. This just logs the error.
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const apolloClient = new ApolloClient({
  link: authLink.concat(errorLink.concat(httpLink)),
  // link: errorLink.concat(httpLink),
  cache,
})

export default apolloClient