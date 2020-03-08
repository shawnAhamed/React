import React, { Component } from 'react';
import { IoMdGlobe } from "react-icons/io";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            results:{},
            loading:false,
            data:'',
            records: []

          }

    }

    handleOninputchange=(event)=>{
        const query =event.target.value;
        this.setState({query:query,loading:true,message:''}); 
        this.fetchsearchresult(query);

    };

    fetchsearchresult=(query)=>{
        const searchurl=`http://ai-web.maya-apa.com/search/0/?body=${query}`;
        fetch(searchurl)
        .then(res => res.json())
        .then(
          (result) => {

            if(result.status === 'fail'){
                this.setState({
                    isLoaded: true,
                    data: [],
                    records: []
                  });
            }else{
                this.setState({
                    isLoaded: true,
                    records: result.records
                  });
            }
            
            console.log(result)
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
     const{query,records}=this.state;
    //  let records = records
    //  console.log( 'render', records)
   return (
    <div className="container">
        <input
        style={{fontFamily:'FontAwesome'}}
        className="searchbar"
        type="text"
        value={query}
        id="search-input" 
        placeholder="খুঁজুন আপনার মনের যত জিজ্ঞাসা                                             
        &#xF002;"
        onChange={this.handleOninputchange}
        
         /> 
          <div className="searchresult">   
          {records.map(item => (  
              <Link to={"/questiondetails/"+item.id} style={{textDecoration:'none',color:'black',padding:'10px 10px'}}><div key={item.id}>{item.body.substring(0,50)}<hr/></div></Link>
          ))}
          
          </div>

         

    </div>
   


   )
 }
}

export default Search