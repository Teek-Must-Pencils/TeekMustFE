import React from 'react';
import dummyProfile from '../../../Assets/Img/profile.png';
import * as Icon from 'react-feather';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { DataNotFound, CardProduct } from '../../../Components';
import CardTawar from '../CardTawar';
import CardWishList from '../CardWishList';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import './DaftarTawarDesktop.css';


const DaftarTawarDesktop = (props) => {
    const { 
        data, user, offer, 
        wishlist, wishlistLocal,
        handleNotification,handleMessage
    } = props;
    let navigate =  useNavigate();

    const handleEditProfile =  () => {
        return navigate('/infoProfile')
    }

    const myOffer = offer?.filter((value) => value.userId === user?.id);
    const myData = myOffer?.map((value) => {
        let result;
        const dt = data?.find((product) => product.id === value.productId)
        if(dt !== undefined){result = {...dt, offer:{...value}}}
        return result
    }).filter((v) => typeof v === 'object')

    const MyTransaksi = (props) =>{
        const { data, offer, user } = props;
        const myOffer = offer?.filter((value) => value.userId === user?.id)
        const dataSet = myOffer?.filter(value => value.status === 'accepted')?.map((value) => {
            let result;
            const productId = parseInt(value.productId)
            const dt = data?.find((item) => item.id === productId)
            if(dt !== undefined){result = {...dt, offer:{...value}}}
            return result
        }).filter((v) => typeof v === 'object')
        // const myData = [...new Set(dataSet)];

        return(
            <>
                {dataSet?.length < 1  && <DataNotFound marker={'dfj2'}/>}
                {dataSet?.length >= 1 && dataSet?.map((value, i)=>{
                    return(
                        <div key={i} className='col-4 col-sm-4 my-2'>
                            <CardTawar 
                                data={value}
                            />
                        </div>
                    )}) 
                } 
            </>
        )
    }

    const MyWishList = (props) =>{
        // eslint-disable-next-line no-unused-vars
        const { data, product, user, dataLocal } = props;
        // const myWishList = data?.filter((value) => value.user.id === user?.id)
        const myWishlistLocal = dataLocal?.map((value) => {
            const result = product?.find((item) => item.id === value)
            return result;
        })


        return(
            <>
                {/* {myWishList?.length < 1  && <DataNotFound marker={'dfj2'}/>}
                {myWishList?.length >= 1 && myWishList?.map((value, i)=>{
                    return(
                        <div key={i} className='col-4 col-sm-4 my-2'>
                            <CardProduct data={value}/>
                        </div>
                    )}) 
                }  */}
                {(myWishlistLocal === undefined || myWishlistLocal?.length < 1)  && <DataNotFound marker={'dfj2'}/>}
                {myWishlistLocal !== undefined && myWishlistLocal?.map((value, i)=>{
                    return(
                        <div key={i} className='col-4 col-sm-4 my-2'>
                            <CardWishList 
                                data={value}
                                handleNotification={handleNotification}
                                handleMessage={handleMessage}
                            />
                        </div>
                    )}) 
                } 
            </>
        )
    }

  return (
    <>
        <div className="container-sm">
        <h5><b>Daftar Tawar Saya</b></h5>
            <div className="box-action-df my-5">
                <div className="d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row gap-2'>
                        <img src={dummyProfile} alt="" />
                        <div className='d-flex flex-column'>
                            <span><b>{user?.username}</b></span>
                            <span className="text-profile">
                                {user?.address}
                            </span>
                        </div>
                    </div>
                    
                    <button className="btn-edit" onClick={handleEditProfile}>
                        Edit
                    </button>
                </div>
            </div>
            <Tab.Container 
                id="left-tabs-example" 
                defaultActiveKey="1"
            >
             <Row>
                <Col sm={3}>
                    <div className='box-action-df mb-3'>
                        <p><b>Kategori</b></p>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Link eventKey="1" >
                                <div className='btn-dt-d'>
                                    <Icon.Box /> <span>Ditawar</span>
                                </div>
                            </Nav.Link>
                            <hr/>
                            <Nav.Link eventKey="2" >
                                <div className='btn-dt-d'>
                                    <Icon.Heart /> <span>Diminati</span>
                                </div>
                            </Nav.Link>
                            <hr/>
                            <Nav.Link eventKey="3" >
                                <div className='btn-dt-d'>
                                    <Icon.ShoppingBag /> <span>Transaksi</span>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </div>
                </Col>
                            
               <Col sm={9}>
                <Tab.Content className=''>
                    <Tab.Pane eventKey="1">
                        <div className="row">
                            {myData?.length < 1  && <DataNotFound />}
                            {myData?.length >= 1 && (
                                <>
                                    {myData.map((value, i)=>{
                                        return(
                                            <div key={i} className='col-4 col-sm-4 my-2'>
                                                <CardTawar data={value} />
                                            </div>
                                        )
                                    })}
                                </>
                            )} 
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                        <div className="row">
                            <MyWishList 
                                data={wishlist} 
                                product={data}
                                user={user} 
                                dataLocal={wishlistLocal}
                                handleNotification={handleNotification}
                                handleMessage={handleMessage}
                            />
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                        <div className="row">
                            <MyTransaksi data={data} offer={offer} user={user}/>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
              </Col> 
            </Row>
            </Tab.Container>
        </div>
    </>
  )
}

export default DaftarTawarDesktop