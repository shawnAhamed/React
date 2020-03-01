
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
      
      // var qid=this.props.match.params.id;
      // console.log(qid);
      const { match: { params } } = this.props;
      var qid=params.id;

      fetch("http://api.maya-apa.com/api/v1/web/question/"+qid+"/hello/73")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              datas: result,
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
                 <Card style={{ width: '100%',paddingbottom:'20px' }}>
                 <Card.Body style={{ backgroundColor: '#F2E1C6' }}>                  
                   <Row >
                   <Col xs="2"><Skeleton circle={true} height={55} width={55} /></Col> 
                   <Col xs="10" className="anonymousbox">
                   <Card.Subtitle className="mb-2 text-muted anonymousboxcontent">{"নাম প্রকাশে অনিচ্ছুক"  || <Skeleton count={1} width={50} />} </Card.Subtitle>
                   <Card.Subtitle className="mb-2 text-muted anonymousboxcontent">{datas.question.question_time || <Skeleton count={1} width={100} />}</Card.Subtitle>
                   </Col>
                   <div>{datas.question.body || <Skeleton count={1} width={300} />}</div>
                   </Row>   
                   <Row className="answer">
                   <Col xs="2"><img src=""/></Col> 
                   <Col xs="10">
                   <Card.Subtitle className="mb-2 anonymousboxcontent Drname">{datas.question.answeredBy || "Maya"}</Card.Subtitle>
                   <Card.Subtitle className="mb-2 text-muted anonymousboxcontent">{"MBBS" || <Skeleton count={1} width={100} />}</Card.Subtitle>
                   {/* <Card.Subtitle className="mb-2 text-muted anonymousboxcontent">{datas.question.question_time || <Skeleton count={1} width={100} />}</Card.Subtitle> */}
                   </Col>
                   </Row>
                   <Card.Text style={{ backgroundColor: '#F2E1C6' }}>
                   {datas.question.answer_body || <Skeleton count={2} width={300} />}
                   </Card.Text>
                   <div dangerouslySetInnerHTML={{ __html: datas.question.body }} />
                    

                   
                 </Card.Body>
                </Card>
            </div>

                </Container>
        </div>
          

          
        );
      }
    }
  }

  export default QuestionDetils;