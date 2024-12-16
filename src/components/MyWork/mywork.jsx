import React from "react";
import './mywork.css'
import logom from '../../logom.svg'
import mywork_data from '../../assets/mywork_data'
import Arrow_Icon from '../../assets/arrow-icon.svg'

const MyWork = () => {
    return (
        <div id="work" className="my-work">
            <div className="my-work-title">
                <h1>My latests work</h1>
                <img src={logom} alt="logo" />
            </div>
            <div className="my-work-container">
                {mywork_data.map((work,index) => {
                    return <img key={index} src={work.w_img} alt="" /> 
                })}
            </div>
            <div className="my-work-showmore">
                <p>Show More</p>
                <img src={Arrow_Icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork;