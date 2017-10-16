import React,{Component} from 'react';
import $ from "jquery";
import axios from "axios";
import { Router, Route, hashHistory,IndexRoute,browserHistory} from 'react-router';


class Search extends Component {
	constructor(){
		super()
		this.state={
			chekedcity:"全国",
			isii:true,
		}
		this.CCity=this.CCity.bind(this)
		this.onCCitytuer=this.onCCitytuer.bind(this)
		this.onchekedcity=this.onchekedcity.bind(this)
	}
	render(){
		var html=this.state.isii?
		   <Searchbox  onCCity={this.CCity} city={this.state.chekedcity} 
		    onchekedcity={this.onchekedcity}/>
		   :<Searchcitybox onCCitytuer={this.onCCitytuer} onCCity={this.CCity}
		    onchekedcity={this.onchekedcity}/>
		return (
			  <div className="Search" data-city={this.state.chekedcity} 
			  >
                  {html}
			  </div>
			)
	}
	/*函数部分*/
	CCity(){
		this.setState({
			isii:false
		})
	}
	onCCitytuer(){
		this.setState({
			isii:true
		})
	}
	onchekedcity(value){
		this.setState({
			chekedcity:value
		})
	}
}

/*搜索初始页面组件*/
class Searchbox extends Component {
	constructor(){
		super();
		this.state={
			isii:true,
			msg:[],
			list:[]
		}
	   this.Changecity=this.Changecity.bind(this);
	   this.Searchfction=this.Searchfction.bind(this);
	   this.inputchange=this.inputchange.bind(this);
	   this.Changelist=this.Changelist.bind(this);
	   this.onChangeMSG=this.onChangeMSG.bind(this)
	   this.Morelist=this.Morelist.bind(this);
	}
	/*mount函数*/
	componentWillMount(){
		var inputs=sessionStorage.getItem("inputs")
		if(!inputs){
			return
		}
	    var attr=inputs.split(",");
	    console.log(attr)
	    this.setState({
	    	list:attr
	    })
	}
	render(){
		var listhtml=this.state.msg.map(function(elem){
			 return <JobItem list={elem} key={elem.positionId} />;
		})
		var html;
		  if(this.state.isii){
		  	 html=<Histoty list={this.state.list} onChangeMSG={this.onChangeMSG} onChangelist={this.Changelist} />
		  }
		  if(!this.state.isii){
		  	html=(<ul className="list">
		  	         {listhtml}
		  	         <span className="morelist" onClick={this.Morelist}>点击加载更多</span>
		  	     </ul>)
		  }
		  if(this.state.isii=="isii"){
		  	 html=<div className="isiibox"><span className="lsiispan"></span><span className="text">拉勾上暂时没有这样的职位</span></div>
		  }
		return (
			<div className="Search_header">
                   		<div className="Search_left" onClick={this.Changecity}>
                   			<span className="city">{this.props.city}</span>
                   			<span className="cityicon"></span>
                   		</div>
                   		<div className="Search_right">
                   			<input className="inputer" onChange={this.inputchange} type="text" placeholder="搜索职位或公司"/>
                   			<span className="search_icon" onClick={this.Searchfction}></span>
                   		</div>
                   		{html}
            </div>
		)
	}
	Morelist(){
		var that=this;
		var msg=this.state.msg;
		$.post("/more",{},function(res){
			console.log(res.msg)
			msg.push(res.msg)
			that.setState({
				msg:msg
			})

		})
	    console.log(msg)
	}
	onChangeMSG(value){
	  if(value=="false"){
	  	console.log(value)
	  	 this.setState({
	  	 	isii:"isii",
	  	 })
	  	 return
	  }
		this.setState({
			isii:false,
			msg:value
		})
	}
	inputchange(e){
		if(!$(e.target).val()){
			 this.setState({
			 	isii:true
			 })
		}
	}
	Changelist(value){
		this.setState({
			list:value
		})
	}
	Changecity(){
		 console.log(this)
		this.props.onCCity()
	}
	Searchfction(e){
		var that=this
		console.log(e.target)
		var dom=e.target;
		var val=$(dom).prev().val()
		if(val!="成都"){
			that.setState({
				isii:"isii"
			})
		}
		$.post("/Searchcity",{city:val},function(res){
			console.log(res)
			that.setState({
				isii:false,
				msg:res.msg
			})
		})
		/*保存Storage*/
		var allStorage =[]
		    allStorage.push(sessionStorage.getItem("inputs"))
		    console.log(val)
		    console.log(allStorage)
		  for(var i=0;i<allStorage.length;i++){
		  	    if(allStorage[i] != val){
		  	    	 if(allStorage==""){
		  	       	console.log(321)
		  	       	  allStorage.splice(0,1)
		  	       }
		  	        allStorage.push(val)
		  	        sessionStorage.setItem("inputs",allStorage)
		  	    }
		  }
	}
}

