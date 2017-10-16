import React, { Component } from 'react';
import { Router, Route, hashHistory,IndexRoute,browserHistory} from 'react-router';


class Header extends Component{
	constructor(){
		super()
		this.changehash=this.changehash.bind(this);
	}
	  render(){
	  	return (
	  		<div className="Sendresumeheader" onClick={this.changehash}>
					<span className="iconbox"><span className="icon"></span></span>
					<span className="text">{this.props.headertext}</span>
			</div>
	  		)
	  }
	changehash(){
		hashHistory.push({
			pathname:"/user"
		})
	}
}



export default Header;