import React from 'react';
import '../../App.css';
import NavigatonTab from '../../Components/CommonComponents/NavigationTab';
import Header from '../../Components/CommonComponents/Header';
import Stream from './stream';
import Loaddata from './infinitescroll'

function QuestionStream() {
  return (
    <div className="Home">
        <Header/>
        <Stream/>  
        {/* <Loaddata/> */}
    </div>
  );
}

export default QuestionStream;
