import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Errorpage from '../src/Pages/errorpage';
import Home from '../src/Pages/HomePage/home';
import QuestionStream from '../src/Pages/QuestionStream/QuestionStream';
import NavigationTab from '../src/Components/CommonComponents/NavigationTab';
import QuestionDetails from '../src/Pages/QuestonDetailsPage/Questiondetails';
import Detailspage from '../src/Pages/QuestonDetailsPage/Questiondetails';
import RecentQStream from '../src/Pages/RecentQuestions/RecentQuestions';
import Shop from '../src/Pages/Shoppage/shop';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'



ReactDOM.render((
    <Router>
      <NavigationTab/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/stream" component={QuestionStream} />
      <Route path="/questiondetails/:id/:slug/:tag_id" component={QuestionDetails} />
      <Route path="/questiondetails/" component={Detailspage} />
      <Route path="/recentquestions" component={RecentQStream} />
      <Route path="/shop" component={Shop} />
      <Route path="/*" component={Errorpage} />
      </Switch>

    </Router>),
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
