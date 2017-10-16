import React,{Component} from 'react';
import "./Diytext.css";
import $ from "jquery";
import { Router, Route, hashHistory,IndexRoute,browserHistory} from 'react-router';


class Diytext extends Component{
	constructor(){
		super();
		this.state={
			isii:true,
			colorisii:false,
			colornum1:0,
			colornum2:0,
			colornum3:0,
			colornum4:0,
			hash:"/",
			_num:0,
			footerisii:true,
			txt:{
				  headertext1:"职业类型",
				  headertext2:"工作地点",
				  headertext3:"期望薪水",
				  headertext4:"公司规模",
				  hashtext1:"请选择职业类型",
				  hashtext2:"请选择工作地点",
				  hashtext3:"请选择期望薪水",
				  hashtext4:"请选择公司规模",
				 }
		}
		this.backindex=this.backindex.bind(this);
		this.changeisii=this.changeisii.bind(this);
		this.Changeisii=this.Changeisii.bind(this);
		this.onChangenum=this.onChangenum.bind(this);
		this.footerisii=this.footerisii.bind(this);
		this.bingSreach=this.bingSreach.bind(this);
	}
	componentWillMount(){
		var bingSreach=sessionStorage.getItem("bingSreach")
            bingSreach=JSON.parse(bingSreach)
                console.log(bingSreach)
        if(!bingSreach){
        	return
        }
        if(bingSreach.text1){
        	this.setState((perv)=>{
			 	   return Object.assign(perv.txt,{hashtext1:bingSreach.text1})
			    	}) 
        	this.setState({
				colorisii:true,
				colornum1:1
			})
			}

        if(bingSreach.text2){
        	this.setState((perv)=>{
			 	   return Object.assign(perv.txt,{hashtext2:bingSreach.text2})
			    	}) 
        	this.setState({
				colorisii:true,
				colornum2:2
			})
			}
        	
        if(bingSreach.text3){
        	this.setState((perv)=>{
			 	   return Object.assign(perv.txt,{hashtext3:bingSreach.text3})
			    	}) 
        	this.setState({
				colorisii:true,
				colornum3:3

			})
			}
        	
        if(bingSreach.text4){
        	this.setState((perv)=>{
			 	   return Object.assign(perv.txt,{hashtext4:bingSreach.text4})
			    	}) 
        	this.setState({
				colorisii:true,
				colornum4:4
			})
			}
        	
	}
	render(){
		if(this.state.footerisii){
			var footerhtml=<div className="Diytextfooter" onClick={this.bingSreach}>开始搜索</div>
		}else{
			var footerhtml=""
		}
		var html=this.state.isii?<Listul colorisii={this.state.colorisii} colornum1={this.state.colornum1} colornum2={this.state.colornum2} colornum3={this.state.colornum3} colornum4={this.state.colornum4} onfooterisii={this.footerisii} listultext={this.state.txt}  onchangeisii={this.changeisii}/>
		:<Diytextinfo onfooterisii={this.footerisii} onChangenum={this.onChangenum} _num={this.state._num} onChangeisii={this.Changeisii} />;
		return(
			<div id="Diytext">
				<div className="Diytextheader">
				    设置制定信息
				    <span className="backindex" onClick={this.backindex}><span className="iconf"></span></span>
				</div>
				<div className="Diytextmain">
					{html}
				</div>
				{footerhtml}
			</div>
			)
	}
	/*开始搜索函数*/
	bingSreach(){
		var text1=this.state.txt.hashtext1
		var text2=this.state.txt.hashtext2
		var text3=this.state.txt.hashtext3
		var text4=this.state.txt.hashtext4
		if(text1=="请选择职业类型"){
			text1=""
		}
		if(text2=="请选择工作地点"){
			text2=""
		}
		if(text3=="请选择期望薪水"){
			text3=""
		}
		if(text4=="请选择公司规模"){
			text4=""
		}
		var obj={
			text1:text1,
			text2:text2,
			text3:text3,
			text4:text4,
		}
		    obj=JSON.stringify(obj)
		console.log(obj)
		sessionStorage.setItem("bingSreach",obj)
	    hashHistory.push({
	    	pathname:"/"
	    })
	}
	/*尾部隐藏判断*/
	footerisii(val){
		this.setState({
			footerisii:val
		})
	}
	/*_num返回设置*/
	onChangenum(){
		this.setState({
			_num:0
		})
	}
	/*返回函数*/
	backindex(){
		hashHistory.push(this.state.hash)
	}
	/*显示内容进入编辑详情组件*/
	changeisii(_num){
		 this.setState({
		 	 isii:false,
		 	 _num:_num
		 })
	}
	/*编辑职位详情组件*/
	Changeisii(value,_num){
		var val=value
		var _num=_num
		 this.setState({
		 	 isii:true
		 })
		 if(val){
		 	var perv=this.state.text;
			  if(_num==1){
			 	this.setState((perv)=>{
			 	   return Object.assign(perv.txt,{hashtext1:val})
			    	}) 
			 	}
			 
			  if(_num==2){
			 	this.setState((perv)=>{
			 	   return Object.assign(perv.txt,{hashtext2:val})
			    	}) 
			 	}
			  
			  if(_num==3){
			 	this.setState((perv)=>{
			 	   return Object.assign(perv.txt,{hashtext3:val})
			    	}) 
			 	}
			
			  if(_num==4){
			 	this.setState((perv)=>{
			 	   return Object.assign(perv.txt,{hashtext4:val})
			    	}) 
			 	}
		}
	}
}

