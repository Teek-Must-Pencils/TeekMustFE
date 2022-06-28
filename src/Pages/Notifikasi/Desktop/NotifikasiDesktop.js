import React, { useEffect } from 'react';
import dummy from '../../../Assets/Img/dummyProduct.png';
import '../Notifikasi.css'

const data = [1,1,1,1]
const NotifikasiDesktop = () => {

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
                <div className='dn-card' key={i}>
                    <div className='dn-content-image'>
                        <img className='w-100 rounded-5' src={dummy} alt='' />
                    </div>
                    <div className='dn-content-info'>
                      <div className='dn-content-title-info'>
                        <div className='dn-text-title'>Penawaran product</div>
                        <div className='dn-text-title'>waktu</div>
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

export default NotifikasiDesktop