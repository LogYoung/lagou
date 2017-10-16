import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router';
import { Router, Route, hashHistory,IndexRoute,browserHistory} from 'react-router';

class User extends Component {
	constructor(){
		super()
		this.state={
			isii:"true",
			username:""
		}
	}
	/*mount函数*/
	componentWillMount(){
		var username=sessionStorage.getItem("username")
		if(!username){
			return
		}
	    this.setState({
	    	username:username,
	    	isii:false
	    })
	    this.removStorage=this.removStorage.bind(this);
	    this.changetoudi=this.changetoudi.bind(this);
	    this.changemianshi=this.changemianshi.bind(this)
	    this.changeyaoyue=this.changeyaoyue.bind(this)
	    this.changeshoucang=this.changeshoucang.bind(this)
	}
	render(){
		console.log(this.state.username)
		var html= this.state.isii?<Link to="/login" >登录 / 注册</Link>:<Logined uere={this.state.username} />
		var html2=this.state.isii?"":<Link className="backlogin" to="/login" onClick={this.removStorage}>退出登录</Link>;
		return (
			  <div className="userbox">
                   <div className="login">
                      {html}
                   </div>
                   <div className="bottoms">
                      <Link className="toudi" onClick={this.changetoudi}>投递</Link>
                      <Link className="mianshi" onClick={this.changemianshi}>面试</Link>
                      <Link className="yaoyue" onClick={this.changeyaoyue}>邀约</Link>
                      <Link className="shoucang" onClick={this.changeshoucang}>收藏</Link>
                      {html2}
                   </div>
			  </div>
			)
	}
	removStorage(){
		sessionStorage.removeItem("username")
	}
	/*跳转到投递页面*/
	changetoudi(){
		var username=sessionStorage.getItem("username")
		if(!username){
		    hashHistory.push({
		    	pathname:"/login"
		    })
			return
		}
		hashHistory.push({
				pathname:"/sendresume"
		})		
	}
	/*面试页面跳转*/
	changemianshi(){
		var username=sessionStorage.getItem("username")
		if(!username){
		    hashHistory.push({
		    	pathname:"/login"
		    })
			return
		}
		hashHistory.push({
				pathname:"/interview"
		})	
	}
	/*跳转到邀约页面*/
	changeyaoyue(){
		var username=sessionStorage.getItem("username")
		if(!username){
		    hashHistory.push({
		    	pathname:"/login"
		    })
			return
		}
		hashHistory.push({
				pathname:"/invitation"
		})	
	}
	/*跳转到收藏*/
	changeshoucang(){
		var username=sessionStorage.getItem("username")
		if(!username){
		    hashHistory.push({
		    	pathname:"/login"
		    })
			return
		}
		hashHistory.push({
				pathname:"/collect"
		})	
	}
}

class Logined extends Component{
	 constructor(){
		super()
	}
	render(){
		console.log(this.props)
		return (
			<div className="logined"> 
				<span href="javascript:0" className="jianli">简历></span>
				<div className="headcon">
				   <img className="headpic" src="//static.lagou.com/images/myresume/default_headpic.png" />
				   <div className="name">{this.props.uere}</div>
				</div>
			</div>
		
		)
	}
}

export default User;