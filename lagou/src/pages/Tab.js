import React, { Component } from 'react';
import './Tabs.css';
import {Link} from 'react-router';
class Tab extends Component{
	render() {

		let {tabs,list,currentIndex,changetab,type} = this.props;
		let html= tabs.map((ele,i)=>{
			if(i==currentIndex)
				return <span key={i} className='current' onClick={changetab}>{ele}</span>
			return <span key={i} onClick={changetab}>{ele}</span>
		});
		let content=null;

		if(type=='interview'){
			content = list[currentIndex] ? list[currentIndex].map((ele,i)=>{
			return <li className='interview' key={i}>{ele}</li>
			}): 		 
			<li className='nointerview'>暂时没有已面试的记录，去<Link to='/'>投简历</Link>吧</li>
		}else if(type=='sendresume'){
			content = list[currentIndex] ? list[currentIndex].map((ele,i)=>{
			return <li className='sendresume' key={i}>{ele}</li>
			}): 		 
			<li className='nosendresume'>暂无记录~</li>
		}
		




		return(
			<div id="Tabs">
				<div className='tabs'>
					{html}					
				</div>	
				<ul>
					{content}
				</ul>
			</div>
		)
	}
}

export default Tab;