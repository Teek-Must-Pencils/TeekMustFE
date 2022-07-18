import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Carousel, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../Redux/action/authAction';
import {  selectStatus, selectMessage, selectAuth, authActions } from '../../../Redux/slice/authSlice';
import { LoadingRedux, ModalNotificationRedux } from '../../../Components';
import "./Login.css"

const Login = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const statusSelect = useSelector(selectStatus);
  const message = useSelector(selectMessage);
  const auth = useSelector(selectAuth);

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
    dispatch(login(dataSend))
  }

  useEffect(() => {
    if(statusSelect === "reject"){
      setShow(true);
      setTimeout(() => {
        setShow(false)
        dispatch(authActions.resetStatus())
      }, 1000);
    } 
    if(statusSelect === "success" && auth){
      setShow(true);
      setTimeout(() => {
        setShow(false)
        dispatch(authActions.resetStatus())
        navigate('/')
      }, 1000);
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusSelect])

  return (
    <div className='img-background'>
      {show && <ModalNotificationRedux message={message} status={statusSelect}/>}
      {statusSelect === "pending" && <LoadingRedux flag={statusSelect} />}
      <Container fluid>
        <Row>
        <Col md={6} className='ps-0' >
            <Carousel indicators={false} controls={false} fade>
              <Carousel.Item>
                <Image
                  className="slide-satu d-block w-100 "
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="slide-dua d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="slide-tiga d-block w-100"
                  alt=""
                />

              </Carousel.Item>
            </Carousel>
          </Col>

          <Col md={6} className='box-login'>
            <Row className='ms-md-5 me-md-5 form-login align-content-center'>
              <Col md={12}>
                <h1 className="mb-4 align-content-center"> <b>Masuk</b></h1>
              </Col>
              <Col >
                <Form onSubmit={handleSubmit(onSubmit)} className={'form-login'} >
                  <Form.Group className="mb-3" controlId="FormLogin1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control  {...register("username", {required: true})}
                      size="lg"
                      type="text"
                      placeholder="Contoh: Masukan Username"   
                    />
                    {errors.username && errors.username.type === "required" && 
                      <div className='errors'><span>Username is required</span></div>
                    }
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="FormLogin2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register("password", { required: true })}
                      size="lg"
                      type="password"
                      placeholder="Masukkan password" 
                    />
                    {errors.password && errors.password.type === "required" && 
                      <div className='errors'><span>Password is required</span></div>
                    }
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