import React from 'react'
import './Home.css'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsDownload} from 'react-icons/bs'
import {AiFillLinkedin,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'
import Bio from '../Bio/Bio'

const Home=()=>{
    return(
        <header className="profile container">
        <div className="profile__container">
            <div className="profile__data">
                <div className="profile__border">
                    <div className="profile__perfil">
                    <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/39502572_311815072709355_9202775671510663168_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=174925&_nc_eui2=AeErc4OLZM5hiMuFbkb8GQSPAPalYUVp8VoA9qVhRWnxWoAXq6tlSGT4BPANLg9fRNNi_F2_aBqHL6WwgeLOFrYr&_nc_ohc=Hrf9WqVgsmQAX_5PbTU&_nc_ht=scontent.fdac14-1.fna&oh=00_AT9O_RtZCRaIzclOkN997G61X_yw7fnjvOHKANQVXnBKyw&oe=62AA24E4" alt="shihab"/>
                    </div>
                </div>
               
                <div>
                    <h2 className="profile__name">Shihab Ahmed</h2>
                    <h3 className="profile__profession">Software Engineer</h3>
                    
                    

                    <ul className="profile__social">
                        <a href="#" target="_blank" className="profile__socail__link">
                            {/* <i className="ri-instagram-line"></i> */}
                            <AiOutlineInstagram/>
                         </a>
                         <a href="https://www.linkedin.com/feed/" target="_blank" className="profile__socail__link">
                            {/* <i className="ri-linkedin-box-fill"></i> */}
                            <AiFillLinkedin/>
                        </a>
                        <a href="https://github.com/shihab-sa" target="_blank" className="profile__socail__link">
                            {/* <i className="ri-github-fill"></i> */}
                            <AiFillGithub/>
                        </a>
                    </ul>
                </div>

                </div>

                
               
                {/* another components  */}
                <Bio/>
                
            

            

            <div className="profile__info">
                <div className="profile__info__group">
                    <h5 className="profile__info__number">1.5</h5>
                    <h5 className="profile__info__descriptions">
                        years of <br/> experience
                    </h5>
                </div>

                <div className="profile__info__group">
                    <h5 className="profile__info__number">+5</h5>
                    <h5 className="profile__info__descriptions">
                        completed <br/>projects
                    </h5>
                </div>

                <div className="profile__info__group">
                    <h5 className="profile__info__number">+00</h5>
                    <h5 className="profile__info__descriptions">
                        Job<br/>changing
                    </h5>
                </div>

                
            </div>

           
            <div className="profile__buttons">
                <a download  href="shihab.pdf" className="button">
                    Download CV <BsDownload/>
                </a>
                <div className="profile__buttons__small">
                    <a href=" " target="_blank" className=" button  button__small button__gray">
                        {/* <i className="ri-whatsapp-line"></i> */}
                        <BsMessenger/>
                    </a>
                    <a href=" " target="_blank" className=" button  button__small button__gray">
                        {/* <i className="ri-messenger-line"></i> */}
                        <IoLogoWhatsapp/>
                    </a>
                </div>
            </div>
        </div>
        
    </header>
    )
}



export default Home