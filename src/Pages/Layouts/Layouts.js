import React from 'react'
import {Navbar} from '../../Components'

const Layouts = ({children}) => {
  return (
    <>
    <Navbar/>
        {children}
    </>
  )
}

export default Layouts