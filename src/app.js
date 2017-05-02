const express  = require('express');
const app 	   = express();
const fs  	   = require('fs');
const Velocity = require('velocityjs');
const mockData = require('./mockData/mockdata');
const map	   = mockData.jspModel;
const proxyMiddleware = require('http-proxy-middleware');

const proxyConfig = {
	port       : 80,														//启动端口：localhost:80
	proxyUrl   : 'http://172.16.100.76',									//代理环境
	localPath  : 'D:/proj/qyd/deploy/p2p/src/main/webapp', 					//静态资源路径
	jspFilePath: 'D:/proj/qyd/deploy/p2p/src/main/webapp/WEB-INF/jsp', 		//jsp资源路径
	replaceReg : /<!--#include.*?-->/g,
	jspHelper  : {
		tag   	  : /(\<c.*\>)[\S\s]*?(\<\/c:.*\>)/g,						//jsp标签
		beginhtml : /(\<c.*\>)/g,				
		endhtml   : /(\<\/c:.*\>)/g,
		evalReg   : /\${[\S\s]+?}/g,
		type  	  : /<c:\S+/g,
		var   	  : /var="[\s\S]+?"/g,
		items 	  : /items="[\s\S]+?"/g,
		end   	  : /end="[\s\S]+?"/g,
		begin 	  : /begin="[\s\S]+?"/g
	},
	virtualReg : /virtual=".*?"/g,
	htmlTag    : '<!DOCTYPE html>',
	mockBase   : '/entrance/mt/',
	openMock   : false,														//mock服务开关
	mockList   : [
		'/entrance/mt/indexinfo/json',
		'/entrance/mt/querySurplusAmount/json',
		'/entrance/mt/possessionorderlist/json',
		'/entrance/mt/getQyyLoanList/json',
		'/entrance/mt/queryLoanList/json',
		'/entrance/mt/queryLoanInfo/json',	
		'/entrance/mt/queryLoanDetail/json',
		'/entrance/mt/queryApplyimg/json',
		'/entrance/mt/getContract/json'
	],
	staticPath:[
		'/src',
		'/static'
	]
}

//main
app.get('/*.shtml', (req, res) => {
	let originalUrl = req.originalUrl;
	console.log(getTime() + " 请求shtml模板："+originalUrl);

	//拼接shtml，htm的绝对路径
	let outFile 	   = proxyConfig.localPath + (originalUrl.indexOf("?") > -1 ? (originalUrl.substring(0,originalUrl.indexOf("?"))) : originalUrl);
	let orignFileData  = fs.readFileSync(outFile, 'utf8');//读取需要替换的文件
	let replaceArr	   = orignFileData.match(proxyConfig.replaceReg);//开始匹配include
	if(replaceArr){
		replaceArr.map((item) => {						//遍历替换
			let virtuaStr  = item.match(proxyConfig.virtualReg)[0]; //取出virtual="/public/footer.html"
			virtuaStr	   = virtuaStr.substring(virtuaStr.indexOf("\"")+1,virtuaStr.lastIndexOf("\""));//取出/public/footer.html准备读取文件
			let publicFile = fs.readFileSync((proxyConfig.localPath + virtuaStr), 'utf8');//读取要替换的文件
			orignFileData  = orignFileData.replace(item,publicFile);	  //替换
		});
	}	
  	res.send(orignFileData);
})



//parse vm template
app.get('/*.nohtm', (req, res) => {
	let originalUrl = req.originalUrl;
	console.log(getTime() + " 请求htm模板："+originalUrl);
	let url 	 = (originalUrl.indexOf("?") > -1 ? (originalUrl.substring(0,originalUrl.indexOf("?"))) : originalUrl);
	let option   = url.substring(1,url.lastIndexOf('/'));
	let assignId = url.substring(url.lastIndexOf('/')+1,url.lastIndexOf('.'));
	console.log(getTime() + "opt:"+option+"   id:"+assignId);//opt:transfer   id:f937a0da-e30e-483e-b2e2-ba2f5555fabb

	let pageData = null;
	if(option === 'transfer'){
		pageData = getAssignDetaile(assignId);
	}
	
	res.send(pageData);		
})
getAssignDetaile = (assID) =>{
	//模板解析
}

