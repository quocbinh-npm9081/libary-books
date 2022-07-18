import React, { useState } from 'react'

import { useQuery } from '@apollo/client';
import { getBooks } from '../graphql-client/query';
import BookDetail from './BookDetail'

import Skeleton from 'react-loading-skeleton'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const BooList = () => {

    const { loading, error, data } = useQuery(getBooks);
    const [bookSelected, setBookSelected] = useState(null)
    if (error) {
        return (<h2>Something went wrong</h2>)
    }
    return (
        <Row>
            <Col xs={8}>
                <Row>{
                    loading ? (
                        <>
                            <Col xs={6} sm={4}>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Skeleton count={1} />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} sm={4}>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Skeleton count={1} />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6} sm={4}>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Skeleton count={1} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    ) : (
                        <>
                            {
                                data.books.map(book => (
                                    <Col xs={6} sm={4} key={book.id}>
                                        <Card className="mb-3"
                                            onClick={() => setBookSelected(book.id)}
                                        >
                                            <Card.Body>
                                                <Card.Title>{book.name}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </>

                    )
                }


                </Row>
            </Col>
            <Col xs={4}>
                <BookDetail bookSelected={bookSelected} />
            </Col>
        </Row>
    )
}

export default BooList