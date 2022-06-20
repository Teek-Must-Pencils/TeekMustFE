import React from "react"
import { Form, Row, Image, } from "react-bootstrap"
import { useForm } from "react-hook-form";
import "./InfoProfileMobile.css"

// Gambar
import Kamera from "../../../Assets/Img/Group 1.png"
import iconBack from "../../../Assets/Img/fi_arrow-left.png"


const InfoProfileMobile = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);




    return (
        <div className="info-profile ">

            <div>
                <Image className="icon-back" src={iconBack} />
                <Image className="mx-auto d-block mb-3" src={Kamera} />
            </div>

            <Row className=" form-profile justify-content-center align-items-center h-100">
                <div className="col-11">
                    <Form onSubmit={handleSubmit(onSubmit)} className={'form-login'} >
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Nama*</Form.Label>
                            <Form.Control {...register("Nama")}
                                size="lg"
                                type="email"
                                placeholder="Nama" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Kota*</Form.Label>
                            <Form.Select size="lg" {...register("Kota")}>
                                <option>Pilih Kota</option>
                                <option>Jabodetabek</option>
                                <option>Bali</option>
                                <option>Luar Jawa</option>
                            </Form.Select>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control {...register("Alamat")}
                                as="textarea"
                                rows={3}
                                size="lg"
                                type="text"
                                placeholder="Alamat" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>No Handphone*</Form.Label>
                            <Form.Control {...register("No Handphone")}
                                size="lg"
                                type="number"
                                placeholder="contoh: +628123456789" />
                        </Form.Group>

                        <button className="tombol-simpan">
                            Simpan
                        </button>
                    </Form>


                </div>
            </Row>


        </div>
    )
}

export default InfoProfileMobile