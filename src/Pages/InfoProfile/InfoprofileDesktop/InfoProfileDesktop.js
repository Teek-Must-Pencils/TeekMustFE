import React, { useState } from "react"
import { Form, Row, Image, } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import "./InfoProfileDesktop.css"

// Gambar
import ServiceProfile from "../../../Services/ServiecProfile";
import { Loading, ModalNotification } from "../../../Components";


const InfoProfileDesktop = (props) => {
    const { userData } = props;
    const navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm();
    const [image, setImage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const [message, setMessage] = useState();

    const onSubmitEdit = data => {
        setIsLoading(true);
        ServiceProfile.UpdateProfile(data).then((res) => {
            if (res.status === 200) {
                setMessage('Edit Data Berhasil')
                setIsLoading(false);
                setIsNotification(true);
                setTimeout(() => {
                    setIsNotification(false);
                    setMessage('');
                    window.location.reload();
                }, 1000);
            } else {
                setMessage('Edit Data Gagal')
                setIsLoading(false);
                setIsNotification(true);
                setTimeout(() => {
                    setIsNotification(false);
                    setMessage('');
                }, 1000);}
        }).catch((err) => console.log(err))
    }

    const handleImage = (e) => {
        setValue("imgFile", e.target.files[0])
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
                setValue("image", reader.result)
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleBack = () => {
        navigate(-1)
    }

    setValue('name', userData?.username);
    setValue('address', userData?.address);
    setValue('number', userData?.number);
    setValue('id', userData?.id);
    setValue('image', `data:image/png;base64,${userData?.imgB}`);
    

    return (
        <>
        <Loading show={isLoading}/>
        <ModalNotification show={isNotification} message={message} />
            <div className="container-content">

                <div className="button-back-content-df">
                    <button
                        className=''
                        onClick={() => handleBack()}
                    >
                        <ArrowLeft size='20px' />
                    </button>
                </div>

                <div className="container">
                    <Row className="form-profile justify-content-center align-items-center">
                        <div className="col-6">
                            <Form onSubmit={handleSubmit(onSubmitEdit)} className={'form-login'} >
                                <input type='hidden' defaultValue='' {...register("id")} />
                                <div className="d-flex flex-row gap-4">
                                    <Image className="mx-auto d-block mb-3 if-img" src={image || `data:image/png;base64,${userData?.imgB}`} />
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Foto*</Form.Label>
                                        <Form.Control type="file" onChange={e => handleImage(e)} />
                                    </Form.Group>
                                </div>

                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Username*</Form.Label>
                                    <Form.Control {...register("name")}
                                        size="lg"
                                        type="text"
                                        placeholder="Username"
                                        // defaultValue={userData?.username}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Alamat</Form.Label>
                                    <Form.Control {...register("address")}
                                        as="textarea"
                                        rows={3}
                                        size="lg"
                                        type="text"
                                        placeholder="Alamat"
                                        // defaultValue={userData?.address}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>No Handphone*</Form.Label>
                                    <Form.Control {...register("number")}
                                        size="lg"
                                        type="number"
                                        placeholder="contoh: +628123456789"
                                        // defaultValue={userData?.number}
                                    />
                                </Form.Group>

                                <button className="tombol-simpan mb-5" type="submit">
                                    Simpan
                                </button>
                            </Form>
                        </div>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default InfoProfileDesktop