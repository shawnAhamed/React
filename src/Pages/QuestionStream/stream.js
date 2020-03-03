import React from 'react'
import { Nav,Navbar,Card,Button ,Row,Col,Image} from 'react-bootstrap';
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



class Stream extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        datas: []
      };
    }
    componentDidMount() {
      fetch("http://ai-web.maya-apa.com/get_personalized_question_web/0/1/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result.data
            });
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
          <div className="stramcard" style={{marginBottom:'50px',}}>
          {data.map(item => (
            item.response_type == 'QA' ?
                
                 <Card style={{ width: '100%',backgroundColor: '#F2E1C6' }} key={item.question_id}>
                 <Card.Body>
                   <Card.Title>{item.question_body || <Skeleton count={1} width={300} />}</Card.Title>
                   <Row>
                   <Col xs="2"><img src="https://i.imgur.com/BWi8fb8.jpg" className="dravatar"/></Col> 
                   <Col xs="10">
                   <Card.Subtitle className="mb-2 text-muted">{item.specialist_name || <Skeleton count={1} width={50} />} </Card.Subtitle>
                   <Card.Subtitle className="mb-2 text-muted">{item.designation}</Card.Subtitle>
                   <Card.Subtitle className="mb-2 text-muted">{item.qualification}</Card.Subtitle>
                   </Col>
                   </Row>
                   <Card.Text>
                     {item.answer || <Skeleton count={1} width={300} />}
                   </Card.Text>
                   <Link to={"/questiondetails/"+item.question_id+'/'+item.question_body.substring(0,20)+'/'+item.tag_id}><Button variant="outline-info" className="pull-right">Details</Button></Link>
                   
                 </Card.Body>
                 <Row style={{textAlign:'center'}}>
                     <Col xs="4"><AiOutlineLike style={{margin:'5px',fontSize:'25px'}}/> {item.likes}</Col>
                     <Col xs="4"><FaRegComments style={{margin:'5px',fontSize:'25px'}}/>{item.comments}</Col>
                     <Col xs="4"><IoMdShareAlt style={{margin:'5px',fontSize:'25px'}}/></Col>
                   </Row>
                </Card>
            :
           
                <Card style={{ width: '100%',backgroundColor:'#F2C6CB' }} key={item.card_id}>
                 <Card.Body>
                   <Row> 
                    <Image src={item.image_url} fluid/>
                   </Row>    
                 </Card.Body>
                </Card>       
          ))}
</div> 
      
        );
      }
    }
  }

  export default Stream;