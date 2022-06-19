import React, { useState } from 'react';
import { ArrowLeft } from 'react-feather';
import { useForm, Controller } from 'react-hook-form';
import '../InfoProduct.css';

const InfoProductDesktop = (props) => {
    const {
        onSubmitSellerInput
    } = props;
    const [image, setImage] = useState([]);
    const [imageFile, setImageFile] = useState([]);
    const { register, handleSubmit, control, setValue  } = useForm();

    const handleInputImage = (e) =>{
        setImageFile(e.target.files[0])
        setValue("image",  e.target.files[0])
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImage(reader.result);
          }
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    // console.log(imageFile)
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <div className='ip-content-button'>
                        <button 
                            className=''
                            // onClick=''
                        >
                            <ArrowLeft size='20px'/>
                        </button>
                    </div>
                </div>
                <div className="col-10">
                    <form 
                        className="ip-content-form"
                        onSubmit={handleSubmit(onSubmitSellerInput)}
                    >
                        <div className='ip-box-input'>
                            <label>Nama Produk</label>
                            <input 
                                type="text" 
                                placeholder="Nama Produk"
                                {...register("nama")}
                            />
                        </div>
                        <div className='ip-box-input'>
                            <label>Harga Produk</label>
                            <input 
                                type="text" 
                                placeholder="Rp. 0,00"
                                {...register("harga")}
                            />
                        </div>
                        <div className='ip-box-input'>
                            <label>Kategori</label>
                            <Controller
                                name="select"
                                control={control}
                                render={({ field }) =>  
                                <select 
                                    defaultValue=""
                                    {...field} 
                                >
                                    <option value="" disabled>Pilih Kategori</option>
                                    <option className="color-black" value="1" >1</option>
                                    <option className="color-black" value="2" >2</option>
                                    <option className="color-black" value="3" >2</option>
                                    <option className="color-black" value="4" >2</option>
                                </select>}
                            />
                        </div>
                        <div className='ip-box-input'>
                            <label>Deskripsi</label>
                            <textarea 
                                placeholder='Deskripsi'
                                rows={5}
                                {...register("kategori")}
                            />
                        </div>
                        <div className='ip-box-input'>
                            <label>Foto</label>
                            <div className='input-image'>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleInputImage(e)}
                                />
                                <img 
                                    src={image} 
                                    alt="" 
                                />
                            </div>
                        </div>
                        <div className='ip-box-button'>
                            <button
                                type='button'
                                className='ip-button-preview'
                            >
                                Preview
                            </button>
                            <button
                                type='submit'
                                className='ip-button-send'
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