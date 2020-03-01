import React from 'react';
import '../../App.css';
import NavigatonTab from '../../Components/CommonComponents/NavigationTab';
import Header from '../../Components/CommonComponents/Header';
import Banner from '../../Components/HomeComponents/Banner';
import Mayaservices from '../../Components/HomeComponents/MayaServices';
import Slider from '../../Components/HomeComponents/Slider';
import Stream from '../QuestionStream/stream';

function Home() {
  return (
    <div className="Home">
        <Header/>
        <Banner/>
        <Mayaservices/>
        <Slider/>
        <Stream/>
    </div>
  );
}

export default Home;
