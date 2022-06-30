import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ArrowLeft } from 'react-feather';
import usePreview from '../../../Hooks/usePreview';
import { useNavigate } from 'react-router-dom';

const InfoProductMobile = (props) => {
  const {
    onSubmitMobileInput,
    // handlePreview
} = props;
  const navigate = useNavigate();
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
    navigate(-1)
  }

  return (
    <>
      <div className="container">
        <div className="row ipm-header">
          <div  className='col-1'>
              <button 
                  className='ipm-content-button'
                  onClick={() => handleBack()}
              >
                  <ArrowLeft size='20px'/>
              </button>
            </div>
          <div className="col-11">
            <div className='ipm-content-title'>
              Lengkapi Detail Produk
            </div>
          </div>
        </div>

        <div>
          <form 
            className="ipm-body"
            onSubmit={handleSubmit(onSubmitMobileInput)}
          >
            <div className='ipm-body-input'>
              <label>Nama Produk</label>
              <input
                type="text"
                placeholder="Nama Produk"
                defaultValue={dataPreview.name||undefined}
                {...register("nama")}
              />
            </div>
            <div className='ipm-body-input'>
              <label>Harga Produk</label>
              <input
                type="text"
                placeholder="Rp. 0,00"
                defaultValue={dataPreview.price||undefined}
                {...register("harga")}
              />
            </div>
            <div className='ipm-body-input'>
              <label>Kategori</label>
              <Controller
                  name="kategori"
                  control={control}
                  defaultValue={dataPreview.category||""}
                  render={({ field }) =>  
                  <select 
                      {...field} 
                      // required
                  >
                      <option value="" disabled>Pilih Kategori</option>
                      <option className="color-black" value="PENCIL_2B" >Pencils 2B</option>
                      <option className="color-black" value="COLOR_PENCIL_8" >Pencils Color</option>
                      <option className="color-black" value="3" >3</option>
                      <option className="color-black" value="4" >4</option>
                  </select>}
              />
            </div>
            <div className='ipm-body-input'>
              <label>Deskripsi</label>
              <textarea 
                  placeholder='Deskripsi'
                  rows={4}
                  defaultValue={dataPreview.description||undefined}
                  {...register("deskripsi")}
                  // required
              />
            </div>
            <div className='ipm-body-input'>
              <label>Deskripsi</label>
              <div className='ipm-body-inputImage'>
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
            <div className='ipm-body-buttonAction'>
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
    </>
  )
}

export default InfoProductMobile