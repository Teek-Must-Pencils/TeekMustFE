import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { ArrowLeft } from 'react-feather';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import usePreview from '../../../Hooks/usePreview';
// import second from '../../../Assets/Img/Group 1.png';
import '../InfoProduct.css';

const InfoProductDesktop = (props) => {
    const {
        id,
        product,
        user,
        onSubmitSellerInput,
        onSubmitSellerEdit,
        category
    } = props;
    let navigate = useNavigate();
    const dataPreview = usePreview();
    const [image, setImage] = useState();
    const { register, handleSubmit, control, setValue, formState:{ errors } } = useForm();

    const handleInputImage = (e) => {
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

    const handleBack = () => {
        navigate(-1)
    }

    const handleCategories = (ids) => {
        let result;
        if (ids === 1) { result = "Pencil 2B" }
        else if (ids === 2) { result = "Color Pencil 12" }
        else if (ids === 3) { result = "Color Pencil 24" }
        else if (ids === 4) { result = "Color Pencil 8" }
        return result;
    }

    useEffect(() => {
        if (dataPreview.image) {
            setValue("imageFile", dataPreview.imageFile);
            setValue("image", dataPreview.image)
            setValue('seller', user?.username)
            setValue('address', user?.address)
        }else if(product){
            setValue('id', product?.id)
            setValue("name", product?.name);
            setValue("category", product?.categories?.at(0).toLowerCase())
            setValue("imageFile", product?.img);
            setValue("image", `data:image/png;base64,${product?.img}`)
            setValue("description", product?.description)
            setValue("price", product?.price)
            setValue("seller", product?.seller)
            setValue("address", product?.city)
        } 
    //   return () => {
    //     second
    //   }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product, dataPreview.image])

    setValue('seller', user?.username)
    setValue('address', user?.address)
    
    return (
        <>
            <div className="container-content">
                <div className="row">
                    <div className="col-1">
                        <div className='ip-content-button'>
                            <button
                                className=''
                                onClick={() => handleBack()}
                            >
                                <ArrowLeft size='20px' />
                            </button>
                        </div>
                    </div>

                    <Row className=" justify-content-center align-items-center h-100">
                        <div className="col-6">
                            <form
                                className="ip-content-form"
                                onSubmit={handleSubmit(id ? onSubmitSellerEdit : onSubmitSellerInput)}
                            >
                            <input type="hidden" {...register('seller')} />
                            <input type="hidden" {...register('address')} />

                                <div className='ip-box-input'>
                                    <label>Nama Produk{' '}
                                        {errors.name && errors.name.type === "required" && 
                                            <span className='error-product'>Nama is Required</span>}
                                    </label>
                                    <input
                                        className='bg-white'
                                        type="text"
                                        placeholder="Nama Produk"
                                        name="nama"
                                        defaultValue={dataPreview.name || undefined}
                                        {...register("name", { required : true })}
                                    />
                                </div>
                                <div className='ip-box-input'>
                                    <label>Harga Produk{' '}
                                    {errors.price && errors.price.type === "required" && 
                                            <span className='error-product'>Harga is Required</span>}
                                    </label>
                                    <input
                                        className='bg-white'
                                        type="number"
                                        placeholder="Rp. 0,00"
                                        defaultValue={dataPreview.price || undefined}
                                        {...register("price", {required:true})}
                                        // required
                                    />
                                </div>
                                <div className='ip-box-input'>
                                    <label>Kategori{' '}
                                        {errors.category && errors.category.type === "required" && 
                                            <span className='error-product'>Category is Required</span>}
                                    </label>
                                    <Controller
                                        name="category"
                                        control={control}
                                        defaultValue={ dataPreview.category  || ""}
                                        render={({ field }) =>
                                            <select
                                                // defaultValue=""
                                                {...field}
                                            >
                                                <option value="" disabled>Pilih Kategori</option>
                                                {category?.map((value, i) => {
                                                    return (
                                                        <option
                                                            key={i}
                                                            className="color-black"
                                                            value={value.categories}
                                                        >
                                                            {handleCategories(value.id)}
                                                        </option>
                                                    )
                                                })
                                                }
                                            </select>}
                                            rules={{ required: true }}
                                    />
                                </div>
                                <div className='ip-box-input'>
                                    <label>Deskripsi{' '}
                                        {errors.description && errors.description.type === "required" && 
                                            <span className='error-product'>Description is Required</span>}
                                    </label>
                                    <textarea
                                        placeholder='Deskripsi'
                                        rows={5}
                                        defaultValue={dataPreview.description || undefined}
                                        {...register("description", {required:true})}
                                    />
                                </div>
                                <div className='ip-box-input'>
                                    <label>Foto</label>
                                    <div className='input-image'>
                                        <input
                                            type="file"
                                            accept="image/png"
                                            onChange={(e) => handleInputImage(e)}
                                            required={(dataPreview.image || product?.img) ? false: true}
                                        />
                                        <img
                                            src={ image || dataPreview.image || `data:image/png;base64,${product?.img}`}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className='ip-box-button'>
                                {!product &&
                                    <button
                                        type='submit'
                                        className='ip-button-preview'
                                        onClick={
                                            () => setValue('button', 'preview')
                                        }
                                        {...register('button')}
                                    >
                                        Preview
                                    </button>
                                }
                                    <button
                                        type='submit'
                                        className='ip-button-send'
                                        onClick={
                                            () => setValue('button', 'submit')
                                        }
                                        {...register('button')}
                                    >
                                        Terbitkan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default InfoProductDesktop