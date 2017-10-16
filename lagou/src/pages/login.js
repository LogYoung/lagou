import React,{Component} from 'react';
import "./login.css";
import {Link,IndexLink} from 'react-router';
import $ from "jquery";

class Login extends Component{
	constructor(){
		super();
		this.state={
			inputtype:"password",
			myStyle:{
				background:"url(//img.lagou.com/passport/static/mobile/modules/common/img/psweye_930f545.png)0 0 no-repeat"
			}
		}
		this.eyesChange=this.eyesChange.bind(this)
		this.loginFct=this.loginFct.bind(this)
	}
	render(){
		return (
				<div className="loginhtml">
					<div className="logininput">
						<input type="text" className="loginusername" placeholder="已验证手机/邮箱"></input>
						<input type={this.state.inputtype} className="loginuserpsw" placeholder="密码"></input>
						<span className="eyes" onClick={this.eyesChange} style={this.state.myStyle}></span>
					</div>
					<div className="loginbtn">
						<a href="javascript:0" className="lgbtn" onClick={this.loginFct}>登录</a>
						<p>还没账号？</p>
						<Link to="/regeist" href="javascript:0" className="rgbtn">注册</Link>
					</div>
				</div>
		)
	}
	/*登录按钮函数*/
	loginFct(e){
		var username=$(e.target).parent().prev().children(0).val()
		var psw=$(e.target).parent().prev().children(1).val()
		if(!username || !psw){
			alert("账户或密码不能为空")
			return
		}
		$.post("/login",{username:username,psw:psw},function(res){
			console.log(res)
			if(res.code==0){
				 sessionStorage.setItem("username",username)
				window.location.hash="/"
			}
		})
	}
	eyesChange(){
	  if(this.state.inputtype=="password"){
	  	this.setState({
			inputtype:"text",
			myStyle:{
				background:"url(//img.lagou.com/passport/static/mobile/modules/common/img/psweye_930f545.png) 0 -16px no-repeat"
			}
		})
	  }
	  if(this.state.inputtype=="text"){
		this.setState({
			inputtype:"password",
			myStyle:{
				background:"url(//img.lagou.com/passport/static/mobile/modules/common/img/psweye_930f545.png)0 0 no-repeat"
			}
		})
	  }
	}
}


export default Login;