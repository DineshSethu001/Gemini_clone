import React from 'react'

import './main.css'
 import { assets} from '../../assets/assets'

function Main() {
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
                                    <div className="main-container">
                                        <div className="greet">
                                            <p><span>Hello, Dev.</span></p>
                                            <p>How can I help you today?</p>
                                        </div>
                                        <div className="cards">
                                            <div className="card">
                                                <p>Suggest me a tourist spot on summbere</p>
                                                <img src={assets.compass_icon} alt="" />
                                            </div>
                                            <div className="card">
                                                <p>Suggest me a tourist spot on winter</p>
                                                <img src={assets.bulb_icon} alt="" />
                                            </div>
                                            <div className="card">
                                                <p>Suggest me a tourist spot on monsoon</p>
                                                <img src={assets.message_icon} alt="" />
                                            </div>
                                            <div className="card">
                                                <p>Suggest me a tourist spot on cold</p>
                                                <img src={assets.code_icon} alt="" />
                                            </div>
                                            
                                        </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here ' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini can make mistakes, so double-check it
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main