/*进入显示内容模块*/
class Listul extends Component{
	constructor(){
		super();
		this.chektext=this.chektext.bind(this)
	}
	render(){
		let text=this.props.listultext;
		let myStyle1={
			color:"#00b38a"
		}
		let myStyle2={
			color:"#00b38a"
		}
		let myStyle3={
			color:"#00b38a"
		}
		let myStyle4={
			color:"#00b38a"
		}
		if(this.props.colornum1==1){
			 myStyle1={
				color:"black"
			}
		}
		if(this.props.colornum2==2){
			 myStyle2={
				color:"black"
			}
		}
		if(this.props.colornum3==3){
			 myStyle3={
				color:"black"
			}
		}
		if(this.props.colornum4==4){
			 myStyle4={
				color:"black"
			}
		}
		
		return(
			<ul>
			 <li>
			  <span className="listheader">{text.headertext1}</span>
			  <a href="javascript:0" style={myStyle1} onClick={this.chektext} data-num="1">{text.hashtext1}</a>
			 </li>
			 <li>
			  <span className="listheader">{text.headertext2}</span>
			  <a href="javascript:0" style={myStyle2} onClick={this.chektext} data-num="2">{text.hashtext2}</a>
			 </li>
			 <li>
			  <span className="listheader">{text.headertext3}</span>
			  <a href="javascript:0" style={myStyle3} onClick={this.chektext} data-num="3">{text.hashtext3}</a>
			 </li>
			 <li>
			  <span className="listheader">{text.headertext4}</span>
			  <a href="javascript:0" style={myStyle4} onClick={this.chektext} data-num="4">{text.hashtext4}</a>
			 </li>
			</ul>
			)
	}
	chektext(e){
		var _num=$(e.target).data("num")
		this.props.onchangeisii(_num)
		var val=false
		this.props.onfooterisii(false)
	}
}

/*编辑职位详情组件*/
class Diytextinfo extends Component{
	constructor(){
		super();
		this.state={
			headertext:"",
		}
		this.backlist=this.backlist.bind(this)
		this.Changecity=this.Changecity.bind(this)
		this.onChangeli=this.onChangeli.bind(this)
		this.footerisii=this.footerisii.bind(this)
	}
	componentWillMount(){
		var _num=this.props._num;
		if(_num==1){
			this.setState({
				headertext:"想找什么职位？"
			})
		}
		if(_num==2){
			this.setState({
				headertext:"告诉我你期望的工作地点？"
			})
		}
		if(_num==3){
			this.setState({
				headertext:"告诉我你期望的薪水？"
			})
		}
		if(_num==4){
			this.setState({
				headertext:"对公司的规模可有要求？"
			})
		}
	}
     render(){
     	var html;
     	if(this.props._num==2){
			html=<Citytable onfooterisii={this.footerisii} _num={this.props._num} onChangecity={this.Changecity}/> 
     	}else{
			html=<Predataul onfooterisii={this.footerisii} _num={this.props._num} onChangeli={this.onChangeli} />
     	}
     	return(
			<div id="Diytextinfo">
				<span className="headericon" onClick={this.backlist}><span className="icon"></span></span>
				<div className="content">
					<div className="contentheader">
						<span className="text">
							<span className="icon1"></span>
							{this.state.headertext}
							<span className="icon2"></span>
						</span>
					</div>
					<div className="Predataulbox">
					{html}
					</div>
				</div>
			</div>

     	)
     }
     /*函数部分*/
	
