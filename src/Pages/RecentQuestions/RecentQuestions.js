import React from 'react';
import '../../App.css';
import NavigatonTab from '../../Components/CommonComponents/NavigationTab';
import Header from '../../Components/CommonComponents/Header';


import RecentQStream from '../RecentQuestions/RecentQstream'

function QuestionStream() {
  return (
    <div className="">
        <RecentQStream/> 
    </div>
  );
}
export default RecentQStream;
