import React  from 'react'
import dummyProfile from '../../../Assets/Img/profile.png'
import * as Icon from 'react-feather';
import './DaftarJualMobile.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../Redux/slice/authSlice';
import { CardProduct } from '../../../Components';
import { Nav, Tab } from 'react-bootstrap';

const DaftarJualMobile = (props) => {
    const { data } = props;
    let navigate = useNavigate();
    const user = useSelector(selectUser);

    const handleEditProfile =  () => {
        return navigate('/infoProfile');
    }

    const handleAddProduct = () =>{
        return navigate('/infoProduct')
    }

  return (
    <div>
        <div className="container-sm">
            {/* <font size="5"><b>Daftar Jual Saya</b></font> */}
            <div className="box-action my-5">
                <div className="d-flex flex-row justify-content-between">
                    <div className='d-flex flex-row gap-2'>
                        <img src={dummyProfile} alt="" />
                        <div className='d-flex flex-column'>
                            <span><b>{user}</b></span>
                            <span className="text-profile">
                                kota
                            </span>
                        </div>
                    </div>
                    <button className="btn-edit-mobile" onClick={handleEditProfile}>
                        Edit
                    </button>
                </div>
            </div>
            <Tab.Container 
                className="d-flex flex-col color-content" 
                id="left-tabs-example" 
                defaultActiveKey="1"
            >
                <div className='box-action mb-3'>
                    <p><b>Kategori</b></p>
                    <div className='d-flex flex-row justify-content-around'>
                         <Nav.Link eventKey="1" >
                            <div className='btn-filter btn-dt'>
                                <Icon.Box /> <span>Product</span>
                            </div>
                        </Nav.Link>
                        <Nav.Link eventKey="2" >
                            <div className='btn-filter btn-dt'>
                                <Icon.Heart /> <span>Diminati</span>
                            </div>
                        </Nav.Link>
                        <Nav.Link eventKey="3" >
                            <div className='btn-filter btn-dt'>
                                <Icon.ShoppingBag /> <span>Terjual</span>
                            </div>
                        </Nav.Link>
                    </div>
                </div>
               
                <Tab.Content className=''>
                    <Tab.Pane eventKey="1">
                        <div className="row">
                            <div className="col-4 col-sm-4 my-2">
                                <button type="button" className="box h-100"
                                    onClick={handleAddProduct}
                                >
                                    <Icon.Plus/> Tambah
                                </button>
                            </div>
                            {data.map((value, i)=>{
                                return(
                                    <div key={i} className='col-4 col-sm-4 my-2'>
                                        <CardProduct data={value}/>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                        <div className="row">
                            {data.map((value, i)=>{
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
                            {data.map((value, i)=>{
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

export default DaftarJualMobile