import React, { useState, useEffect } from "react"
import { Form, Row, Image, } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import "./InfoProfileDesktop.css"

// Gambar
import ServiceProfile from "../../../Services/ServiecProfile";


const InfoProfileMobile = (props) => {
    const { userData }= props;   
    const navigate = useNavigate();
    const [image, setImage] = useState(userData?.img);
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = data => {
        ServiceProfile.UpdateProfile(data)
        .then((res) => console.log(res))
        console.log(data);
    }

    const handleImage = (e) =>{
        setValue("imgFile",  e.target.files[0])
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
                // setValue("image", reader.result)
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleBack = () =>{
        navigate(-1)
    }
    
    // useEffect(() => {
    //   register('image')
    
    //   setValue('image', userData.img)
    // //   return () => {
    // //     second
    // //   }
    // }, [])
    

    return (
        <div className="container-content">

            <div className="button-back-content-df">
                <button 
                    className=''
                    onClick={()=> handleBack()}
                >
                    <ArrowLeft size='20px'/>
                </button>
            </div>
    
        <div className="container">
            <Row className="form-profile justify-content-center align-items-center">
                <div className="col-6">
                    <Form onSubmit={handleSubmit(onSubmit)} className={'form-login'} >
                        <input type='hidden' defaultValue='' {...register("id")} />
                        <div className="d-flex flex-row gap-4">
                            <Image className="mx-auto d-block mb-3 if-img" src={image} />
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Foto*</Form.Label>
                                <Form.Control type="file" onChange={e => handleImage(e)} />
                            </Form.Group>
                        </div>
                       
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Nama*</Form.Label>
                            <Form.Control {...register("name")}
                                size="lg"
                                type="text"
                                placeholder="Nama" 
                                defaultValue={userData?.name}
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
                                defaultValue={userData?.address}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>No Handphone*</Form.Label>
                            <Form.Control {...register("number")}
                                size="lg"
                                type="number"
                                placeholder="contoh: +628123456789" 
                                defaultValue={userData?.number}
                            />
                        </Form.Group>

                        <button className="tombol-simpan">
                            Simpan
                        </button>
                    </Form>


                </div>
            </Row>
        </div>
            


        </div>
    )
}

export default InfoProfileMobile