import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Skeleton from 'react-loading-skeleton'

import { useQuery } from '@apollo/client';
import { getSingleBook } from '../graphql-client/queries'
const BookDetail = ({ bookSelected }) => {
    const { loading, error, data } = useQuery(getSingleBook,
        {
            variables: { id: bookSelected },
            skip: bookSelected === null
        });

    return (
        <>
            {
                bookSelected == null ? (<>
                    <Card className="text-white bg-secondary">
                        <Card.Body>
                            <Card.Title>
                                Please selected book
                            </Card.Title>
                        </Card.Body>
                    </Card >
                </>) : (
                    loading ? (

                        <Card className="text-secondary">
                            <Card.Body>
                                <Card.Title>
                                    <Skeleton count={1} />
                                </Card.Title>

                                <Card.Title> <Skeleton count={1} /> </Card.Title>
                                <p> <Skeleton count={1} /></p>
                                <ListGroup variant="flush">
                                    <ListGroup.Item> <Skeleton count={1} /></ListGroup.Item>
                                    <ListGroup.Item> <Skeleton count={1} /></ListGroup.Item>
                                    <ListGroup.Item> <Skeleton count={1} /></ListGroup.Item>
                                </ListGroup>
                            </Card.Body>

                        </Card >

                    ) : (
                        <Card className="text-secondary">

                            <Card.Body>
                                <Card.Title>Title: {data.book.name}</Card.Title>

                                <Card.Title>Author: {data.book.author.name} </Card.Title>
                                <p>Age: {data.book.author.age}</p>
                                <ListGroup variant="flush">
                                    {
                                        data.book.author.books.map(book => (
                                            <ListGroup.Item key={book.id}>{book.name}</ListGroup.Item>
                                        ))
                                    }

                                </ListGroup>
                            </Card.Body>

                        </Card >
                    )

                )
            }
        </>

    )
}

export default BookDetail