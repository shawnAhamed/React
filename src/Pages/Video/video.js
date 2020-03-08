import React from 'react';
import '../../App.css';
import Header from '../../Components/CommonComponents/Header';
import Videostream from '../Video/videocomponent';


function VideosPage() {

  return (
    <div className="Home">
        <Header/>
        <Videostream/>
        
    </div>
  );
}

export default VideosPage;
