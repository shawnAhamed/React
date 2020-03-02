import React from 'react'
import '../../App.css';
import { Row,Col ,Container,Card} from 'react-bootstrap';
import logo from '../../Images/maya-logo.png'
import { FaSearch,FaBell,FaArrowRight} from "react-icons/fa";
import { GiWorld} from "react-icons";
import { IoMdGlobe } from "react-icons/io";
import Search from './SearchComponent';

function Header (){
   
    return(
        <div className="header">
                <Container>
                   <Row style={{ backgroundColor: '#613ABD',paddingTop:'10px' }}>
                       <div ></div>
                       <Col xs="10"><img src="https://i.imgur.com/1WZMdEh.png"/></Col>
                       <Col xs="2"><IoMdGlobe className="top-icon"/></Col>
                       <Col xs="10">
                       <Search/>
                       </Col>    
                   </Row>
                </Container>
        </div>
    )



}

export default  Header;