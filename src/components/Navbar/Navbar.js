import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'


const Navbar=()=>{
    return(
        <div>
               <Link to="home"><AiOutlineHome/></Link>
        </div>
    )
}

export default Navbar