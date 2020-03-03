
import React from 'react'
import { Nav,Navbar,Card,Container,Row,Col,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skeleton from 'react-loading-skeleton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FaRegComments } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";

import Backbuttonheader from '../../Components/CommonComponents/Backbuttonheader';


class QuestionDetils extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        datas: [],       
      };
    }
    componentDidMount() {
      const { match: { params } } = this.props;
      //console.log('props', this.props)
      var qid=params.id;
      var slug=params.slug;
      var tag_id=params.tag_id;
      console.log("params",qid,slug,tag_id)
      fetch("http://api.maya-apa.com/api/v1/web/question/"+qid+"/"+slug+"/"+tag_id)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              datas: result,
              
            });
            //console.log(result.question.specialist_profile_picture);
          
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
      
      
      const { error, isLoaded, datas } = this.state;
   
      if (error) {
        return <div><button className="btn btn-danger">Retry</button></div>;
      } 
      else if (!isLoaded) {
        return <div>
          <div>
          <h1 className="text-center">Loading ...</h1>
          </div>
        </div>;
      }
      else {
        return (
              
          <div className="QuestionDetils">
            <Backbuttonheader/>
                <Container>
                <div >
                 <Card style={{ width: '100%'}}>
                 <Card.Body style={{ backgroundColor: '#F2E1C6'}}>                  
                   <Row >
                   <Col xs="2"><Skeleton circle={true} height={55} width={55} /></Col> 
                   <Col xs="10" className="anonymousbox">
                   <Card.Subtitle className="mb-2 text-muted anonymousboxcontent">{"নাম প্রকাশে অনিচ্ছুক"  || <Skeleton count={1} width={50} />} </Card.Subtitle>
                   <Card.Subtitle className="mb-2 text-muted anonymousboxcontent">{datas.question.question_time || <Skeleton count={1} width={100} />}</Card.Subtitle>
                   </Col>
                   <div dangerouslySetInnerHTML={{ __html: datas.question.body }} ></div>
                   </Row>   
                   <Row className="answer">
                   <Col xs="2"><img src={datas.question.specialist_profile_picture} className="dravatar"/></Col> 
                   <Col xs="10">
                   <Card.Subtitle className="mb-2 anonymousboxcontent Drname">{datas.question.answeredBy || "Maya"}</Card.Subtitle>
                   <Card.Subtitle className="mb-2 text-muted anonymousboxcontent">{"MBBS" || <Skeleton count={1} width={100} />}</Card.Subtitle>
                   {/* <Card.Subtitle className="mb-2 text-muted anonymousboxcontent">{datas.question.question_time || <Skeleton count={1} width={100} />}</Card.Subtitle> */}
                   </Col>
                   </Row>
                   <Card.Text style={{ backgroundColor: '#F2E1C6' }} dangerouslySetInnerHTML={{ __html: datas.question.answer_body  }} >
                   {/* {datas.question.answer_body || <Skeleton count={2} width={300} />} */}
                   </Card.Text>
                   
                 </Card.Body>
                 <Row style={{textAlign:'center'}}>
                     <Col xs="4"><AiOutlineLike style={{margin:'5px',fontSize:'25px'}}/></Col>
                     <Col xs="4"><FaRegComments style={{margin:'5px',fontSize:'25px'}}/></Col>
                     <Col xs="4"><IoMdShareAlt style={{margin:'5px',fontSize:'25px'}}/></Col>
                   </Row>
                </Card>
            </div>
            <Card style={{ width: '100%',marginBottom:'50px'}}>
                 <Card.Body style={{ width: '100%' }}>
                 <Row> 
                    <Image src="https://i.imgur.com/xGJKYUX.jpg" fluid/>
                   </Row> 
                   <a href="https://shop.maya.com.bd/?utm_source=web_question_bottom_image&utm_medium=fahmid&utm_campaign=web_question_bottom_default_image_03_11_2019"><button className="btn btn-success" style={{ marginTop:'5px',width:'100'}}>Buy Now</button> </a>
                 </Card.Body>
            </Card>  
              </Container>
         </div>
          

          
        );
      }
    }
  }

  export default QuestionDetils;