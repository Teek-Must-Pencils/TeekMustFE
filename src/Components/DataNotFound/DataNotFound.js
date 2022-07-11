import React from 'react';
import dummy from '../../Assets/Img/Group 33.png';
import './DataNotFound.css';

const DataNotFound = (props) => {
  const { marker } = props;
  let content;

  if(marker === 'dfj1'){
    content = 'Belum ada produkmu yang diminati'
  }else if(marker === 'dfj2'){
    content = 'Belum ada produkmu yang terjual'
  }else{
    content= 'Data Tidak Ada'
  }
  return (
    <>
      <div className='container-notFound'>
        <img src={dummy} alt="" />
        {content}
      </div>
    </>
  )
}

export default DataNotFound