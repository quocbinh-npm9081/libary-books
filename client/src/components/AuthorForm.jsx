import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import { getAuthors } from '../graphql-client/queries';
import { setSingleAuthor } from '../graphql-client/mutations';

const AuthorForm = () => {

    const [showAuthorControl, setShowAuthorControl] = useState(false);
    const [newAuthor, setNewAuthor] = useState({
        name: '',
        age: ''
    });
    const [addAuthor, dataMutation] = useMutation(setSingleAuthor);


    const { name, age } = newAuthor;

    const onInputHandleChange = (e) => {
        setNewAuthor({
            ...newAuthor,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
        console.log(dataMutation)
        console.log(typeof age)
        addAuthor({
            variables: {
                name: name,
                age: parseInt(age),
            },
            refetchQueries: [{ query: getAuthors }]
        })
        setNewAuthor({
            name: '',
            age: ''
        })
    };

    return (
        <Col sm={12} md={6}>
            {
                showAuthorControl ? (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 invisible">
                            <Form.Control
                                type="text"
                                placeholder="Author name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Author name"
                                onChange={onInputHandleChange}
                                name="name"
                                value={name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="number"
                                placeholder="Author genre"
                                onChange={onInputHandleChange}
                                name="age"
                                value={age}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit">Add Author</Button>
                        <Button variant="secondary"
                            type="button"
                            className='ml-3'
                            style={{ marginLeft: '14px' }}
                            onClick={() => setShowAuthorControl(false)}
                        >
                            Cancel
                        </Button>

                    </Form>
                ) : (<Button
                    variant="secondary"
                    type="button"
                    className='mb-3'
                    onClick={() => setShowAuthorControl(true)}
                >
                    Add author
                </Button>
                )
            }
        </Col>

    )
}

export default AuthorForm