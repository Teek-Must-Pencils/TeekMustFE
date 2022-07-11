/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Container, Row, Col, Form, Carousel, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form";
import ServiceRegister from '../../../Services/ServiceRegister';
import './RegisterDesktop.css'
import Loading from '../../../Components/Loading/Loading';
import { ModalNotification } from '../../../Components';

const RegisterDesktop = () => {


    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm();
    const [image, setImage] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const [message, setMessage] = useState(false);
    // const [email] = useState("");
    // const [password] = useState("")
    // const [alertStatus, setAlertStatus] = useState(false)

    // let Navigate = useNavigate()

    // const validation = () => {
    //     let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    //     let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
    //     if (regexEmail.test(email) && regexPassword.test(password)) {
    //         return Navigate("../Home/Home.js", { replace: true })
    //     } else {
    //         return setAlertStatus(true)
    //     }
    // }

    const handleImage = (e) => {
        setValue("imageFile", e.target.files[0])
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
                setValue("image", reader.result)
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    const onSubmit = data => {
        // console.log("data", dataSend)
        setLoading(true);
        ServiceRegister(data).then(
            (res) => {
                console.log(res)
                if (res.status === 201) {
                    setMessage(res.data);
                    setLoading(false);
                    setIsNotification(true);
                    setTimeout(() => {
                        setIsNotification(false);
                        setMessage('');
                    }, 1000);
                } else {
                    // setMessage(res.data);
                    setMessage('User is Failed');
                    setLoading(false);
                    setIsNotification(true);
                    setTimeout(() => {
                        setIsNotification(false);
                        setMessage('');
                    }, 1000);
                }
                console.log("Res", res)
            }
        ).catch(
            (err) => console.log(err)
        )
    };

    const handleIsLoading = () => {
        setLoading((prev) => !prev)
    }
    const handleIsNotification = () => {
        setIsNotification((prev) => !prev)
    }

    return (
        <div className='img-background'>
            <ModalNotification show={isNotification} close={handleIsNotification} message={message} />
            <Loading show={isLoading} close={handleIsLoading} />
            <Container fluid>
                <Row>
                    <Col md={6} className='ps-0' >
                        <Carousel fade>
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

                    <Col md={6} className='box-Register'>

                        <Row className='ms-md-5 me-md-5 form-Register align-content-center'>

                            <Col md={12}>
                                <h1 className="mb-2"> <b>Daftar</b></h1>
                            </Col>
                            {/* {alertStatus ? <Col md={12}>
                                <Alert variant="danger">
                                    <p className="mb-0">
                                    Masukkan nama, email dan password yang benar. Perhatikan penggunaan huruf kapital.
                                    </p>
                                </Alert>
                            </Col> : true} */}

                            <Col >

                                <Form onSubmit={handleSubmit(onSubmit)} className={'form-input'} >
                                    <Form.Group className="mt-2" controlId="Name">
                                        <Form.Label>Nama*</Form.Label>
                                        <Form.Control {...register("Nama", { required: true })}
                                            type="text"
                                            placeholder="Nama Lengkap" />
                                        {errors.username && errors.username.type === "required" &&
                                        <div className='errors'><span>Username is required</span></div>}
                                    </Form.Group>
                                    <Form.Group className="mt-2" controlId="Email">
                                        <Form.Label>Email*</Form.Label>
                                        <Form.Control {...register("Email", { required: true })}
                                            type="email"
                                            placeholder="Contoh: johndee@gmail.com" />
                                        {errors.username && errors.username.type === "required" &&
                                        <div className='errors'><span>Username is required</span></div>}
                                    </Form.Group>
                                    <Form.Group className="mt-2" controlId="Password">
                                        <Form.Label>Password*</Form.Label>
                                        <Form.Control {...register("Password", { required: true })}
                                            type="password"
                                            placeholder="Masukkan password" />
                                         {errors.username && errors.username.type === "required" &&
                                        <div className='errors'><span>Username is required</span></div>}
                                    </Form.Group>
                                    <Form.Group className="mt-2" controlId="Number">
                                        <Form.Label>Number*</Form.Label>
                                        <Form.Control {...register("Numbers", { required: true })}
                                            type="text"
                                            placeholder="Masukkan Number" />
                                         {errors.username && errors.username.type === "required" &&
                                        <div className='errors'><span>Username is required</span></div>}
                                    </Form.Group>
                                    <Form.Group className="mt-2" controlId="Address">
                                        <Form.Label>Address*</Form.Label>
                                        <Form.Control {...register("Address", { required: true })}
                                            type="text"
                                            placeholder="Masukkan Alamat" />
                                        {errors.username && errors.username.type === "required" &&
                                        <div className='errors'><span>Username is required</span></div>}
                                    </Form.Group>
                                    <Form.Group className="mt-2" controlId="Role">
                                        <Form.Label>Role*</Form.Label>
                                        <Controller
                                            name="Role"
                                            defaultValue=""
                                            control={control}
                                            render={({ field }) => (
                                                <Form.Select
                                                    // defaultValue=""
                                                    aria-label="Default select example"
                                                    {...field}
                                                >
                                                    <option value="" disabled>Open this select menu</option>
                                                    <option value="buyer">Buyer</option>
                                                    <option value="seller">Seller</option>
                                                </Form.Select>
                                            )}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mt-2">
                                        <Form.Label>Foto*</Form.Label>
                                        <Form.Control type="file" onChange={e => handleImage(e)} />
                                    </Form.Group>

                                    <button
                                        type='submit'
                                        className='tombol-masuk mt-4'
                                    >
                                        Daftar Akun
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