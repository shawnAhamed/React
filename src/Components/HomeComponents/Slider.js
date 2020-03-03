import React, { Component } from 'react';
import { Nav,Navbar,Card,Button ,Row,Col,Image} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class Slider extends Component {
   

 render() {
   return (
    <Carousel autoPlay style={{height:'200px'}}>
    <div style={{backgroundColor:'#8C9DED'}}>
                    <Row style={{paddingTop:'30px'}}>
                      <Col xs={{ span:3,offset:1}}>
                          <img src="https://i.imgur.com/w0Tsmbz.png"/>
                        </Col>
                        <Col xs={{ span:7 }}>
                        <div className="text-left">
                        <h5>মায়া প্রেসক্রিপশন</h5>
                        <p><strike>ট১৯৯ </strike>১০০</p> 
                        <h5 style={{fontSize:'14px',color:'#fff'}}>ফোনেই নিনই ডিজিটাল প্রেসক্রিপশন<br/> নিরাপদ এবং গোপনীয় সেবা</h5>
                        <Button className="bannerbutton">এখুনি কিনুন</Button> 
                        </div>
                        </Col>
                  </Row>
                  <img/>
    </div>
    <div style={{backgroundColor:'#BFB1E0'}}>
                   <Row style={{paddingTop:'30px'}}>
                      <Col xs={{ span:3,offset:1}}>
                          <img src="https://i.imgur.com/w0Tsmbz.png"/>
                        </Col>
                        <Col xs={{ span:7 }}>
                        <div className="text-left">
                        <h5>মায়া অলয়েল প্রেসক্রিপশন</h5>
                        <p><strike>ট১৯৯ </strike>১০০</p> 
                        <h5 style={{fontSize:'14px',color:'#fff'}}>ফোনেই নিনই ডিজিটাল প্রেসক্রিপশন<br/> নিরাপদ এবং গোপনীয় সেবা</h5>
                        <Button className="bannerbutton">এখুনি কিনুন</Button> 
                        </div>
                        </Col>
                  </Row>
                  <img/>
                   </div>
    

    <div style={{backgroundColor:'#8C9DED'}} >
    
                  <Row style={{paddingTop:'30px'}}>
                      <Col xs={{ span:3,offset:1}} >
                          <img src="https://i.imgur.com/w0Tsmbz.png"/>
                        </Col>
                        <Col xs={{ span:7 }}>
                        <div className="text-left">
                        <h5>মায়া প্রেসক্রিপশন</h5>
                        <p><strike>ট১৯৯ </strike>১০০</p> 
                        <h5 style={{fontSize:'14px',color:'#fff'}}>ফোনেই নিনই ডিজিটাল প্রেসক্রিপশন<br/> নিরাপদ এবং গোপনীয় সেবা</h5>
                        <Button className="bannerbutton">এখুনি কিনুন</Button> 
                        </div>
                        </Col>
                  </Row>
                  <img/>
    </div>
</Carousel>
  
   )
 }
}

export default Slider