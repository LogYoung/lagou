import React, { Component } from 'react';
import Tab from '../pages/Tab.js';
import Header from "../pages/Header.js";


class Sendresume extends Component{
	constructor(props) {
		super(props);
		this.state={
			currentIndex:0,
			tabs:['全部','邀请面试','不合适'],
			sendresume:['',['即将面试1','即将面试2'],''],
			sure:false,
			type:'sendresume'
		};
		this.changetab = this.changetab.bind(this);
	}
	changetab(e){		
		let index = this.state.tabs.indexOf(e.target.innerHTML);
		if(index==this.state.currentIndex)
			return;
		this.setState({
			currentIndex:index,
		});
	}

	render() {
		return(
			<div id="Sendresume">
				<Header headertext="投递记录" />
				<Tab tabs={this.state.tabs} list={this.state.sendresume} currentIndex={this.state.currentIndex} changetab={this.changetab} type={this.state.type}/>	
			</div>
		)
	}
}

export default Sendresume;