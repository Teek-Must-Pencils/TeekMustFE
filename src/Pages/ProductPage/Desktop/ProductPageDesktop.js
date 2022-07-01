import React, { 
    // useEffect 
} from 'react';
import ModalBuyer from './ModalBuyerDesktop';
import { useNavigate } from 'react-router-dom';
import { ModalNotification } from '../../../Components';
import dummyProduct from '../../../Assets/Img/dummyProduct.png'
import dummyProfile from '../../../Assets/Img/profile.png'
import '../ProductPage.css'
import usePreview from '../../../Hooks/usePreview';


const ProductPageDesktop = (props) => {
    const {
        role,
        showModal,
        handleModalBuyer,
        notifMessage,
        showNotif,
        toogleNotif,
        onSubmitBuyerModalDesktop,
        onSubmitSellerModalDesktop,
    } = props;

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    

    const navigate = useNavigate();
    const dataPreview = usePreview();

    const handleSellerTerbit = () =>{
        const data = {
            name: dataPreview.name
        }
        onSubmitSellerModalDesktop(data)
    }

    const handleSellerEdit= () => {
        return navigate('/infoProduct')
    }

    let buttonBox;
    if(role.includes('seller')){
        buttonBox = 
        <>
            <button 
                className="btn btn-primary w-100 my-3"
                onClick={() => handleSellerTerbit()}
            >
                Terbitkan
            </button>
            <button 
                className="btn btn-outline-primary w-100 mb-3"
                onClick={() => handleSellerEdit()}
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


    const data = {
        name: "Jam Tangan Casio",
        category: "Aksesoris",
        image: dummyProduct,
        price: "Rp. 250.000",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        seller: "SellerUnknow",
        address: "Pencils Town"
    }
    
    // console.log(dataPreview.imageFile)
        
  return (
    <>
        <ModalNotification 
          show={showNotif} 
          close={toogleNotif} 
          message={notifMessage}
        //   success={}
        />
        <ModalBuyer 
            show={showModal} 
            close={handleModalBuyer} 
            onSubmitBuyerModalDesktop={onSubmitBuyerModalDesktop}
        />
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="d-flex flex-column">
                        <div className='d-flex flex-row justify-content-center'>
                            <img className='img-product' src={data.image||dataPreview.image} alt="" />
                        </div>
                        <div className='text-desc'>
                            <p> <b>Deskripsi</b> </p>
                            <p>
                               {data.description || dataPreview.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-4 px-0">
                    <div className='box-action'>
                        <h6>{data.name || dataPreview.name}</h6>
                        <p className="text-category">
                            {data.category || dataPreview.category}
                        </p>
                        <h6>{data.price || dataPreview.price}</h6>
                        {buttonBox}
                    </div>
                    <div className="box-action my-5">
                        <div className="d-flex flex-row gap-2">
                            <img src={dummyProfile} alt="" />
                            <div className='d-flex flex-column'>
                                <span><b>{data.seller || 'Nama Penjual'}</b></span>
                                <span className="text-profile">
                                    {data.address || "Alamat"}
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