import { Button } from 'bootstrap'
import React from 'react'
import dummyProfile from '../../../Assets/Img/profile.png'
import * as Icon from 'react-feather';
import './DaftarJualMobile.css'
import gambar1 from '../../../Assets/Img/card.png'
import gambar2 from '../../../Assets/Img/card1.png'

const DaftarJualMobile = () => {
  return (
    <div>
    <div className="container-sm">
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
                <button className="btn-edit">
                    Edit
                </button>
        </div>
    </div>
    <div className="row">
    <div className="col-sm-3">
        <div className="box-action">
        <b>Kategori</b><br></br>
        <button className="btn-filter">
        <b className="text-filter"><Icon.Box/> <span >Produk</span></b>
        </button>
        &ensp;&ensp;
        <button className="btn-filter">
            <Icon.Heart/> <span>Diminati</span>
        </button>
        &ensp;&ensp;
        <button className="btn-filter">
            <Icon.Box/> <span>Terjual</span>
        </button>
        </div>
    </div>
        
        <div className="col-sm-9">
        <div className="row">
            <div className="col-3 col-sm-3">
                <button type="button" className="box"><Icon.Plus/>
                    <br></br>
                    Tambah
                </button>
            </div>
            <div className="col-3 col-sm-3">
            <img src={gambar1} alt=""/>
            </div>
            <div className="col-3 col-sm-3">
            <img src={gambar1} alt=""/>
            </div>

            <div className="w-100"></div>
            <div className="col-3 col-sm-3">
            <img src={gambar2} alt=""/>
            </div>
            <div className="col-3 col-sm-3">
            <img src={gambar2} alt=""/>
            </div>
            <div className="col-3 col-sm-3">
            <img src={gambar2} alt=""/>
            </div>

            <div className="w-100"></div>
            <div className="col-3 col-sm-3">
            <img src={gambar1} alt=""/>
            </div>
            <div className="col-3 col-sm-3">
            <img src={gambar1} alt=""/>
            </div>
            <div className="col-3 col-sm-3">
            <img src={gambar1} alt=""/>
            </div>
        </div>
        </div>
        </div>

    </div>
    </div>
  )
}

export default DaftarJualMobile