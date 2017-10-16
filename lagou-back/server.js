var app=require("express")();
var bodyParser=require("body-parser");



app.use(bodyParser.json()) ; 
app.use(bodyParser.urlencoded({extended:true}))

app.post("/login",function(req,res){
     console.log(req.body)
     res.json({
        code:0,
        msg:"登录成功"
     })
})

app.post("/regeist",function(req,res){
        res.json({
            code:0,
            msg:"注册成功"
        })
})
app.post("/getcollect",function(req,res){
    console.log(req.body)
     res.json({
        collects:[{           
            "positionId": 33172101,
            "positionName": "运营专员/新媒体运营",
            "city": "北京",
            "createTime": "今天 13:54",
            "salary": "4k-6k",
            "companyId": 1603781,
            "companyLogo": "//static.lagou.com/i/image/M00/7A/4C/CgqKkVg_kLKAYzxuAABTTmN8VE4789.jpg",
            "companyName": "新知百略",
            "companyFullName": "北京新知百略科技有限公司",
            "collect":true,
            "backpath":"/collect"
          },
          {           
            "positionId": 36757951,
            "positionName": "运营实习生",
            "city": "北京",
            "createTime": "今天 11:09",
            "salary": "3k-5k",
            "companyId": 6040,
            "companyLogo": "//static.lagou.com/image1/M00/0C/6C/Cgo8PFT1X2uAUbGsAABCAddtkWg960.jpg",
            "companyName": "慕课网",
            "companyFullName": "北京慕课科技中心",
            "collect":true,
            "backpath":"/collect"
          }]
    });

})


app.post("/collect",function(req,res){
    console.log(req.body)
})



app.post("/morelist",function(req,res){
	var num=Math.floor(Math.random()*100000)
	var num2=Math.floor(Math.random()*100000)

	  res.json({
	  	  code:0,
	  	  msg:[{
                   "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":num,
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
                        "positionId":num2,
                        "positionName":"商务专员",
                        "city":"天津",
                        "createTime":"今天 15:49",
                        "salary":"4k-8k",
                        "companyId":260578,
                        "companyLogo":"https://static.lagou.com/i/image/M00/71/9D/CgpEMlm3izaARpphAAAZkNkeH5I195.jpg",
                        "companyName":"清博津商",
                        "companyFullName":"清博津商（天津）教育科技有限公司"
                    }]
	  })


})

app.post("/more",function(req,res){
	var num=Math.floor(Math.random()*100000)
		res.json({
			code:0,
			msg:{
				"logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":num,
                        "positionName":"商务专员",
                        "city":"天津",
                        "createTime":"今天 15:49",
                        "salary":"4k-8k",
                        "companyId":260578,
                        "companyLogo":"https://static.lagou.com/i/image/M00/71/9D/CgpEMlm3izaARpphAAAZkNkeH5I195.jpg",
                        "companyName":"清博津商",
                        "companyFullName":"清博津商（天津）教育科技有限公司"
			    }
		})

})


app.post("/Searchcity",function(req,res){
	console.log(req.body)
		if(req.body.city=="成都"){
		    res.json({
				code:0,
				msg:[{

                    "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3411141,
                        "positionName":"餐饮生态Java",
                        "city":"北京",
                        "createTime":"今天 09:50",
                        "salary":"20k-40k",
                        "companyId":50702,
                        "companyLogo":"https://static.lagou.com/i/image/M00/6A/05/Cgp3O1gW8zSAUwUsAABMptH-XY087.jpeg",
                        "companyName":"美团点评",
                        "companyFullName":"北京三快在线科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3509221,
                        "positionName":"业务合规主管",
                        "city":"北京",
                        "createTime":"2017-09-18",
                        "salary":"10k-20k",
                        "companyId":2422,
                        "companyLogo":"https://static.lagou.com/i/image/M00/6D/97/Cgp3O1ggUdyAXUTBAAATC-GBFUg603.jpg",
                        "companyName":"凡普金科",
                        "companyFullName":"凡普金科企业发展（上海）有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3291658,
                        "positionName":"BDM（成都）",
                        "city":"北京",
                        "createTime":"昨天 19:24",
                        "salary":"5k-10k",
                        "companyId":766,
                        "companyLogo":"https://static.lagou.com/image1/M00/31/82/CgYXBlWLxvOAVgoRAAZGmVXIEvE578.png",
                        "companyName":"更美APP",
                        "companyFullName":"北京完美创意科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3658103,
                        "positionName":"城市经理（成都）",
                        "city":"北京",
                        "createTime":"昨天 10:21",
                        "salary":"10k-20k",
                        "companyId":81144,
                        "companyLogo":"https://static.lagou.com/i/image/M00/13/65/CgpFT1j21XeAchtWAAAjCzC_fKk741.png",
                        "companyName":"7号电单车",
                        "companyFullName":"北京百和光信息技术有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3496267,
                        "positionName":"销售经理【成都】",
                        "city":"北京",
                        "createTime":"昨天 11:31",
                        "salary":"8k-15k",
                        "companyId":8861,
                        "companyLogo":"https://static.lagou.com/i/image/M00/07/17/Cgp3O1bNjT-AFsa6AAA83c0vejw711.jpg",
                        "companyName":"妙计旅行",
                        "companyFullName":"北京汇行科技有限公司"
                    },{
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3185500,
                        "positionName":"销售经理",
                        "city":"北京",
                        "createTime":"今天 09:38",
                        "salary":"10k-15k",
                        "companyId":40835,
                        "companyLogo":"https://static.lagou.com/i/image/M00/3E/4E/CgqKkVd0ZtqAK7pvAAAeCrzvyjI719.png",
                        "companyName":"壁虎车险",
                        "companyFullName":"北京易天正诚信息技术有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":2874731,
                        "positionName":"高级行业销售",
                        "city":"北京",
                        "createTime":"2017-09-18",
                        "salary":"15k-25k",
                        "companyId":31164,
                        "companyLogo":"https://static.lagou.com/image1/M00/00/47/Cgo8PFTUXOGATO5YAABUKEnmiBE860.png",
                        "companyName":"青云",
                        "companyFullName":"北京优帆科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3604809,
                        "positionName":"韩语法务专员）",
                        "city":"北京",
                        "createTime":"昨天 17:42",
                        "salary":"10k-20k",
                        "companyId":212800,
                        "companyLogo":"https://static.lagou.com/i/image/M00/33/8B/CgpFT1lA2OaALR6hAAACcXbSP_A382.png",
                        "companyName":"乐职猎头",
                        "companyFullName":"北京乐职管理咨询有限公司"
                    }]
		
             })	
		}
})


app.listen(3344,function(){
	 console.log("服务器启动成功")
})