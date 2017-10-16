import React, { Component } from 'react';
import '../font/iconfont.css';
import './EveryCollect.css';
class EveryCollect extends Component{
	render() {
		let {list,index,goJob,mystyle,isii} = this.props;
		return(
			<li className="activeable item" data-index={index} onClick={goJob}>           
	            <img src={list.companyLogo} className="item-logo"/>
	            <div className="item-desc">
	                <div className="desc-left">
	                    <h2 className="item-title">{list.companyName}</h2>
	                    <p className="item-info">
	                        <span className="item-pos">
	                           {list.positionName} [ {list.city} ]
	                        </span>
	                    </p>
	                    <p className="item-time">{list.createTime}</p>
	                </div>
	                <div className="desc-right">
	                    <div className="icon" style={mystyle} data-isii={isii}>
	                    </div>
	                    <div className="salary">
	                        {list.salary}
	                    </div>
	                </div>
	            </div>
	        </li>
	    )
	}
}

export default EveryCollect;