import { Button } from 'bootstrap'
import React from 'react'
import dummyProfile from '../../../Assets/Img/profile.png'
import * as Icon from 'react-feather';
import './DaftarJualDesktop.css'

const DaftarJualDesktop = () => {
  return (
    <div>
    <div class="container-sm">
    <font size="5"><b>
    Daftar Jual Saya
    </b>
    </font>
    <div className="box-action my-5">
        <div className="d-flex flex-row gap-2">
            <img src={dummyProfile} alt="" />
                <div className='d-flex flex-column'>
                    <span><b>Nama Penjual</b></span>
                    <span className="text-profile">
                        kota
                    </span>
                </div>
                <button class="btn-edit">
                    Edit
                </button>
        </div>
    </div>

    <div className="d-flex flex-row gap-2">
        <div className="box-action my-5">
        <b>Kategori</b><br></br>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><button className="btn btn-semuaproduk"><Icon.Box/>Semua Produk</button></li>
            <li class="list-group-item"><button className="btn btn-diminati"><Icon.Heart/>Diminati</button></li>
            <li class="list-group-item"><button className="btn btn-terjual"><Icon.Box/>Terjual</button></li>
        </ul>
      
        </div>
        </div>
    </div>
    </div>
  )
}

export default DaftarJualDesktop