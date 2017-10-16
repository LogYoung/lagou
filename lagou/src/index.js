import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory,IndexRoute,browserHistory} from 'react-router';
import "./css/index.css";
import App from './App';
import Fistindex from './pages/Fistindex';
import Search from './pages/Search';
import User from './pages/User';
import Login from "./pages/login";
import Regeist from "./pages/regeist";
import Joblist from "./pages/Joblist";
import Diytext from "./pages/Diytext";
import Sendresume from "./pages/send";
import Interview from "./pages/Interview";
import Invitation from "./pages/Invitation";
import Collect from "./pages/Collect";


import registerServiceWorker from './registerServiceWorker';

render(
	<Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Fistindex}/>
        <Route path="fistindex" component={Fistindex} />
        <Route path='search' component={Search} />
        <Route path='user' component={User} />
        <Route path='login' component={Login} />
        <Route path='regeist' component={Regeist} />
        <Route path='joblist' component={Joblist} />
        <Route path='diytext' component={Diytext} />
        <Route path='sendresume' component={Sendresume} />
        <Route path='interview' component={Interview} />
        <Route path='invitation' component={Invitation} />
        <Route path='collect' component={Collect} />
      </Route>
   </Router>
	, 
	document.getElementById('root'));
    registerServiceWorker();