	 /*尾部隐藏判断*/
	 footerisii(val){
	 	this.props.onfooterisii(val)
	 }
     /*切换选择函数*/
     backlist(){
     	 this.props.onChangenum()
     	 this.props.onChangeisii();
     }
     /*点击城市返回传递城市效果*/
     Changecity(value,_num){
         this.props.onChangeisii(value,_num);
     }
     /*ul列表数据回传*/
     onChangeli(val,_num){
		this.props.onChangeisii(val,_num)
     }
}
/*1，3，4 的列表详情组件*/
class Predataul extends Component{
	constructor(){
		super();
		this.state={
		  text:{
			1:["产品经理","Java","运营","Android","PHP","UI","IOS","编辑","BD"],
			3:["没有要求","2k以下","2k-5k","5k-10k","10k-15k","15k-25k","25k-50k","50k以上"],
			4:["没有要求","初创型","成长型","成熟型","上市公司"]
			}
		}
		this.Chekli=this.Chekli.bind(this)
	}

	render(){
		let _num=this.props._num
		let html;
		let that=this
			html=this.state.text[_num].map(function(date){
					return (
						<li className="item" key={date}  onClick={that.Chekli}>{date}</li>
					)
			})
		return(
			<ul className="Predataul">
				{html}	
			</ul>
		)

	}
	/*ul列表数据回传*/
	Chekli(e){
		var val=e.target.innerHTML;
		var _num=this.props._num;
		var _val=true;
		this.props.onChangeli(val,_num)
		this.props.onfooterisii(_val)
	}
}


/*搜索的城市列表组件*/
class Citytable extends Component {
	constructor(){
		super();
		this.state={
			cls:"clis",
			hotcitys:[{
				name:"热门城市",
				city:["北京","上海","广州","深圳","成都","杭州"]
			},
			{
				name:"ABCDEF",
				city:["安庆","安阳","保定","北京","包头","长春","成都","重庆","长沙","常州","郴州","沧州","东莞","大连","东营","佛山","阜阳","福州","抚州"]
			},
			{
				name:"GHIJ",
				city:["桂林","贵阳","广州","赣州","邯郸","哈尔滨","合肥","呼和浩特","海口","衡水","河源","杭州","惠州","湖州","金华","九江","吉林","江门","济南","济宁","嘉兴","荆州"]
			},
			{
				name:"KLMN",
				city:["昆明","聊城","廊坊","丽水","拉萨","临沂","洛阳","连云港","兰州","柳州","泸州","马鞍山","茂名","绵阳","梅州","宁波","南昌","南京","南宁","南通","南阳"]
			},
			{
				name:"OPQR",
				city:["平顶山","莆田","濮阳","青岛","秦皇岛","清远","泉州","衢州","日照"]
			},
			{
				name:"STUV",
				city:["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","孝感","香港特别行政区","厦门","西宁","新乡","咸阳","襄阳","徐州","宜宾","银川","盐城","宜昌","烟台","扬州","淄博","珠海","镇江","湛江","肇庆","中山","遵义","郑州","漳州","株洲"]
			}
			]
			}
			this.chekcity=this.chekcity.bind(this)
	}
	render(){
		  var that=this;
		  var html=this.state.hotcitys.map(function(date){
		  	  var allcity=date.city.map(function(dd){
		  	   		   return (
					     <li key={dd} value={dd} className={that.state.cls} data-num={that.props._num} onClick={that.chekcity}>{dd}</li>
				        )
		  	         })
		  	    return (<div key={date.name}>
						     <p key={date.name} >{date.name}</p>
		  	                 {allcity}
		  	            </div>
		  	            )
		  })
		return (
			<ul className="citylist"> 
					{html}
			</ul>
		)
	}
	/*函数部分*/
	/*点击城市返回传递城市效果*/
	chekcity(e){
		var value=e.target.innerHTML
		var _num=$(e.target).data("num")
		var val=true
		this.props.onChangecity(value,_num)
		this.props.onfooterisii(val)
	}
}



export default  Diytext;