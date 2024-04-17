import React from "react";
import './possibilties.css';
import img from '../../assets/possibility.png';

const Possibilties = () =>{
    return (
        <div className="poss-main" id="possibility">
               <div className="possibilties-img">
                <img src={img} alt="Poss" />
               </div>
               <div className="pos-text">
                <p>Request Early Access to Get Started</p>
                <h2>The possibilities are beyond your imagination</h2>
                <h6>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</h6>
                <h5>Request Early Access to Get Started</h5>
               </div>
        </div>
    )
}
export default Possibilties;