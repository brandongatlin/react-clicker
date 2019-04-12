import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';

import Form from './components/Form';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});



const App = (props) => {
console.log(props)
    return(
      <ApolloProvider client={client}>
        <Form />
      </ApolloProvider>
            )

   
}

export default App;