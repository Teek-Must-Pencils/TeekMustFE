import React from 'react';
import { ArrowLeft } from 'react-feather';

const InfoProductMobile = () => {
  return (
    <>
      <div className="container">
        <div className="row ipm-header">
          <div  className='col-1'>
              <button 
                  className='ipm-content-button'
                  // onClick=''
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
            // onSubmit={}
          >
            <div className='ipm-body-input'>
              <label>Nama Produk</label>
              <input
                type="text"
                placeholder="Nama Produk"
              />
            </div>
            <div className='ipm-body-input'>
              <label>Harga Produk</label>
              <input
                type="text"
                placeholder="Rp. 0,00"
              />
            </div>
            <div className='ipm-body-input'>
              <label>Kategori</label>
              <select
                defaultValue=""
              >
                <option value="" disable>Pilih Kategori</option>
                <option className="color-black" value="1" disable>1</option>
                <option className="color-black" value="2" disable>2</option>
              </select>
            </div>
            <div className='ipm-body-input'>
              <label>Deskripsi</label>
              <textarea 
                  placeholder='Deskripsi'
                  rows={4}
                  // defaultValue={dataPreview.description||undefined}
                  // {...register("deskripsi")}
                  // required
              />
            </div>
            <div className='ipm-body-input'>
              <label>Deskripsi</label>
              <div className='ipm-body-inputImage'>
                <input 
                    type="file"
                    accept="image/*"
                />
                <img 
                  src=""
                  alt=""
                />
              </div>
            </div>
            <div className='ipm-body-buttonAction'>
              <button
                className='ip-button-preview'
              >
                Preview
              </button>
              <button
                className='ip-button-send'
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