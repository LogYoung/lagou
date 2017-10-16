import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import logo from './logo.svg';
import './App.css';
import "./font/iconfont.css";
import "./App.css";
import "./pages/Fistindex.css";
import "./pages/Search.css";
import "./pages/User.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Header/>
          <div className="main" >
             {this.props.children}
          </div>
          <Footer/>
      </div>
    );
  }
}
class Header extends Component{
   render(){
      return (
        <div className="header" id="header">拉勾网</div>
      )
   }
}
class Footer extends Component{
   render(){
      return(
        <div className="footer">
            <IndexLink to="/" activeClassName="cheked"><i className="iconfont icon-shouye" /> 求职</IndexLink> 
            <Link to="search" activeClassName="cheked"><i className="iconfont icon-fangdajing" />搜索</Link> 
            <Link to="user"  activeClassName="cheked"><i className="iconfont icon-wode" /> 我的</Link> 
        </div>
      )
   }
}
export default App;
