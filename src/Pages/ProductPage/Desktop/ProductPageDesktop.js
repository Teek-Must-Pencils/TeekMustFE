import React, { 
    // useEffect 
} from 'react';
import ModalBuyer from './ModalBuyerDesktop';
import { useNavigate } from 'react-router-dom';
import { ModalNotification } from '../../../Components';
// import dummyProduct from '../../../Assets/Img/dummyProduct.png'
import dummyProfile from '../../../Assets/Img/profile.png'
import '../ProductPage.css'
import usePreview from '../../../Hooks/usePreview';
import { ArrowLeft } from 'react-feather';


const ProductPageDesktop = (props) => {
    const {
        product,
        role,
        showModal,
        handleModalBuyer,
        notifMessage,
        showNotif,
        toogleNotif,
        onSubmitBuyerModalDesktop,
        onSubmitSellerModalDesktop,
    } = props;

    const navigate = useNavigate();
    const dataPreview = usePreview();

    const handleSellerTerbit = () =>{
        const data = {
            name: dataPreview.name
        }
        onSubmitSellerModalDesktop(data)
    }

    const handleSellerEdit= (id) => {
        if(id){
            return navigate(`/infoProduct/${id}`)
        }else{
            return navigate('/infoProduct')
        }
    }

    let buttonBox;
    if(role.includes('seller')){
        buttonBox = 
        <>
        {dataPreview.seller &&
            <button 
                className="btn btn-primary w-100 my-3"
                onClick={() => handleSellerTerbit()}
            >
                Terbitkan
            </button>
        }
            <button 
                className="btn btn-outline-primary w-100 mb-3"
                onClick={() => handleSellerEdit(product?.id)}
            >
                Edit
            </button>
        </>
    }else{
        buttonBox=  <>
            <button 
                className="button-buyer"
                onClick={handleModalBuyer}
            >
                Saya tertarik dan ingin nego
            </button>
        </>
    }

    // console.log(dataPreview.image)
    const handleBack = () => {
        navigate('/')
    }


        
  return (
    <>
        <ModalNotification 
          show={showNotif} 
          close={toogleNotif} 
          message={notifMessage}
        //   success={}
        />
        <ModalBuyer 
            product={product}
            show={showModal} 
            close={handleModalBuyer} 
            onSubmitBuyerModalDesktop={onSubmitBuyerModalDesktop}
        />
        <div className="container container-content">
        <div className="button-back-product">
                <button
                    className=''
                    onClick={() => handleBack()}
                >
                    <ArrowLeft size='20px' />
                </button>
            </div>
            <div className="row">
                <div className="col-8">
                    <div className="d-flex flex-column">
                        <div className='d-flex flex-row justify-content-center'>
                            <img 
                                className='img-product' 
                                src={dataPreview.image || `data:image/png;base64,${product?.imgB}`} 
                                alt="" 
                            />
                        </div>
                        <div className='text-desc'>
                            <p> <b>Deskripsi</b> </p>
                            <div className='text-warp'>
                               {product?.description || dataPreview.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='box-action'>
                        <h6><b>{product?.name || dataPreview.name}</b></h6>
                        <p className="text-category">
                            {product?.categories || dataPreview.category}
                        </p>
                        <p className='text-price'>Rp. {product?.price || dataPreview.price}</p>
                        {buttonBox}
                    </div>
                    <div className="box-action my-5">
                        <div className="d-flex flex-row gap-2">
                            <img src={dummyProfile} alt="" />
                            <div className='d-flex flex-column p-1'>
                                <span><b>{product?.seller || 'Nama Penjual'}</b></span>
                                <span className="text-profile">
                                    {product?.city || "Alamat"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductPageDesktop