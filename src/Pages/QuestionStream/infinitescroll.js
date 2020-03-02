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
class Loaddata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      datas: [],       
    };
  }



  loadFunc() {
    console.log("function called")
    // fetch("http://ai-web.maya-apa.com/get_personalized_question_web/0/0/")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         data: result.data
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
  }

 render() {
  const { error, isLoaded, data } = this.state;
   return (
    <div style={{height:'100px',overflow:'auto'}}>
    <InfiniteScroll
        pageStart={0}
        loadMore={this.loadFunc}
        hasMore={true || false}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false}
        className="text-center"
     >
        <div className="stramcard">
          
          
          
          </div> 
    </InfiniteScroll>
</div>

   )
 }
}

export default Loaddata