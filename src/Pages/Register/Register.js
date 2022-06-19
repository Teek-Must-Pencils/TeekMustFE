import React from 'react'
import { Container, Row, Col, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
                                <h1 className="mb-4"> <b>Daftar</b></h1>
                            </Col>


                            <Col >

                                <Form className={'form-input '} >
                                <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Nama*</Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="Nama Lengkap" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Email*</Form.Label>
                                        <Form.Control size="lg" type="email" placeholder="Contoh: johndee@gmail.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Password*</Form.Label>
                                        <Form.Control size="lg" type="password" placeholder="Masukkan password" />
                                    </Form.Group>
                                    <button className='tombol-masuk' >
                                        Masuk
                                    </button>
                                </Form>
                            </Col>
                            <Col md={12} className={'text-center mt-4'}>
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