/*搜索的城市组件*/
class Searchcitybox extends Component {
	 constructor(){
		super()
		this.Changecity=this.Changecity.bind(this)
		this.onchekedcity=this.onchekedcity.bind(this)
		this.CCity=this.CCity.bind(this)
	}
	render(){
		return (
			<div className="Searchcitybox">
				 <div className="hotcity">
					<div className="backbox">
					<span className="backbtn" onClick={this.Changecity}></span>
					</div>
				 </div> 
				 <div className="citytable" >
						<Citytable onchekcity={this.onchekedcity} onCCity={this.CCity}/>
				 </div>
			</div>
		)
	}
	Changecity(){
		this.props.onCCitytuer()
	}
	onchekedcity(value){
		this.props.onchekedcity(value)
	}
	CCity(){
		this.props.onCCitytuer()
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
					     <li key={dd} value={dd} className={that.state.cls} onClick={that.chekcity}>{dd}</li>
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
	chekcity(e){
		var value=e.target.innerHTML
		$(e.target).addClass("avtive")
		this.props.onchekcity(value)
		this.props.onCCity();
		this.setState({
			cls:"active"
		})
	}
}
/*Storage组件*/
class Histoty extends Component{
	constructor(){
		super();
		this.removStorage=this.removStorage.bind(this);
		this.onSearchcity=this.onSearchcity.bind(this);
	}
	render(){
		var that=this;
		var kong="";
		let {list}=this.props;
		console.log(list)
		if(list!=kong){
			var html=list.map(function(date){
	          return(<div className="histoty"  key={date}>
			        <span key={date} className="text" >
			            <span className="textbox" onClick={that.onSearchcity} data-value={date}>{date}</span>
						<span className="delicon" onClick={that.removStorage} data-value={date}></span>
			        </span>
		           </div>) 
	        })
		}
		return(
				<div className="histotybox">
				   {html}
				</div>
				)
	}
	removStorage(e){
	  var value=$(e.target).data("value");
	  console.log(value);
	  var list=this.props.list
	   for(var i=0;i<list.length;i++){
	   	    if(list[i] == value){
	   	    	list.splice(i,1)
	   	    }
	   }
	   /*删除重置Storage*/
	   sessionStorage.setItem("inputs",list)
	   /*删除dom节点*/
	   this.props.onChangelist(list)

	 }
	 onSearchcity(e){
	 	var that=this;
	 	var value=$(e.target).data("value");
	 	console.log(value)
	 	if(value!="成都"){
	 		value="false"
	 		that.props.onChangeMSG(value)
	 		return
	 	}
	 	$.post("/Searchcity",{city:value},function(res){
				that.props.onChangeMSG(res.msg)
		})
		return 
	 }
}


/*列表*/

class JobItem extends Component{
	constructor(){
		super();
		this.joblistweb=this.joblistweb.bind(this)
	}
	 render(){
  	 	let {list} = this.props
  	 	return (
				<li  data-positionid={list.positionId} onClick={this.joblistweb}>
				            <img src={list.companyLogo} className="list_logo" />
				            <div className="list_text">
				                <h2 className="list_title">{list.companyFullName}</h2>
				                <p className="list_info">
				                	{list.positionName}
				                    <span className="item-salary">{list.salary}</span>
				                	
				                </p>
				                <p className="list_time">{list.createTime}</p>
				            </div>
				</li>
  	 		)
  	 }
  	 joblistweb(){
  	 	 var {list} = this.props
        var obj={
            logo:list.companyLogo,
            name:list.companyFullName,
            name2:list.positionName,
            salary:list.salary,
            city:list.city,
            backhash:"/search"
        }
        hashHistory.push({
            pathname: '/joblist',
            query:obj 
        });
  	 }
}

export default Search