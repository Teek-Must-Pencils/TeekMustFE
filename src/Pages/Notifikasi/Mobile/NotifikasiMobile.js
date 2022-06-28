import React, { useEffect } from 'react';
import dummy from '../../../Assets/Img/dummyProduct.png';
import '../Notifikasi.css'

const data = [1,1,1,1]
const NotifikasiMobile = () => {

  useEffect(() => {
    
  
    // return () => {
    //   second
    // }
  }, [])
  
  return (
    <>
      <div className='container py-3' >
        {data.map((v, i)=>{
          return(
                <div className='mn-card' key={i}>
                    <div className='mn-content-image'>
                        <img className='w-100 rounded-5' src={dummy} alt='' />
                    </div>
                    <div className='mn-content-info'>
                      <div className='mn-content-title-info'>
                        <div className='mn-text-title'>Penawaran product</div>
                        <div className='mn-text-title'>waktu</div>
                      </div>
                      <span>Jam Tangan</span>
                      <span>Rp. 250.000</span>
                      <span>Ditawar Rp. 200.000</span>              
                    </div>
                  </div>
          )
        })}
      </div>
    </>
  )
}

export default NotifikasiMobile