import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { getAuthors, getBooks } from '../graphql-client/queries';
import { useQuery, useMutation } from '@apollo/client';
import { setSingleBook } from '../graphql-client/mutations'
const BookForm = () => {
    //GraphQL operations
    const { data } = useQuery(getAuthors);

    const [addBook, dataMutation] = useMutation(setSingleBook);


    const [showBookControl, setShowBookControl] = useState(false);
    const [newBook, setNewBook] = useState({
        name: '',
        genre: '',
        authorId: ''
    });
    const { name, genre, authorId } = newBook;

    const onInputChange = (event) => {
        setNewBook({
            ...newBook,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
        console.log(dataMutation)
        addBook({
            variables: {
                name: name,
                genre: genre,
                authorId: authorId
            },
            refetchQueries: [{ query: getBooks }]
        })
        setNewBook({
            name: '',
            genre: '',
            authorId: ''
        })
    };
    return (
        <Col sm={12} md={6}>
            {
                showBookControl ? (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="name" placeholder="Book name" onChange={onInputChange} value={name} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="genre" placeholder="Book genre" onChange={onInputChange} value={genre} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control as='select' name="authorId" onChange={onInputChange} value={authorId}>
                                <option value="" disabled>Select Author</option>
                                {
                                    data.authors.map(author => (
                                        <option
                                            key={author.id}
                                            value={author.id}
                                        >{author.name}</option>
                                    ))

                                }
                            </Form.Control>
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit">
                            Add book
                        </Button>
                        <Button
                            variant="secondary"
                            type="button"
                            className='ml-3'
                            style={{ marginLeft: '14px' }}
                            onClick={() => setShowBookControl(false)}
                        >Cancel
                        </Button>

                    </Form>
                ) : (<Button
                    variant="secondary"
                    type="button"
                    className='mb-3'
                    onClick={() => setShowBookControl(true)}
                >Add book
                </Button>
                )
            }
        </Col>
    )
}

export default BookForm