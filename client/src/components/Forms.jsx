import React from 'react'
import Row from 'react-bootstrap/Row'

import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
const Forms = () => {


    return (
        <Row>
            <BookForm />
            <AuthorForm />

        </Row>
    )
}

export default Forms