import { gql } from '@apollo/client';

const setSingleAuthor = gql `
    mutation setSingleAuthorMutation($name: String, $age: Int) {
    createAuthor(name: $name, age: $age){
      name,
      id
    }
}

`
const setSingleBook = gql `
  mutation setSingleBookMutation($name:String,$genre: String $authorId: ID!) {
    createBook(name:$name, genre:$genre, authorId: $authorId) {
      id,
      name
    }
}

`

export { setSingleBook, setSingleAuthor }