import React, { useState } from "react"
import { Form, Row, Image, } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { ArrowLeft } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import "./InfoProfileMobile.css"

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


    return (
        <div className="container-content">

             <div className="button-back-content">
                <button 
                    className=''
                    onClick={()=> handleBack()}
                >
                    <ArrowLeft size='20px'/>
                </button>
            </div>
    
            <div className="container">
                <Row className="form-profile justify-content-center align-items-center">
                    <div className="col-11">
                        <form onSubmit={handleSubmit(onSubmit)} className='' >
                        <input type='hidden' defaultValue='' {...register("id")} />
                            <div className="d-flex flex-row gap-4 my-5">
                                <Image className="mx-auto d-block mb-3 if-img-mobile" src={image} />
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Foto*</Form.Label>
                                    <Form.Control size="sm" type="file" onChange={e => handleImage(e)} />
                                </Form.Group> 
                            </div>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Nama*</Form.Label>
                                <Form.Control {...register("name")}
                                    size="sm"
                                    type="text"
                                    placeholder="Nama" 
                                    defaultValue={userData?.name}
                                />
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="">
                                <Form.Label>Kota*</Form.Label>
                                <Form.Select size="lg" {...register("Kota")}>
                                    <option>Pilih Kota</option>
                                    <option>Jabodetabek</option>
                                    <option>Bali</option>
                                    <option>Luar Jawa</option>
                                </Form.Select>

                            </Form.Group> */}

                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Alamat</Form.Label>
                                <Form.Control {...register("address")}
                                    as="textarea"
                                    rows={3}
                                    size="sm"
                                    type="text"
                                    placeholder="Alamat" 
                                    defaultValue={userData?.address}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>No Handphone*</Form.Label>
                                <Form.Control {...register("number")}
                                    size="sm"
                                    type="number"
                                    placeholder="contoh: 08123456789" 
                                    defaultValue={userData?.number}
                                />
                            </Form.Group>

                            <button className="tombol-simpan-mobile">
                                Simpan
                            </button>
                        </form> 

                    </div>
                </Row>
               
            </div>

          


        </div>
    )
}

export default InfoProfileMobile