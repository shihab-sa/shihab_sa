import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import BasicSkill from './components/BasicSkill/BasicSkill'
import Skill from './components/Skill/Skill'
import Projects from './components/Projects/Projects'

const LandingPage=()=>{
    return(
        <div>
                <Navbar/>
                <Routes>
                    <Route path='home' element={<Home/>}/>
                    <Route path='baseskill' element={<BasicSkill/>}/>
                    <Route path='skill' element={<Skill/>}/>
                    <Route path='projects' element={<Projects/>}/>
                </Routes>
        </div>
    )
}

export default LandingPage