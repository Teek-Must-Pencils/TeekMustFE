import React from 'react'
import dummyProfile from '../../../Assets/Img/profile.png'
import * as Icon from 'react-feather';
import { useNavigate } from 'react-router-dom';
import './DaftarJualDesktop.css'
import { CardProduct, DataNotFound } from '../../../Components';
import CardJual from '../CardJual';
import { Tab, Nav, Row, Col } from 'react-bootstrap';


const DaftarJualDesktop = (props) => {
    const { data, user, offer } = props;
    let navigate =  useNavigate();

    const handleEditProfile =  () => {
        return navigate('/infoProfile')
    }

    const handleAddProduct = () =>{
        return navigate('/infoProduct')
    }
    
    const MyDiminati = (props) => {
        const { data, user, offer  } = props

        const dataRaw = data.filter((value) => value.seller === user.username)
        const dataSet = offer?.map((value) => {
            const dt = dataRaw.find((item) => item.id === value.productId)
            const result = {...dt, offer:{...value}}
            return result
        }).filter((v) => typeof v === 'object')

        return(
            <>
                {dataSet?.length < 1  && <DataNotFound />}
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
         const { data, offer, user } = props;
        const dataRaw = data.filter((value) => value.seller === user.username)
        const dataSet = offer?.filter(value => value.status.includes('ACCEPTED'))?.map((value) => {
            const dt = dataRaw.find((item) => item.id === value.productId)
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
                    <div className='d-flex flex-row gap-2'>
                        <img src={dummyProfile} alt="" />
                        <div className='d-flex flex-column'>
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
                            {data?.length < 1  && <DataNotFound />}
                            {data?.length >= 1 && data?.filter((value) => value.seller === user.username).length >= 1 && (
                                <>
                                    <div className="col-4 col-sm-4 my-2">
                                        <button type="button" className="box h-100"
                                            onClick={handleAddProduct}
                                        >
                                            <Icon.Plus/> Tambah
                                        </button>
                                    </div>
                                    {data.filter((value) => value.seller === user.username)?.map((value, i)=>{
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
                            <MyDiminati data={data} user={user} offer={offer} />
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                        <div className="row">
                           <MyTransaksi data={data} user={user} offer={offer}/>
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