import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dummy from '../../../Assets/Img/dummyProduct.png';
import '../Notifikasi.css'

const data = [1,1,1,1]
const NotifikasiMobile = () => {
  const navigate = useNavigate()
  useEffect(() => {
    
  
    // return () => {
    //   second
    // }
  }, [])
  
  const handlePenawar = (id) =>{
    // return navigate(`/infoPenawar/${id}`) 
    return navigate(`/infoPenawar`) 
  }
  
  return (
    <>
      <div className='container py-3' >
        {data.map((value, i)=>{
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
                      <div className='mn-content-button'>
                        <button
                          className='mn-tbl-lihat'
                          onClick={handlePenawar.bind(null, value)}
                        >
                          Lihat tawaran
                        </button>
                      </div>             
                    </div>
                   
                  </div>
          )
        })}
      </div>
    </>
  )
}

export default NotifikasiMobile