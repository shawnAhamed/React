import React from 'react';
import '../App.css';
import NavigatonTab from '../Components/CommonComponents/NavigationTab';
import Header from '../Components/CommonComponents/Header';

function Errorpage() {
  return (
    <div className="Home">
        <Header/>

        <h1 className="text-center">Page not Found</h1>
        <NavigatonTab/>
        
        
      
    </div>
  );
}

export default Errorpage;
