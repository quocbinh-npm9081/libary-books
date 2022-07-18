import './App.scss';
import 'react-loading-skeleton/dist/skeleton.css'

import Container from 'react-bootstrap/Container'
import BookList from './components/BooList'
import Forms from './components/Forms';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container className="py-3 mt-3 bg-dark" >
        <h1 className='text-center text-info mb-3'>
          My book
        </h1>
        <hr />
        <Forms />
        <hr />
        <BookList></BookList>
      </Container>
    </ApolloProvider>
  );
}

export default App;