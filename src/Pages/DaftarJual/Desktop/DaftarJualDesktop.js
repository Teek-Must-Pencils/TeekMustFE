import React from 'react'
import dummyProfile from '../../../Assets/Img/profile.png'
import * as Icon from 'react-feather';
import { useNavigate } from 'react-router-dom';
import './DaftarJualDesktop.css'
import { CardProduct, DataNotFound } from '../../../Components';
import CardJual from '../CardJual';
import { Tab, Nav, Row, Col } from 'react-bootstrap';


const DaftarJualDesktop = (props) => {
    const { product, user, offer } = props;
    let navigate =  useNavigate();

    const handleEditProfile =  () => {
        return navigate('/infoProfile')
    }

    const handleAddProduct = () =>{
        return navigate('/infoProduct')
    }
    
    const MyDiminati = (props) => {
        const { datas, users, offers  } = props

        const dataRaw = datas?.filter((value) => value.seller === users?.username)
        const dataSet = offers?.map((value) => {
            let result;
            const dt = dataRaw?.find((item) => item.id === value.productId)
            if(dt !== undefined){result = {...dt, offer:{...value}}}
            return result
        }).filter((v) => typeof v === 'object')
  
        return(
            <>
                {dataSet?.length < 1 && <DataNotFound />}
                {dataSet?.length >= 1 && (
                    <>
                        {dataSet?.map((value, i)=>{
                            return(
                                <div key={i} className='col-4 col-sm-4 my-2'>
                                    <CardJual data={value}/>
                                </div>
                            )})
                        }
                    </>
                )}
            </>
        )
    }

    const MyTransaksi = (props) =>{
         const { datas, offers, users } = props;
        const dataRaw = datas?.filter((value) => value.seller === users?.username)
        const dataSet = offers?.filter(value => value.status === 'accepted')?.map((value) => {
            let result;
            const dt = dataRaw.find((item) => item.id === value.productId)
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
                            <CardJual data={value}/>
                        </div>
                    )}) 
                } 
            </>
        )
    }


  return (
    <>
        <div className="container-sm">
            <h5><b>Daftar Jual Saya</b></h5>
            <div className="box-action-df my-5">
                <div className="d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row gap-3'>
                        <img className='djd-img-profile'
                           src={user?.imgB ? `data:image/png;base64,${user?.imgB}` : dummyProfile} alt="" 
                        />
                        <div className='d-flex flex-column justify-content-center '>
                            <span><b>{user?.username || '-'}</b></span>
                            <span className="text-profile">
                                {user?.address || '-'}
                            </span>
                        </div>
                    </div>
                    
                    <button className="btn-edit" onClick={handleEditProfile}>
                        Edit
                    </button>
                </div>
            </div>
            <Tab.Container 
                className="d-flex flex-col color-content" 
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
                                    <Icon.Box /> <span>Product</span>
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
                                    <Icon.DollarSign /> <span>Terjual</span>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </div>
                </Col>
                            
               <Col sm={9}>
                <Tab.Content className=''>
                    <Tab.Pane eventKey="1">
                        <div className="row">
                            {(product?.length < 1 || product?.filter((value) => value.seller === user.username).length < 1)  && (
                                    <div className="container">
                                        <div className='row'>
                                            <div className='col-3'>
                                                <button type="button" className="box dj-NotFound"
                                                    onClick={handleAddProduct}
                                                >
                                                    <Icon.Plus/> Tambah
                                                </button>
                                            </div>
                                            <div className='col-9'><DataNotFound /></div>
                                        </div>
                                    </div>
                            )}
                            {product?.length >= 1 && product?.filter((value) => value.seller === user.username).length >= 1 && (
                                <>
                                    <div className="col-4 col-sm-4 my-2">
                                        <button type="button" className="box h-100"
                                            onClick={handleAddProduct}
                                        >
                                            <Icon.Plus/> Tambah
                                        </button>
                                    </div>
                                    {product.filter((value) => value.seller === user.username)?.map((value, i)=>{
                                        return(
                                            <div key={i} className='col-4 col-sm-4 my-2'>
                                                <CardProduct data={value}/>
                                            </div>
                                        )})
                                    }
                                </>
                            )}
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                        <div className="row">
                            <MyDiminati datas={product} users={user} offers={offer} />
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                        <div className="row">
                           <MyTransaksi datas={product} users={user} offers={offer}/>
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

export default DaftarJualDesktop