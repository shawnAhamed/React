import React from 'react'
import '../../App.css';
import { Row,Col ,Container,Card} from 'react-bootstrap';
import logo from '../../Images/maya-logo.png'
import { FaSearch,FaBell,FaArrowLeft} from "react-icons/fa";


function Backbuttonheader (){

    return(
        <div className="Backbuttonheader">
                <Container>
                    <Row className="backbuuttonheader"> 
                        <Col xs={{ span:12}}>
                           <a href="/stream"><div className="backbuttonheadertext">
                           <FaArrowLeft className="backbutton"/> প্রশ্নোত্তর 
                            </div>
                            </a> 
                        </Col>
                        
                    </Row>
                </Container>
        </div>
    )



}

export default  Backbuttonheader;