import React from 'react'
import './Navabar.css'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import {MdContactMail} from 'react-icons/md'
import {RiProjector2Line} from 'react-icons/ri'


const Navbar=()=>{
    return(
        <div className='nav__container__click container'>
              <div className='nav__wrapper'>
              <div><Link to="home"><AiOutlineHome className='color__nave'/></Link></div>
               <div><Link to="baseskill"><BiBookAlt className='color__nave'/></Link></div>
               <div><Link to="skill"><MdWorkOutline className='color__nave'/></Link></div>
                <div> <Link to="contact"><MdContactMail className='color__nave'/></Link></div>
               <div><Link to="projects"><RiProjector2Line className='color__nave'/></Link></div>
              </div>
        </div>
    )
}

export default Navbar