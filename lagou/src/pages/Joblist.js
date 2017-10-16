import React,{Component} from 'react';
import "./Joblist.css";
import $ from "jquery";
import { Router, Route, hashHistory,IndexRoute,browserHistory} from 'react-router';


class Joblist extends Component{
	constructor(){
		super();
		this.backhistory=this.backhistory.bind(this)
		this.backindex=this.backindex.bind(this)
	}
		render(){
			let list=this.props.location.query
			return(
				<div id="joblist">	
					<div className="jobheader">
						职位详情
						<span className="backbtn" onClick={this.backhistory} data-hash={list.backhash}><span data-hash={list.backhash} className="iconf"></span></span>
						<span className="backhome" onClick={this.backindex}><span className="iconf"></span></span>
					</div>
					<div className="jobmain">
						<div className="mainheader">
							<h2 className="title">{list.name2}</h2>
							<div className="collicon activeable">
                				<span className="icon notcoll"></span>
                				<span className="text"> 未收藏 </span>
           					 </div>
						</div>
						<div className="maincontenr">
							<div className="items">
                                <span className="item salary">
	                                <span className="icon"></span>
	                                <span className="text">{list.salary}</span>
                                </span>
                                <span className="item workaddress">
                       				 <span className="icon"></span>
                       				 <span className="text">{list.city}</span>
                                </span>
                                <span className="item jobnature">
                       				 <span className="icon"></span>
                        			 <span className="text">全职</span>
                    			</span>
                                <span className="item workyear">
                        			 <span className="icon"></span>
                       				 <span className="text">1-3年</span>
                    			</span>
                                <span className="item education">
                        			 <span className="icon"></span>
                        			 <span className="text">大专及以上 </span>
                    			</span>
                            </div>
                            <div className="temptation">职位诱惑：五险一金,周末双休,定期体检,专业培训</div>
						</div>
						<div className="logobox">
							<img className="logo" src={list.logo} />
							<div  className="text">
							  <div className="desc">
								<span className="name">{list.name}</span>
								<span className="textinfo">金融/A轮/150-500人</span>
							  </div>	
								<span className="icon"></span>
							</div>
						</div>
						<div className="positiondesc">
							<div className="posiheader">职位描述</div>
							<div className="content">
								<p>岗位职责：</p>
								<p>1、负责商户资料录入与初审管理；</p>
								<p>2、负责商户数据统计及分析；</p>
								<p>3、负责与关联合作方的协调与沟通工作；</p>
								<p>4、领导安排的其他工作。</p>
								<p><br/></p>
								<p>任职要求：</p>
								<p>1、大学专科或以上学历，专业不限；</p>
								<p>2、有数据统计分析相关工作经验优先；</p>
								<p>3、具备良好的语言沟通能力，能熟练运用办公软件；</p>
								<p>4、性格要求细心、责任心及团队责任感。</p>
           				    </div>
						</div>
						<div className="positioneval">
							<div className="posiheader">面试评价(0)</div>
							<p>暂无面试评价</p>
						</div>
					</div>
					<div className="jobfooter">
					    <a className="alerttext">投递简历</a>
					</div>
				</div>
				)
		}
	backhistory(e){
		var _hash=$(e.target).data("hash")
		hashHistory.push(_hash)
	}
	backindex(){
		hashHistory.push("/")
	}

}


export default  Joblist;