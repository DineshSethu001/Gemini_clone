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
                <p>How can I help you</p>
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
        </div>
    </div>
  )
}

export default Main