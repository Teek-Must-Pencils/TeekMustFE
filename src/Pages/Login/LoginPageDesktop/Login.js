/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../Redux/action/authAction';
import { 
  selectAuth, selectEmail, selectRole, selectStatus, selectTest, selectToken, selectUser 
} from '../../../Redux/slice/authSlice';
import { LoadingRedux } from '../../../Components';
import "./Login.css"

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const authSelect = useSelector(selectAuth);
  const statusSelect = useSelector(selectStatus);
  const roleSelect = useSelector(selectRole);
  const tokenSelect = useSelector(selectToken);
  const userSelect = useSelector(selectUser);
  const emailSelect = useSelector(selectEmail);

  let navigate = useNavigate()

  // const validation = () => {
  //   let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  //   let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
  //   if (regexEmail.test(email) && regexPassword.test(password)) {
  //     return Navigate("../Home/Home.js", { replace: true })
  //   } else {
  //     return setAlertStatus(true)
  //   }
  // }

  const onSubmit = data => {
    const dataSend ={
      username: data.username,
      password: data.password
    }
    // console.log(dataSend)
    dispatch(login(dataSend))
  }

  console.log('auth', authSelect)
  console.log('status', statusSelect)
  console.log('role', roleSelect)
  console.log('token', tokenSelect)
  console.log('user', userSelect)
  console.log('email', emailSelect)

  if(authSelect && tokenSelect){
    return navigate("/")
  }


  return (
    <div>
      {statusSelect === "pending" && <LoadingRedux flag={statusSelect} />}
      <Container fluid>
        <Row>
          <Col md={6} className='image-login'>
          </Col>

          <Col md={6} className='box-login'>

            <Row className='ms-md-5 me-md-5 form-login align-content-center'>

              <Col md={12}>
                <h1 className="mb-4"> <b>Masuk</b></h1>
              </Col>

              <Col >
                <Form onSubmit={handleSubmit(onSubmit)} className={'form-login'} >
                  <Form.Group className="mb-3" controlId="FormLogin1">
                    <Form.Label>Username*</Form.Label>
                    <Form.Control  {...register("username")}
                      size="lg"
                      type="text"
                      placeholder="Contoh: johndee@gmail.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="FormLogin2">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control {...register("password")}
                      size="lg"
                      type="password"
                      placeholder="Masukkan password" />
                  </Form.Group>
                  <button 
                    type='submit'
                    className='tombol-masuk' 
                  >
                    Masuk
                  </button>

                </Form>
              </Col>
              <Col md={12} className={'text-center mt-4'}>
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