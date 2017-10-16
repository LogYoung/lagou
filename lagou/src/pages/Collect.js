import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import EveryCollect from '../pages/EveryCollect.js';
import Header from '../pages/Header.js';
import axios from 'axios';
import $ from "jquery";

class Collect extends Component{
	constructor(props) {
		super(props);
		this.state={
			collect :[],
			isii:true,
			mystyle:{
				background:"url(https://lagou.com/images/mobile/asset/common/img/icon.png)",
				backgroundSize:"250px 250px",
				backgroundPosition:"-150px -8px"
			}
		};
		
		this.goJob = this.goJob.bind(this);
	}
	componentWillMount() {
		let that = this;
		let username = sessionStorage.getItem('user');
		axios.post('/getcollect',{username:username}).then(function(res){
			that.setState({
				collect:res.data.collects
			});
		})
	}
	
	goJob(e){
		console.log(e.target)
		var ele=e.target
		var isii=$(e.target).data("isii")
		if(isii){
			$(ele).css({"backgroundPosition":"-182px -8px"})
			$(e.target).data("isii",false)
		}
		if(!isii){
			$(ele).css({"backgroundPosition":"-150px -8px"})
			$(e.target).data("isii",true)
		}
		
	}

	render() {
		let html = this.state.collect.map((ele,i)=>{
			return <EveryCollect key={i} list={ele} index={i} mystyle={this.state.mystyle} isii={this.state.isii} goJob={this.goJob}/>
		});
		return(
			<div id='Collect'>
				<Header headertext='我的收藏' />
				<ul>
					{html}
				</ul>
			</div>
		)
	}
}

export default Collect;