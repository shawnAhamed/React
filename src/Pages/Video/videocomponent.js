import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Nav,Navbar,Card,Button ,Row,Col,Image} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Videostream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      datas: [],       
    };
  }
  componentDidMount() {
    fetch("https://api.maya-apa.com/api/v1/web/maya/videos/7")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            datas: result,
            
          });
          console.log(result);
        
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        } 
      )
  }


 render() {
  const { error, isLoaded, data } = this.state;
   return (
       <div className="container">
       <Row >
           <Col xs="12" >
           <iframe width="100%" height="230px" src="https://www.youtube.com/embed/WigyzrKtVWQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </Col>
           <hr/>
          
       </Row>
       <Row>
           <Col xs="12">
               <h5>Related Questions</h5>
               <hr/>
               <p>আপু যারা বিষন্নতা তে আক্রান্ত তাদের কি জন্ম নিয়ন্ত্রণ পিল বিষন্নতা sdnvmjfnjsndfj <span style={{color:'blue'}}>uttor dekhun</span></p>
               <hr/>
           </Col>

           <Col xs="12">
           <h5>অন্যান্য ভিডিও</h5>
               <hr/>
               <a><img src="https://i.imgur.com/rgVisgY.jpg" className="img-fluid"></img></a>
               <hr/>
           </Col>

       </Row>

       </div>

   )
 }
}

export default Videostream