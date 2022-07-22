import React from 'react';
import dummyProfile from '../../../Assets/Img/profile.png';
import * as Icon from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { DataNotFound } from '../../../Components';
import CardProduct from '../CardTawar';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import './DaftarTawarDesktop.css';


const DaftarTawarDesktop = (props) => {
    const { data, user, offer } = props;
    let navigate =  useNavigate();

    const handleEditProfile =  () => {
        return navigate('/infoProfile')
    }

    const myOffer = offer?.filter((value) => value.userId === user?.id);
    const myData = myOffer?.map((value) => {
        const dt = data?.find((product) => product.id === value.productId)
        const result = { ...dt, offer:{...value} }
        return result
    })

    const MyTransaksi = (props) =>{
        const { data, offer, user } = props;
        const myOffer = offer?.filter((value) => value.userId === user?.id)
        const dataSet = myOffer?.filter(value => value.status.includes('ACCEPTED'))?.map((value) => {
            const productId = parseInt(value.productId)
            const dt = data?.find((item) => item.id === productId)
            const result = {...dt, offer:{...value}}
            return result
        }).filter((v) => typeof v === 'object')
        // const myData = [...new Set(dataSet)];

        return(
            <>
                {dataSet?.length < 1  && <DataNotFound marker={'dfj2'}/>}
                {dataSet?.length >= 1 && dataSet?.map((value, i)=>{
                    return(
                        <div key={i} className='col-4 col-sm-4 my-2'>
                            <CardProduct data={value}/>
                        </div>
                    )}) 
                } 
            </>
        )
    }

  return (
    <>
        <div className="container-sm">
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
                                                <CardProduct data={value} />
                                            </div>
                                        )
                                    })}
                                </>
                            )} 
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                        <div className="row">
                            {(data?.length < 1 || data?.filter((value) => value?.wishlist === true).length < 1)  && 
                                <DataNotFound marker={'dft1'}/>
                            }
                            {data?.length >= 1 && data?.filter((value) => value?.wishlist === true).map((value, i)=>{
                                return(
                                    <div key={i} className='col-4 col-sm-4 my-2'>
                                        <CardProduct data={value}/>
                                    </div>
                                )
                            })
                            }
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