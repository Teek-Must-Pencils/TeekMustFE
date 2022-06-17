import React from 'react';
import { ArrowLeft } from 'react-feather';
import '../InfoProduct.css';

const InfoProductDesktop = () => {
  return (
    <>
        <div className="container">
            <div class="row">
                <div class="col-2">
                    <div className='ip-content-button'>
                        <button 
                            className=''
                            // onClick=''
                        >
                            <ArrowLeft size='20px'/>
                        </button>
                    </div>
                </div>
                <div class="col-10">
                    <div className="ip-content-form">
                        <div className='ip-box-input'>
                            <label>Harga</label>
                            <input type="text" placeholder="Harga"/>
                        </div>
                        <div className='ip-box-input'>
                            <label>Harga</label>
                            <input type="text" placeholder="Harga"/>
                        </div>
                        <div className='ip-box-input'>
                            <label>Harga</label>
                            <input type="text" placeholder="Harga"/>
                        </div>
                    </div>
                </div>
            </div>

           
        </div>
    </>
  )
}

export default InfoProductDesktop