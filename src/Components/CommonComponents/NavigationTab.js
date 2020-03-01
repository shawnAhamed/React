import React from 'react';
import '../../App.css';
import { Row,Col ,Container} from 'react-bootstrap';
import { FaHome,FaShoppingBag,FaUserAlt} from "react-icons/fa";
import { GoCommentDiscussion} from "react-icons/go";
import { IoIosPaper} from "react-icons/io";

function NavigatonTab() {
    return (
      <div className="NavigatonTab">

                    <Container>
                    <Row className="bottom-nav"> 
                       <Col xs={{ span: 3}}> <a href="/" className="enchortag"> <FaHome className="navicons"/><p className="menuname">অবতরন</p></a></Col>
                       <Col xs={3}> <a href="/stream" className="enchortag"><GoCommentDiscussion className="navicons"/><p className="menuname">প্রশ্নোত্তর </p></a></Col>
                       <Col xs={3}><a href="https://shop.maya.com.bd" className="enchortag"><FaShoppingBag className="navicons"/><p className="menuname">শপ</p></a></Col>
                       <Col xs={3}><a href="https://blog.maya.com.bd" className="enchortag"><IoIosPaper className="navicons"/><p className="menuname">সাবস্ক্রিপসন</p></a></Col>
                       {/* <Col xs={3}><a href="/profile" className="enchortag"><FaUserAlt className="navicons"/><p className="menuname">প্রোফাইল</p></a></Col> */}
                        
                    </Row>
                    </Container>
        
      </div>
    );
  }
  
  export default NavigatonTab;