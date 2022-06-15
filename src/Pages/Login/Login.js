import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {

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
          <Col md={6} className='image-login'>
          </Col>

          <Col md={6} className='box-login'>

            <Row className='ms-md-5 me-md-5 form-login align-content-center'>

              <Col md={12}>
                <h1 className="mb-4"> <b>Masuk</b></h1>
              </Col>
              {alertStatus ? <Col md={12}>
                <Alert variant="danger">
                  <p className="mb-0">
                    Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.
                  </p>
                </Alert>
              </Col> : true}

              <Col >
                <Form className={'d-grid gap-2 '} >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password </Form.Label>
                    <Form.Control type="password" placeholder="6+ karakter" />
                  </Form.Group>
                  <Button variant="primary" onClick={validation}>
                    Sign In
                  </Button>
                </Form>
              </Col>
              <Col md={12} className={'text-center'}>
                <span >Belum punya akun </span> <Link to='/register' className='link'> <b>Daftar disini</b></Link>
              </Col>
            </Row>
          </Col>



        </Row>
      </Container>
    </div>
  )
}

export default Login