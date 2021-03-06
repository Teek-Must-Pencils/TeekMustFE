import React,{ useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { LoadingRedux, ModalNotificationRedux } from '../../../Components'
import { login } from '../../../Redux/action/authAction';
import { selectStatus, selectMessage, selectAuth, authActions } from '../../../Redux/slice/authSlice';
import "./LoginMobile.css"

const LoginMobile = () => {
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
    <>
      {show && <ModalNotificationRedux message={message} status={statusSelect}/>}
      {statusSelect === "pending" && <LoadingRedux flag={statusSelect} />}
      <Container>
        <Row>

          <Col md={6} className='box-login bg-mobile'>

            <Row className='form-login align-content-center'>

              <Col md={12}>
                <h1 className="mb-4"> <b>Masuk</b></h1>
              </Col>

              <Col >
                <Form onSubmit={handleSubmit(onSubmit)} className={'form-login'} >
                  <Form.Group className="mb-3" controlId="form1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control  {...register("username", {required: true})}
                      size="md"
                      type="username"
                      placeholder="Masukkan Username"   
                    />
                    {errors.username && errors.username.type === "required" && 
                      <div className='errors'><span>Username is required</span></div>
                    }
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="form2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register("password", { required: true })}
                      size="md"
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
    </>
  )
}

export default LoginMobile