import React,{Component} from 'react';
import axios from 'axios';
import { Router, Route, hashHistory,IndexRoute,browserHistory} from 'react-router';


class Fistindex extends Component {
	constructor(){
		super();
	}
	render(){
		return (
			  <div className="listbox">
			       <Listbox  />
                   <Listli />
			  </div>
			)
	}
}
class Listbox extends Component {
    constructor(){
        super();
        this.state={
            text:"10秒钟制定职位",
            text2:"去登录",
            hash:"/login",
            isii:"true"
        }
        this.Changehash=this.Changehash.bind(this)
    }
    componentWillMount(){
        var user=sessionStorage.getItem("username")
        if(user){
            var bingSreach=sessionStorage.getItem("bingSreach")
            bingSreach=JSON.parse(bingSreach)
                console.log(bingSreach)
        var text="";
            for(var i in bingSreach){
                if(bingSreach[i]){
                    text +=bingSreach[i]+"/"
                }
            }
            console.log(text)
          if(text){
              this.setState({
                text:text,
                text2:"去编辑",
                isii:false,
                hash:"/diytext"
            })
          }else{
            this.setState({
                text2:"去编辑",
                isii:false,
                hash:"/diytext"
            })
          }
            
        }
    }
    render(){
        var html=this.state.isii?"":<span className="iconf"></span>
        return (
            <div className="listbox_header">
                      <span>{this.state.text}</span>
                      <a href="javascript:0" onClick={this.Changehash}>{html}{this.state.text2}</a>
            </div>
        )
    }
    Changehash(){
          hashHistory.push(this.state.hash)
    }
}
class Listli extends Component {
	constructor(){
		super();
		this.state={
			lists:[{
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3592483,
                        "positionName":"客户经理AM",
                        "city":"北京",
                        "createTime":"今天 15:56",
                        "salary":"8k-15k",
                        "companyId":110810,
                        "companyLogo":"https://static.lagou.com/i/image/M00/01/F0/Cgp3O1Z7r8yAQdxBAAAjVwC-ubw375.jpg",
                        "companyName":"北京博特互动营销咨询有限公司",
                        "companyFullName":"北京博特互动营销咨询有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3592536,
                        "positionName":"电商运营",
                        "city":"北京",
                        "createTime":"今天 15:56",
                        "salary":"5k-10k",
                        "companyId":110810,
                        "companyLogo":"https://static.lagou.com/i/image/M00/01/F0/Cgp3O1Z7r8yAQdxBAAAjVwC-ubw375.jpg",
                        "companyName":"北京博特互动营销咨询有限公司",
                        "companyFullName":"北京博特互动营销咨询有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3590432,
                        "positionName":".net",
                        "city":"北京",
                        "createTime":"今天 15:56",
                        "salary":"10k-20k",
                        "companyId":141319,
                        "companyLogo":"https://static.lagou.com/i/image/M00/58/2F/CgpEMlmBR9uAAZSNAAAKOmo2JHI524.jpg",
                        "companyName":"中园",
                        "companyFullName":"北京中园搏望科技发展有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3592137,
                        "positionName":"PHP工程师",
                        "city":"广州",
                        "createTime":"今天 15:55",
                        "salary":"6k-10k",
                        "companyId":36814,
                        "companyLogo":"https://static.lagou.com/image1/M00/00/58/CgYXBlTUXSyAGz5bAABerV812GM749.png",
                        "companyName":"粤辰星",
                        "companyFullName":"广州粤辰星电子科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3602849,
                        "positionName":"数据运营专员",
                        "city":"北京",
                        "createTime":"今天 15:55",
                        "salary":"5k-10k",
                        "companyId":132623,
                        "companyLogo":"https://static.lagou.com/i/image/M00/35/17/CgqKkVdXzBCAU9dwAAAqcHWIdcY733.jpg",
                        "companyName":"展鸿软通",
                        "companyFullName":"北京展鸿软通科技股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3602860,
                        "positionName":"游戏运营专员",
                        "city":"北京",
                        "createTime":"今天 15:55",
                        "salary":"5k-10k",
                        "companyId":132623,
                        "companyLogo":"https://static.lagou.com/i/image/M00/35/17/CgqKkVdXzBCAU9dwAAAqcHWIdcY733.jpg",
                        "companyName":"展鸿软通",
                        "companyFullName":"北京展鸿软通科技股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3604568,
                        "positionName":"硬件工程师（嵌入式）",
                        "city":"广州",
                        "createTime":"今天 15:55",
                        "salary":"8k-13k",
                        "companyId":237633,
                        "companyLogo":"https://static.lagou.com/i/image/M00/56/AB/CgpEMll-xxiAJNiHAAEOE1WfFY4435.jpg",
                        "companyName":"小享科技",
                        "companyFullName":"广州小享科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3604300,
                        "positionName":"专利工程师",
                        "city":"广州",
                        "createTime":"今天 15:55",
                        "salary":"8k-13k",
                        "companyId":237633,
                        "companyLogo":"https://static.lagou.com/i/image/M00/56/AB/CgpEMll-xxiAJNiHAAEOE1WfFY4435.jpg",
                        "companyName":"小享科技",
                        "companyFullName":"广州小享科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3601153,
                        "positionName":"APP测试助理岗位(可招应届生）",
                        "city":"成都",
                        "createTime":"今天 15:52",
                        "salary":"6k-9k",
                        "companyId":233969,
                        "companyLogo":"https://static.lagou.com/i/image/M00/52/2F/CgpEMll1f8uAUlgKAAAefEEoF8w207.png",
                        "companyName":"火才科技",
                        "companyFullName":"重庆火才世纪大数据科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3600950,
                        "positionName":"UI设计师/平面设计",
                        "city":"成都",
                        "createTime":"今天 15:52",
                        "salary":"6k-9k",
                        "companyId":233969,
                        "companyLogo":"https://static.lagou.com/i/image/M00/52/2F/CgpEMll1f8uAUlgKAAAefEEoF8w207.png",
                        "companyName":"火才科技",
                        "companyFullName":"重庆火才世纪大数据科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3601972,
                        "positionName":"互联网产品经理（汽车行业）",
                        "city":"北京",
                        "createTime":"今天 15:52",
                        "salary":"15k-20k",
                        "companyId":14819,
                        "companyLogo":"https://static.lagou.com/image2/M00/06/D9/CgqLKVX7jXaAXSQRAAC_V2HmlQw461.png",
                        "companyName":"网利宝",
                        "companyFullName":"北京网利科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3604219,
                        "positionName":"高级运营经理",
                        "city":"北京",
                        "createTime":"今天 15:52",
                        "salary":"15k-25k",
                        "companyId":14819,
                        "companyLogo":"https://static.lagou.com/image2/M00/06/D9/CgqLKVX7jXaAXSQRAAC_V2HmlQw461.png",
                        "companyName":"网利宝",
                        "companyFullName":"北京网利科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3592505,
                        "positionName":"商务助理（实习）",
                        "city":"北京",
                        "createTime":"今天 15:52",
                        "salary":"3k-4k",
                        "companyId":114841,
                        "companyLogo":"https://static.lagou.com/i/image/M00/04/02/Cgp3O1bFYjuAVa8jAAAgWYB1an4025.png",
                        "companyName":"因特睿",
                        "companyFullName":"北京因特睿软件有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3603303,
                        "positionName":"广告销售经理",
                        "city":"北京",
                        "createTime":"今天 15:51",
                        "salary":"8k-16k",
                        "companyId":171927,
                        "companyLogo":"https://static.lagou.com/i/image/M00/9F/97/CgqKkVileI-APMd_AAAhqW4Ey3A483.png",
                        "companyName":"小电",
                        "companyFullName":"北京伊电园网络科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3603396,
                        "positionName":"商务专员",
                        "city":"天津",
                        "createTime":"今天 15:49",
                        "salary":"4k-8k",
                        "companyId":260578,
                        "companyLogo":"https://static.lagou.com/i/image/M00/71/9D/CgpEMlm3izaARpphAAAZkNkeH5I195.jpg",
                        "companyName":"清博津商",
                        "companyFullName":"清博津商（天津）教育科技有限公司"
                    }
                ]
		}
		this.Clickmore=this.Clickmore.bind(this);
        this.backheader=this.backheader.bind(this)
	}
	render(){
		var html=this.state.lists.map(function(elem){
			 return <JobItem list={elem} key={elem.positionId} />;
		})
		return (
			  <ul className="list">
			     {html}
			     <span id="morelist" onClick={this.Clickmore}>加载更多</span>
			     <div id="copyright">
					<p>©2015 lagou.com, all right reserved </p>
					<div className="copyright-item">
					<span className="phone active">移动版&nbsp;·&nbsp;</span><span className="computer">电脑版&nbsp;·&nbsp;</span><a href="javascript:0" onClick={this.backheader}>回顶部</a></div>
			     </div>
			  </ul>
			)
	}
	Clickmore(){
		var that=this;
		var dd=that.state.lists;
		axios.post("/morelist",{}).then(function(res){
			var date=res.data.msg
		   for(var i in date){
			  dd.push(date[i])
		   }
			that.setState({
				lists:dd
			})
		})
	}
    backheader(){
        window.scrollTo(0,0)
    }
}

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
            backhash:"/"
        }
        hashHistory.push({
            pathname: '/joblist',
            query:obj 
        });
     }
}


export default Fistindex