if(proxyConfig.openMock){
	//mock server
	app.use(proxyConfig.mockList,(req, res) => {
		let url = req.originalUrl;
		console.log(getTime() + " 请求接口："+url);
		var iotag = url.substring(url.indexOf(proxyConfig.mockBase)+proxyConfig.mockBase.length,url.lastIndexOf('/'));
		var resMock = mockData[iotag];
		if(!resMock){return;}
		
		console.log(resMock.caption);
		res.json(resMock.data);
	});
}

//statics
//app.use(express.static(localPath));
//TODO:之前的写法会和下面 / 的拦截器相冲突，所以拆分成子目录
proxyConfig.staticPath.map((item) => {
	app.use(item,express.static(proxyConfig.localPath+item));
});

//拦截根目录请求，替换成jsp页面
app.use('/$',(req, res) => {
	let jspConfig   = proxyConfig.jspHelper;
	let originalUrl = req.originalUrl;
	console.log(getTime() + " 请求jsp模板："+originalUrl);
	if(originalUrl === '/'){
		originalUrl = '/index.jsp';
	}
	//拼接jsp的绝对路径
	let outFile 	   = proxyConfig.jspFilePath + (originalUrl.indexOf("?") > -1 ? (originalUrl.substring(0,originalUrl.indexOf("?"))) : originalUrl);
	let orignFileData  = fs.readFileSync(outFile, 'utf8');//读取需要替换的文件
		orignFileData  = orignFileData.substring(orignFileData.indexOf(proxyConfig.htmlTag));				
    
    //标签转换
    let replaceArr	   = orignFileData.match(jspConfig.tag);//开始匹配所有jsp标签
	if(replaceArr){
		replaceArr.map((item,index) => {						//遍历替换
			let _item 	  = item,
				subdom    = [],
				beginHtml = item.match(jspConfig.beginhtml)[0], //取出标签头<c:forEach >  必不为空
				type      = beginHtml.match(jspConfig.type)[0],//取出C标签类型            必不为空
				items     = (beginHtml.match(jspConfig.items)||[null])[0],//取出C标签items          可能为空
				end       = (beginHtml.match(jspConfig.end)||[null])[0],//取出C标签items				可能为空
				begin     = (beginHtml.match(jspConfig.begin)||[null])[0],//取出C标签items			可能为空
				endhtml   = item.match(jspConfig.endhtml)[0], //取出标签尾部</c:forEach >				必不为空
				htmlItem  = _item.replace(beginHtml,'');
				htmlItem  = htmlItem.replace(endhtml,'');//取出实际html标签
				end 	  = end ? parseInt(end.substring(end.indexOf('"')+1,end.length-1)):null;
				begin 	  = begin ? parseInt(begin.substring(begin.indexOf('"')+1,begin.length-1)):null;
				//todo：此处使用forin便利赋值

			if(type.indexOf('forEach')>-1){
				//遍历标签
				let evalStr   = items.match(jspConfig.evalReg)[0];//取出${}内容
					evalStr   = evalStr.substring(evalStr.indexOf('{')+1,evalStr.indexOf('}')).replace(/ /g,'');
				let itemsData = eval(evalStr);
				console.log(evalStr)
				itemsData.map((data,i) => {
					if((begin && i < begin) || (end && i > end)){
						return;
					}
					let _data = data,
						_htmlItem = htmlItem,
						replaceArr =  _htmlItem.match(jspConfig.evalReg);
					replaceArr.map((evalS) => {
						let evalstring = evalS.substring(evalS.indexOf('{')+1,evalS.indexOf('}')).replace(/ /g,'');
						let _key  = evalstring.substring(evalstring.indexOf('.')+1);
						_htmlItem = _htmlItem.replace(evalS,data[_key]);
					});

					subdom.push(_htmlItem);
				});
			}
			if(subdom.length>0){
				orignFileData  = orignFileData.replace(item,subdom.join(''));	  //替换
			}
		});

	}	
  	res.send(orignFileData);
});

//proxy
app.use('/', proxyMiddleware({
    target: proxyConfig.proxyUrl,
    changeOrigin: true
}));
 
cleanCache = (module) => {
 	require.cache[require.resolve(module)] = null;
}
getTime = () => {
	let date = new Date();
	let now = "";
	now = date.getFullYear()+"-"; 
	now = now + (date.getMonth()+1)+"-";
	now = now + date.getDate()+" ";
	now = now + date.getHours()+":";
	now = now + date.getMinutes()+":";
	now = now + date.getSeconds()+"";
	return now+'——';
}
const server = app.listen(proxyConfig.port, () => {
  console.log(getTime() + ' proxy代理服务器已启动，正在监听:%s端口。', server.address().port);
});