import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

const LandingPage=()=>{
    return(
        <div>
                <Navbar/>
                <Routes>
                    <Route path='' element={<Home/>}/>
                   
                </Routes>
        </div>
    )
}

export default LandingPage