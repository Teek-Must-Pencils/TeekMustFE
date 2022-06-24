import React, { useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import usePreview from '../../../Hooks/usePreview';
import '../InfoProduct.css';

const InfoProductDesktop = (props) => {
    const {
        onSubmitSellerInput,
        // handlePreview
    } = props;
    let navigate = useNavigate();
    const dataPreview = usePreview();
    const [image, setImage] = useState();
    const { register, handleSubmit, control, setValue } = useForm();

    if(dataPreview.image){
        setValue("imageFile",  dataPreview.imageFile);
        setValue("image", dataPreview.image)
    }
    
    const handleInputImage = (e) =>{
        setValue("imageFile",  e.target.files[0])
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImage(reader.result);
                setValue("image", reader.result)
          }
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleBack = () =>{
        navigate('/')
    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-1">
                    <div className='ip-content-button'>
                        <button 
                            className=''
                            onClick={()=> handleBack()}
                        >
                            <ArrowLeft size='20px'/>
                        </button>
                    </div>
                </div>
                <div className="col-11">
                    <form 
                        className="ip-content-form"
                        onSubmit={handleSubmit(onSubmitSellerInput)}
                    >
                        <div className='ip-box-input'>
                            <label>Nama Produk</label>
                            <input 
                                type="text" 
                                placeholder="Nama Produk"
                                name="nama"
                                defaultValue={dataPreview.name||undefined}
                                {...register("nama")}
                                // required
                            />
                        </div>
                        <div className='ip-box-input'>
                            <label>Harga Produk</label>
                            <input 
                                type="text" 
                                placeholder="Rp. 0,00"
                                defaultValue={dataPreview.price||undefined}
                                {...register("harga")}
                                // required
                            />
                        </div>
                        <div className='ip-box-input'>
                            <label>Kategori</label>
                            <Controller
                                name="kategori"
                                control={control}
                                defaultValue={dataPreview.category||""}
                                render={({ field }) =>  
                                <select 
                                    // defaultValue=""
                                    {...field} 
                                    // required
                                >
                                    <option value="" disabled>Pilih Kategori</option>
                                    <option className="color-black" value="1" >1</option>
                                    <option className="color-black" value="2" >2</option>
                                    <option className="color-black" value="3" >3</option>
                                    <option className="color-black" value="4" >4</option>
                                </select>}
                            />
                        </div>
                        <div className='ip-box-input'>
                            <label>Deskripsi</label>
                            <textarea 
                                placeholder='Deskripsi'
                                rows={5}
                                defaultValue={dataPreview.description||undefined}
                                {...register("deskripsi")}
                                // required
                            />
                        </div>
                        <div className='ip-box-input'>
                            <label>Foto</label>
                            <div className='input-image'>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleInputImage(e)}
                                    // required={dataPreview.image ? false: true}
                                />
                                <img 
                                    src={image || dataPreview.image} 
                                    alt="" 
                                />
                            </div>
                        </div>
                        <div className='ip-box-button'>
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
            </div>
        </div>
    </>
  )
}

export default InfoProductDesktop