import React, { Component } from 'react';
import Header from '../pages/Header.js';
import {Link,browserHistory} from 'react-router';
import Tab from '../pages/Tab.js';
import axios from 'axios';

class Interview extends Component{
	constructor(props) {
			super(props);
			this.state={
				currentIndex:0,
				tabs:['已面试','将面试'],
				interview:['',['即将面试1','即将面试2']],
				type:'interview'
			};
			this.changetab = this.changetab.bind(this);
		}
	
	changetab(e){		
		let index = this.state.tabs.indexOf(e.target.innerHTML);
		if(index==this.state.currentIndex)
			return;
		this.setState({
			currentIndex:index
		});
	}

	render() {
		return(
			<div id="Interview">
				<Header headertext='我的面试' />
				<Tab tabs={this.state.tabs} list={this.state.interview} currentIndex={this.state.currentIndex} changetab={this.changetab} 
				type={this.state.type}/>
			</div>
			)
	}
}

export default Interview;