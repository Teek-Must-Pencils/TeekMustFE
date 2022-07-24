import React, { 
  // useEffect 
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dummy from '../../../Assets/Img/dummyProduct.png';
import { selectRole } from '../../../Redux/slice/authSlice';
import '../Notifikasi.css'

const datas = [1,2,3,4]

const NotifikasiMobile = (props) => {
  const { data } = props;
  const navigate = useNavigate()
  const role = useSelector(selectRole);
  // useEffect(() => {
    
  
  //   // return () => {
  //   //   second
  //   // }
  // }, [])
  
  const handlePenawar = (id) =>{
    return navigate(`/infoPenawar/${id}`) 
    // return navigate(`/infoPenawar`) 
  }
  
  return (
    <>
    {role.includes("buyer") &&
      <div className='container py-3' >
        {datas.map((value, i)=>{
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
                          <span>Tawaran Sebesar Rp. 200.000</span>    
                          <div className={`${i%2 ? 'mn-acc' : 'mn-reject'}`}>
                            {i%2 ? 'ACCEPTED' : 'REJECT'}
                          </div>          
                        </div>
                      </div>
          )
        })}
      </div>
    }
    { role.includes("seller") &&
        <div className='container py-3' >
          {datas.map((value, i)=>{
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

export default NotifikasiMobile