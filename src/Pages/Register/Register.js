import React  from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import { Link} from 'react-router-dom'
import './Register.css'

const Register = () => {


    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={6} className='image-Register'>
                    </Col>

                    <Col md={6} className='box-Register'>

                        <Row className='ms-md-5 me-md-5 form-Register align-content-center'>

                            <Col md={12}>
                                <h1 className="mb-4"> <b>Masuk</b></h1>
                            </Col>
                            

                            <Col >
                            
                                <Form className={'d-grid gap-2 '} >
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Nama <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="text" placeholder="Nama Lengkap" name="name" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" name="email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password <span style={{ color: "red" }}>*</span></Form.Label>
                                        <Form.Control type="password" placeholder="6+ karakter" name="password" />
                                    </Form.Group>
                                    <Button variant="primary">
                                        Sign In
                                    </Button>
                                </Form>
                            </Col>
                            <Col md={12} className={'text-center'}>
                                <span >Sudah punya akun </span> <Link to='/login' className='link'> <b>Masuk disini</b></Link>
                            </Col>
                        </Row>
                    </Col>



                </Row>
            </Container>
        </div>
    )
}

export default Register