import React from "react"
import './Home.css'
import AboutMe from'./AboutMe'
class Home extends React.Component{
    render(){
        return (
            <div>
                <div className="aboutMe">
              <AboutMe /></div>
            </div>
        )
    }
}
export default Home