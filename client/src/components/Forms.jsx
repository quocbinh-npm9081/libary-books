import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

const Forms = () => {

    const [showAuthorControl, setShowAuthorControl] = useState(false);
    const [showBookControl, setShowBookControl] = useState(false);


    return (
        <Row>
            <Col sm={12} md={6}>
                {
                    showBookControl ? (
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Book name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Book genre" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control as='select' defaultValue='Select'>
                                    <option disabled>Select Author</option>
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
            <Col md={6} sm={12}>
                {
                    showAuthorControl ? (
                        <Form>
                            <Form.Group className="mb-3 invisible">
                                <Form.Control type="text" placeholder="Author name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Author name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="number" placeholder="Author genre" />
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


        </Row>
    )
}

export default Forms