import React from "react"
import './AboutMe.css'
import MyPic from '../../../src/assets/images/myPic.jpeg'

class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <img src={MyPic} alt="Avatar"   /> 
                        <div className="container">
                            <h4><b>Rusu Madalina</b></h4>
                            <p>  FrontEnd Developer </p>
                        </div>
                </div>
            </div>
    )
}
}

export default AboutMe