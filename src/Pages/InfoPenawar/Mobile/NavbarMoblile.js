import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

const NavbarMoblile = () => {
    const navigate = useNavigate();


    const handleBack = () => {
        navigate('/')
    }
    return (
        <>
            <div className="row ipm-header">
                <div className='col-1'>
                    <button
                        className='ipm-content-button'
                        onClick={() => handleBack()}
                    >
                        <ArrowLeft size='20px' />
                    </button>
                </div>
                <div className="col-11">
                    <div className='ipm-content-title'>
                        Lengkapi Detail Produk
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavbarMoblile