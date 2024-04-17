import React from "react";
import './footer.css';

const Footer = () =>{
    return (
       <div className="main-footer" id="footer">
        <div className="footer-cols">
            <div className="col-1">
               <h2>
                GPT-3
               </h2>
               <p>
               Crechterwoord
               <br/> K12 182 DK Alknjkcb,
               <br/>
                All Rights Reserved
               </p>
            </div>
            <div className="col-2">
                <h2>Links</h2>
                <a href="#1">Overons</a><br/>
                <a href="#2">Social Media</a><br/>
                <a href="#3">Counters</a><br/>
                <a href="#4">Contact</a><br/>
            </div>
            <div className="col-3">
                <h2>Creers</h2>
                <a href="#5">Terms & Conditions</a><br/>
                <a href="#6">Privacy Policy</a><br/>
                <a href="#7">Contact</a><br/>
            </div>
            <div className="col-4">
                 <h2>Get in touch</h2>
                 <a href="#8">Crechterwoord K12 182 DK Alknjkcb</a><br/>
                 <a href="#9">085-132567</a><br/>
                 <a href="#10">info@payme.net</a><br/>
            </div>
        </div>
        <div className="copywrite-footer">
           <h6>© 2021 GPT-3. All rights reserved.</h6>
        </div>
       </div>
    )
}
export default Footer