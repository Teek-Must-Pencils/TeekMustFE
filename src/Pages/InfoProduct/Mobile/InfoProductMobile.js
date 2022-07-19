import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ArrowLeft } from 'react-feather';
import usePreview from '../../../Hooks/usePreview';
import { useNavigate } from 'react-router-dom';

const InfoProductMobile = (props) => {
  const {
    id,
    product,
    user,    
    onSubmitMobileInput,
    onSubmitMobileEdit,
    category
} = props;
  const navigate = useNavigate();
  const dataPreview = usePreview();
  const [image, setImage] = useState();
  const { register, handleSubmit, control, setValue } = useForm();

  if (dataPreview.image) {
    setValue("imageFile", dataPreview.imageFile);
    setValue("image", dataPreview.image)
    setValue('seller', user?.username)
    setValue('address', user?.address)
}else if(product){
    setValue("name", product?.name);
    setValue("category", product?.categories?.at(0).toLowerCase())
    setValue("imageFile", product?.imgB);
    setValue("image", `data:image/png;base64,${product?.imgB}`)
    setValue("description", product?.description)
    setValue("price", product?.price)
}else{
    setValue('seller', user?.username)
    setValue('address', user?.address)
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

  const handleCategories = (id) =>{
    let result;
    if (id === 1) { result = "Pencil 2B"}
    else if(id === 2){ result = "Color Pencil 12"}
    else if(id === 3){ result = "Color Pencil 24"}
    else if(id === 4){ result = "Color Pencil 8"}
    return result;
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
            onSubmit={handleSubmit(id ? onSubmitMobileEdit : onSubmitMobileInput)}
          >
          <input type="hidden" {...register('seller')} />
          <input type="hidden" {...register('address')} />

            <div className='ipm-body-input'>
              <label>Nama Produk</label>
              <input
                type="text"
                placeholder="Nama Produk"
                defaultValue={dataPreview.name||undefined}
                {...register("name")}
              />
            </div>
            <div className='ipm-body-input'>
              <label>Harga Produk</label>
              <input
                type="text"
                placeholder="Rp. 0,00"
                defaultValue={dataPreview.price||undefined}
                {...register("price")}
              />
            </div>
            <div className='ipm-body-input'>
              <label>Kategori</label>
              <Controller
                  name="category"
                  control={control}
                  defaultValue={dataPreview.category||""}
                  render={({ field }) =>  
                  <select 
                      {...field} 
                      // required
                  >
                      <option value="" disabled>Pilih Kategori</option>
                      {category?.map((value, i) =>{
                          return (
                                  <option 
                                      key={i}
                                      className="color-black" 
                                      value={value.categories}
                                  >
                                      {handleCategories(value.id)}
                                  </option>
                          )})
                      }
                  </select>}
              />
            </div>
            <div className='ipm-body-input'>
              <label>Deskripsi</label>
              <textarea 
                  placeholder='Deskripsi'
                  rows={4}
                  defaultValue={dataPreview.description||undefined}
                  {...register("description")}
                  // required
              />
            </div>
            <div className='ipm-body-input'>
              <label>Deskripsi</label>
              <div className='ipm-body-inputImage'>
                <input 
                    type="file"
                    accept="image/png"
                    onChange={(e) => handleInputImage(e)}
                    // required={dataPreview.image ? false: true}
                />
                <img 
                  src={image || dataPreview.image || `data:image/png;base64,${product?.imgB}`}
                  alt=""
                />
              </div>
            </div>
            <div className='ipm-body-buttonAction'>
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
        
      </div>
    </>
  )
}

export default InfoProductMobile