import React,{Component} from 'react';
import "./regeist.css";
import $ from "jquery";
class Regeist extends Component{
	constructor(){
		super();
		this.state={
				pheneinfo:"",
				phenenum:"",
				yztext:"",
				yzSrc:"",
				inputtype:"password",
				myStyle:{
				background:"url(//img.lagou.com/passport/static/mobile/modules/common/img/psweye_930f545.png)0 0 no-repeat"
				}
				
			}
			this.eyesChange=this.eyesChange.bind(this)
			this.changeyzm=this.changeyzm.bind(this)
			this.regeistFctx=this.regeistFctx.bind(this)
			this.phonenum=this.phonenum.bind(this)
			this.changelogin=this.changelogin.bind(this)
	}
	/*验证码获取*/
	componentWillMount(){
		var that=this
		$.post("http://route.showapi.com/26-4",{showapi_appid:"43701",showapi_sign:"b612189529f54d96b30f817ba67a6d2a",textproducer_char_string:"abcdefghijklmn"},function(res){
			console.log(res);
			that.setState({
				yzSrc:res.showapi_res_body.img_path,
				yztext:res.showapi_res_body.text
			})
		})
	}
	render(){
		return (
				<div className="regeistbox">
					<div className="phenebox">
						<input onChange={this.phonenum} className="phene" type="text" placeholder="手机号" />
						<input className="vcode" type="text" placeholder="请证明你不是机器人" />
						<span className="pheneinfo">{this.state.pheneinfo}</span>
						<div className="yzmImg">
							<img src={this.state.yzSrc} data-value={this.state.yztext}></img>
							<span className="text">看不清楚,<a onClick={this.changeyzm}>换一张</a></span>
						</div>
					</div>
					<div className="pawbox">
						<input className="phene" type="text" placeholder="短信验证码"  />
						<input className="psw" type={this.state.inputtype} placeholder="设置6-16位密码" />
						<span className="getdz">获取</span>
						<span className="eyes" onClick={this.eyesChange} style={this.state.myStyle}></span>
					</div>
					<div className="btnbox">
						<a className="regeistbtn" onClick={this.regeistFctx}>注册</a>
						<p className="text">已有账号？</p>
						<a className="loginbtn" onClick={this.changelogin}>登录</a>
						<span className="xieyi">点击注册，即代表您同意<a>《拉勾用户协议》</a></span>
					</div>
				</div>
		)
	}
	/*切换登录*/
	changelogin(){
		window.location.hash="/login"
	}
	/*账号验证函数*/
	phonenum(e){
		console.log(e.target.value)
		var value=e.target.value;
		var text=/^(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/;
		if(!(text.test(value))){ 
			  this.setState({
			  	pheneinfo:"请输入正确11位手机号"
			  })
		}else{
			 this.setState({
			  	pheneinfo:""
			  })
		}
	}
	/*注册按钮函数*/
	regeistFctx(){
		$.post("/regeist",{},function(res){
			console.log(res)
			if(res.code==0){
				window.location.hash="/login"
			}
		})
	}
	/*更换验证码函数*/
	changeyzm(){
		var that=this
		$.post("http://route.showapi.com/26-4",{showapi_appid:"43701",showapi_sign:"b612189529f54d96b30f817ba67a6d2a",textproducer_char_string:"abcdefghijklmn"},function(res){
			console.log(res);
			that.setState({
				yzSrc:res.showapi_res_body.img_path,
				yztext:res.showapi_res_body.text
			})
		})
	}
	/*密码显示隐藏函数*/
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


export default Regeist;