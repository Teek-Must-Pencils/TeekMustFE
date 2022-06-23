import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>this is home</p>
      <Link to="/infoProduct" >product</Link>
    </div>
  )
}

export default Home