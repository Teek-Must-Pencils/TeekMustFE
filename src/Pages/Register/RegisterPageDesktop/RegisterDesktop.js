import React, { useState } from 'react'
import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import './RegisterDesktop.css'

const RegisterDesktop = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const [email] = useState("");
    const [password] = useState("")
    const [alertStatus, setAlertStatus] = useState(false)

    let Navigate = useNavigate()

    const validation = () => {
        let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        if (regexEmail.test(email) && regexPassword.test(password)) {
            return Navigate("../Home/Home.js", { replace: true })
        } else {
            return setAlertStatus(true)
        }
    }



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
                            {alertStatus ? <Col md={12}>
                                <Alert variant="danger">
                                    <p className="mb-0">
                                    Masukkan nama, email dan password yang benar. Perhatikan penggunaan huruf kapital.
                                    </p>
                                </Alert>
                            </Col> : true}


                            <Col >

                                <Form onSubmit={handleSubmit(onSubmit)} className={'form-input '} >
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Nama*</Form.Label>
                                        <Form.Control {...register("Nama")}
                                            size="lg"
                                            type="text"
                                            placeholder="Nama Lengkap" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Email*</Form.Label>
                                        <Form.Control {...register("Email")}
                                            size="lg"
                                            type="email"
                                            placeholder="Contoh: johndee@gmail.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Password*</Form.Label>
                                        <Form.Control {...register("Password")}
                                            size="lg"
                                            type="password"
                                            placeholder="Masukkan password" />
                                    </Form.Group>
                                    <button onClick={validation} className='tombol-masuk' >
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

export default RegisterDesktop