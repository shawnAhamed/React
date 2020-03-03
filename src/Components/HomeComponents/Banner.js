import React, { Component } from 'react';
import { Nav,Navbar,Card,Button ,Row,Col,Image} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Banner extends Component {
   

 render() {
   return (
    <div className="container">
        <div className="full-banner">
            <div className="banner-content">
            <h3>নির্ভয়ে খুলে বলুন <br/> মনের কথা,</h3>
            <h5 style={{fontSize:'14px',color:'gray',fontFamily:'Baloo Da'}}>পরিচয় গোপন রেখে ফ্রি বিশেষজ্ঞ <br/> পরামর্শ পেতে প্রশ্ন করুন</h5>
            <Button className="bannerbutton">শুরু করুন এখুনি</Button>
            <p style={{fontSize:'12px',color:'gray'}}>বিশেষজ্ঞের সাথে কথা বলতে <br/> প্রেসক্রিপশন প্যাকেজ কিনুন </p>
            </div>
            
        </div>
    </div>
   


   )
 }
}

export default Banner