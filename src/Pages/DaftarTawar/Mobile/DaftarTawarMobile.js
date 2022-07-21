import React  from 'react'
import dummyProfile from '../../../Assets/Img/profile.png'
import * as Icon from 'react-feather';
import './DaftarTawarMobile.css'
import { useNavigate } from 'react-router-dom';
import { DataNotFound } from '../../../Components';
import CardProduct from '../CardTawar';
import { Nav, Tab } from 'react-bootstrap';

const DaftarTawarMobile = (props) => {
    const { data, user, offer } = props;
    let navigate = useNavigate();

    const handleEditProfile =  () => {
        return navigate('/infoProfile');
    }

    const myOffer = offer?.filter((value) => value.userId === user?.id);
    const myData = myOffer?.map((value) => {
        const dt = data?.find((product) => product.id === value.productId)
        const result = { ...dt, offer:{...value} }
        return result
    })

  return (
    <div>
        <div className="container-sm">
            <font size="5"><b>Daftar Tawar Saya</b></font>
            <div className="box-action my-5">
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
                className="d-flex flex-col" 
                id="left-tabs-example" 
                defaultActiveKey="1"
            >
                <div className='box-action mb-3'>
                    <p><b>Kategori</b></p>
                    <div className='d-flex flex-row justify-content-around'>
                         <Nav.Link eventKey="1" >
                            <div className='btn-filter btn-dt'>
                                <Icon.Box /> <span>Ditawar</span>
                            </div>
                        </Nav.Link>
                        <Nav.Link eventKey="2" >
                            <div className='btn-filter btn-dt'>
                                <Icon.Heart /> <span>Diminati</span>
                            </div>
                        </Nav.Link>
                        <Nav.Link eventKey="3" >
                            <div className='btn-filter btn-dt'>
                                <Icon.ShoppingBag /> <span>Transaksi</span>
                            </div>
                        </Nav.Link>
                    </div>
                </div>
               
                <Tab.Content className=''>
                    <Tab.Pane eventKey="1">
                        <div className="row">
                            {myData?.length < 1  && <DataNotFound />}
                            {myData?.length > 1 && (
                                <>
                                    {myData.map((value, i)=>{
                                        return(
                                            <div key={i} className='col-4 col-sm-4 my-2'>
                                                <CardProduct data={value}/>
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
                                <DataNotFound marker={'dft2'}/>
                            }
                            {data?.length > 1 && data?.filter((value) => value?.wishlist === true).map((value, i)=>{
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
                            {(data?.length < 1 || data?.filter((value) => value?.sell === true).length < 1)  && 
                                <DataNotFound marker={'dft2'}/>
                            }
                            {data?.length > 1 && data?.filter((value) => value?.sell === true).map((value, i)=>{
                                return(
                                    <div key={i} className='col-4 col-sm-4 my-2'>
                                        <CardProduct data={value}/>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>

        </div>
    </div>
  )
}

export default DaftarTawarMobile