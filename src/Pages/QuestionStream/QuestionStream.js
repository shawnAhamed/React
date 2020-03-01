import React from 'react';
import '../../App.css';
import NavigatonTab from '../../Components/CommonComponents/NavigationTab';
import Header from '../../Components/CommonComponents/Header';
import Stream from './stream';

function QuestionStream() {
  return (
    <div className="Home">
        <Header/>
        <Stream/>  
    </div>
  );
}

export default QuestionStream;
