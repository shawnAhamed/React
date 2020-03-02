import React, { Component } from 'react';
import { Nav,Navbar,Card,Button ,Row,Col,Image} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Mayaservices extends Component {
   

 render() {
   return (
    <div className="container">
        <Row>

        
            <Col  xs={3}  className="tilesview">
            <Link to="/recentquestions">
                <img src="https://i.imgur.com/u1K1Dyn.png" className="image-responsive service-images"/>
                <p style={{fontSize:'10px',color:'gray',padding:'0px 0px 0px 0px'}}>সাম্প্রতিক প্রশ্নোত্তর</p>
                </Link>
            </Col>
       


        <Col  xs={3}  className="tilesview">
            <img src="https://i.imgur.com/xNmpLiT.jpg" className="image-responsive service-images"/>
            <p style={{fontSize:'10px',color:'gray',padding:'0px 0px 5px 0px'}}>কথা বলুন মন খুলে</p>
        </Col>
        <Col  xs={3}  className="tilesview">
            <img src="https://i.imgur.com/xNmpLiT.jpg" className="image-responsive service-images"/>
            <p style={{fontSize:'10px',color:'gray',padding:'0px 0px 5px 0px'}}>ব্যাক্তিগত পণ্য কিনুন</p>
        </Col>
        <Col  xs={3}  className="tilesview">
            <img src="https://i.imgur.com/xNmpLiT.jpg" className="image-responsive service-images"/>
            <p style={{fontSize:'10px',color:'gray',padding:'0px 0px 5px 0px'}}>কুইজ খেলে পয়েন্ট জিতুন </p>
        </Col>
        <Col  xs={3}  className="tilesviewsecond">
            <img src="https://i.imgur.com/wzQrcwV.png" className="image-responsive service-images"/>
            <p style={{fontSize:'10px',color:'gray',padding:'0px 0px 5px 0px'}}>ডিউ ডেট জানুন</p>
        </Col>
        <Col  xs={3}  className="tilesviewsecond">
            <img src="https://i.imgur.com/xNmpLiT.jpg" className="image-responsive service-images"/>
            <p style={{fontSize:'10px',color:'gray',padding:'0px 0px 5px 0px'}}>কতটা বিষন্যতায় ভুগছেন</p>
        </Col>
        <Col  xs={3}  className="tilesviewsecond">
            <img src="https://i.imgur.com/xNmpLiT.jpg" className="image-responsive service-images"/>
            <p style={{fontSize:'10px',color:'gray',padding:'0px 0px 5px 0px'}}>বিএমআই ক্যল্কুলেটর </p>
        </Col>
        <Col  xs={3}  className="tilesviewsecond">
            <img src="https://i.imgur.com/xNmpLiT.jpg" className="image-responsive service-images"/>
            <p style={{fontSize:'10px',color:'gray',padding:'0px 0px 5px 0px'}}>কতটা উদ্বিগ্ন আপনি</p>
        </Col>
        
       
        
        </Row>
        
    </div>
   


   )
 }
}

export default Mayaservices