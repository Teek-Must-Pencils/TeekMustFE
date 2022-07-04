import React from 'react'
import dummyProfile from '../../../Assets/Img/profile.png'
import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../../Redux/slice/authSlice'
import './DaftarJualDesktop.css'
import { CardProduct } from '../../../Components';


const DaftarJualDesktop = (props) => {
    const { data } = props;
    let navigate =  useNavigate();
    const user = useSelector(selectUser);

    const handleEditProfile =  () => {
        return navigate('/infoProfile')
    }

    const handleAddProduct = () =>{
        return navigate('/infoProduct')
    }

  return (
    <>
        <div class="container-sm">
            <h5><b>Daftar Jual Saya</b></h5>
            <div className="box-action my-5">
                <div className="d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row gap-2'>
                        <img src={dummyProfile} alt="" />
                        <div className='d-flex flex-column'>
                            <span><b>{user}</b></span>
                            <span className="text-profile">
                                kota
                            </span>
                        </div>
                    </div>
                    
                    <button class="btn-edit" onClick={handleEditProfile}>
                        Edit
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <div className="box-action">
                    <b>Kategori</b><br></br>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><button className="btn btn-semuaproduk"><Icon.Box/>Semua Produk</button></li>
                        <li class="list-group-item"><button className="btn btn-diminati"><Icon.Heart/>Diminati</button></li>
                        <li class="list-group-item"><button className="btn btn-terjual"><Icon.Box/>Terjual</button></li>
                    </ul>
                    </div>
                </div>
                    <div class="col-sm-9">
                        <div class="row">
                            <div class="col-3 col-sm-3 my-2">
                                <button 
                                    className="box h-100"
                                    type="button" 
                                    onClick={handleAddProduct}
                                >
                                    <Icon.Plus/> Tambah
                                </button>
                            </div>
                            {data.map((value) => {
                                return(
                                     <div class="col-3 col-sm-3 my-2">
                                       <CardProduct data={value} />
                                    </div>
                                )
                            })

                            }
                           
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DaftarJualDesktop