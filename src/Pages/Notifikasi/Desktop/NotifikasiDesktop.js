import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import dummy from '../../../Assets/Img/dummyProduct.png';
import { selectRole } from '../../../Redux/slice/authSlice';
import '../Notifikasi.css'

const data = [1,2,3,4]

const NotifikasiDesktop = () => {
  const navigate = useNavigate();
  const role = useSelector(selectRole);

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
      {role.includes("buyer") &&
        <div className='container py-3' >
          {data.map((value, i)=>{
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
                          <span>Tawaran Sebesar Rp. 200.000</span>    
                          <div className={`${i%2 ? 'dn-acc' : 'dn-reject'}`}>
                            {i%2 ? 'Terima' : 'Tolak'}
                          </div>          
                        </div>
                      </div>
              )
            })}
        </div>
      }
      { role.includes("seller") &&
        <div className='container py-3' >
          {data.map((value, i)=>{
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
                        <div className='dn-content-button'>
                          <button
                            className='btn-tawaran'
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
      }
    </>
  )
}

export default NotifikasiDesktop