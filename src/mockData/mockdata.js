var Mocks = {
	indexinfo:{
		caption:'首页剩余可投和最高收益率--联调OK',
		data:{
				"status":200,
				"errorCodes":[],
				"errorCodes1":[],
				"faultedProperties":[],
				"items":[
					{"totalAmount":782.5E+4,"highestRate":12.486062613738376}
				],
				"successful":true
			}
	},
	querySurplusAmount:{
		caption:'查询首页剩余可投金额',
		data:{
				"status":200,
				"errorCodes":[],
				"errorCodes1":[],
				"faultedProperties":[],
				"items":[
					{"totalAmount":1.001E+14,"highestRate":12.486062613738376}
				],
				"successful":true
			}
	},
	possessionorderlist:{
		caption:'轻盈首页加入记录',
		data: {
		    "resultParts": {

		    },
		    "items": [
		         {
		            "createTime":"2017-04-07 14:41:35.0", //购买时间
		            "buyerName":"姓**", //购买人
		            "sellerName":"姓**", //卖出人
		            "amount":2000000, //交易金额
		            "terminal":"PC", //终端类型
		            "buyType":"手动购买"  //预约购买还是手动购买
		        },
		         {
		            "createTime":"2017-04-07 14:48:25.0",
		            "buyerName":"姓**",
		            "sellerName":"姓**",
		            "amount":1000000,
		            "terminal":"PC",
		            "buyType":"手动购买"
		        },
		         {
		            "createTime":"2017-04-07 14:29:41.0",
		            "buyerName":"姓**",
		            "sellerName":"姓**",
		            "amount":1000000,
		            "terminal":"PC",
		            "buyType":"手动购买"
		        }
		    ],
		    "status":200,
		    "successful":true,
		    "errorCodes": [

		    ],
		    "errorCodes1": [

		    ],
		    "faultedProperties": [

		    ]
		}
	},
	getQyyLoanList:{
		caption:'轻盈信息列表,标的组成列表',
		data:
		{
		    "status": 200, 
		    "errorCodes": [ ], 
		    "errorCodes1": [ ], 
		    "faultedProperties": [ ], 
		    "items": [
		        {
		            "id": "23156133-77e6-4996-bf90-59868289bed7", 
		            "matchAmount": "199000000", 
		            "amount": "50000.00", 
		 "projectNumber": "ZCD123456", 
		            "name": "张三", // 债权出售人
		            "loanCloseTime": "2017-03-24T05:40:08.000+0000", 
		            "status": "OPEN",   // 状态：OPEN待转让  CLOSE已转让
		            "createTime": "2017-04-12T07:24:52.000+0000", 
		            "userType": 0, 
		            "psAmount": "50318.75",   // 债权价值 
		            "pdAmount": "50242.25",   // 转让价格
		            "remainingPeriod": 153    // 剩余期限
		        }
		    ], 
		    "pageSize": 10, 
		    "pageNumber": 1, 
		    "pagesCount": 0, 
		    "totalItemsCount": 1, 
		    "successful": true
		}
	},
	queryLoanList:{
		caption:'借款信息，标的详情',
		data:{
			"status":200,
			"errorCodes":[],
			"faultedProperties":[],
			"items":[
				{
					"amount":"200000000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},{
					"amount":"200000000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},{
					"amount":"200000000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},{
					"amount":"200000000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},{
					"amount":"200000000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},{
					"amount":"200000000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},{
					"amount":"200000000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},
			],
			"itemszr":[
				{
					"amount":"2000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},{
					"amount":"200000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},{
					"amount":"2000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},{
					"amount":"18156165",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},{
					"amount":"20002000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},{
					"amount":"200000000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},{
					"amount":"200000000",
					"timer":"2016-12-04  11:00:12",
					"name":" qyd_test1_1001",
					"meth":"手动购买"
				},
			],
			"pageSize":6,
			"pageNumber":1,
			"pagesCount":10,
			"totalItemsCount":6,
			"successful":true
		} 
	},
	queryLoanDetail:{
		caption:'一笔借款的详情，进度等',
		data:{		
			"status": 200,
			"errorCodes": [],
			"faultedProperties": [],
			"items": [
				{
				"loanType": "物流贷",
				"number": "GCD100018",
				"progress": 0,
				"amount": "100000.00",
				"matchAmount": "0.00",
				"interest": 8.6,
				"term": 180,
				"status": "OPEN"
				}
			],
			"successful": true
		}
	},
	queryLoanInfo:{
		caption:'获取详情页个人企业信息',
		data:{
		"status": 200,
		"errorCodes": [],
		"faultedProperties": [],
		"items": [
			{
				"loanDetail": {
					"passengers": 0,
					"status": "CLOSE",
					"loanTime": "2017-03-23",
					"releaseTime": "2017-03-23",
					"fullTime": 0
				},
				"borrowerInfo": {
					"position": "合资",
					"companyAddress": "地址aaf75e11c5ac",
					"identityId": "0177071092********",
					"inDustry": "4S店",
					"companyName": "公司aaf75e11c5ac",
					"workYear": "4",
					"marriage": "已婚",
					"isCompany": false,
					"annualIncome": 12,
					"companyNature": "个体",
					"address": "51,5101,510104",
					"age": "36",
					"name": "姓**",
					"gender": "女"
				},
				"contractList": [
					{
					"relationId": "622f8ed8-2619-4e5b-bdf6-76e8630122d9",
					"contractNumber": "C010750055"
					},
					{
					"relationId": "0a9a8128-0a4d-4c0c-96db-330856cb5694",
					"contractNumber": "C010750056"
					},
					{
					"relationId": "622f8ed8-2619-4e5b-bdf6-76e8630122d9",
					"contractNumber": "C010750055"
					},
					{
					"relationId": "0a9a8128-0a4d-4c0c-96db-330856cb5694",
					"contractNumber": "C010750056"
					},{
					"relationId": "0a9a8128-0a4d-4c0c-96db-330856cb5694",
					"contractNumber": "C010750056"
					},{
					"relationId": "0a9a8128-0a4d-4c0c-96db-330856cb5694",
					"contractNumber": "C010750056"
					},{
					"relationId": "0a9a8128-0a4d-4c0c-96db-330856cb5694",
					"contractNumber": "C010750056"
					},{
					"relationId": "0a9a8128-0a4d-4c0c-96db-330856cb5694",
					"contractNumber": "C010750056"
					},{
					"relationId": "0a9a8128-0a4d-4c0c-96db-330856cb5694",
					"contractNumber": "C010750056"
					},{
					"relationId": "0a9a8128-0a4d-4c0c-96db-330856cb5694",
					"contractNumber": "C010750056"
					}
				],
				"guaranteeCompanyInfo": {
					"companyAddress": "最大股东营业执照号011ad428311c",
					"businessLicense": "营业执照号011ad428311c",
					"registYear": "永久",
					"legalRepresentativeStatus": "1404271976********",
					"inDustry": "汽车经销商",
					"companyName": "公司011ad428311c",
					"legalRepresentative": "法**"
				},
				"creditInfo": {
					"repayLoanFinish": 0,
					"repayMoney": 3258,
					"alreadyRepayMoney": 0,
					"creditAmount": 0,
					"repayLoanUnfinish": 1,
					"applyLoanSuccess": 1
				}
			}
		],
		"successful": true
		}
	},
	queryApplyimg:{
		caption:'获取授信资料图片接口',
		data:{
		    "status": 200, 
		    "errorCodes": [ ], 
		    "faultedProperties": [ ], 
		    "items": [
		        {
		            "id": "0004e632-6f41-40be-8e2f-9cce68037760", 
		            "filename": "2.jpg", 
		            "path": "/opt/tomcat//upload/d26861ff-7cab-4f73-ad53-403a8e67716d", 
		            "swiftId": ""
		        }, 
		        {
		            "id": "681cc157-7e94-4ea9-95a8-ad6ab78dccb9", 
		            "filename": "1.jpg", 
		            "path": "/opt/tomcat//upload/d26861ff-7cab-4f73-ad53-403a8e67716d", 
		            "swiftId": ""
		        }
		    ], 
		    "successful": true
		}
	},
	modelDisplay:{
		caption:'获取协议文本接口',
		data:{
		    "status": 200,
		    "resultCode": {
		        "code": "SUCCESS",
		        "message": "操作成功"
		    },
		    "errorCodes": [],
		    "errorCodes1": [],
		    "faultedProperties": [],
		    "items": [
		        "<html xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:w=\"urn:schemas-microsoft-com:office:word\" xmlns=\"http://www.w3.org/TR/REC-html40\">\r\n<head>\r\n<meta http-equiv=Content-Type  content=\"text/html; charset=utf-8\" >\r\n<title></title>\r\n</head>\r\n<style type=\"text/css\">\r\nbody{\r\n   -moz-user-select: none; /*火狐*/\r\n   -webkit-user-select: none;  /*webkit浏览器*/\r\n   -ms-user-select: none;   /*IE10*/\r\n   -khtml-user-select: none; /*早期浏览器*/\r\n   user-select: none;\r\n   background-color:#ffffff;\r\n}\r\n.pageDiv{\r\n\tpage-break-after:always;\r\n}\r\n\r\np { overflow: hidden;line-height:18px; font-size:12px;}\r\n.sz12{font-size:14px;font-weight:600;}\r\n.left-wrap { float: left }\r\n.right-wrap{ float: right }\r\n.l{float:left;}\r\n.r{float:right;}\r\n.clear{clear:both;}\r\n.align-center { text-align: center }\r\n.align-right { text-align: right }\r\n.align-left { text-align: left }\r\n.indent { text-indent: 30px }\r\n.margin-right { margin-right: 120px; margin-bottom: 30px }\r\n.sz16{font-size:18px;font-weight:600;}\r\n.bold{font-weight:bold;font-style:nomal;}\r\n.chapter{background:url(img/1.png) no-repeat 86px -1px;height:133px;}\r\n.finger{background:url(img/2.png) no-repeat 121px 42px;height:133px;}\r\n.notice { text-align: left; font-weight:bold; } \r\ntable.top-table { background: #000; width: 100%; margin-bottom: 10px }\r\ntable.top-table td { background: #FFF; padding: 10px }\r\n</style>\r\n<body style=\"width: 640;margin: auto;\">\r\n<div><div>\r\n  <h3 class=\"sz16 align-center\">债权转让协议</h3>\r\n  <p class=\"align-right sz12\">编号：<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p>\r\n  <p class=\"sz12\">甲方（债权受让人）：<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p>\r\n  <p class=\"sz12\">营业执照/身份证号：<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p><br>\r\n  <p class=\"sz12\">乙方（债权出让人）：<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p>\r\n  <p class=\"sz12\">轻易贷用户名：<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p>\r\n  <p class=\"sz12\">营业执照/身份证号：<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p>\r\n \r\n  <p >基于乙方自愿通过轻易科技有限公司创建并运营的网络服务平台----轻易贷网络借贷信息中介服务平台（网址：www.qingyidai.com，以下简称“轻易贷”）撮合，向甲方转让自己所取得的债权事宜，双方经协商一致，达成如下协议：</p>\r\n\r\n  <p class=\"sz12\">1.债权转让标的</p>\r\n  <p >乙方同意将其通过轻易贷的居间协助而形成的有关债权（以下简称“标的债权”）转让给甲方，甲方同意购买标的债权。标的债权具体信息如下：</p>\r\n  <p >1.1“标的债权”信息： </p>\r\n  <table class=\"top-table\">\r\n    <tr>\r\n      <td width=177  ><p >名称</p></td>\r\n      <td width=481 ><p ><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p></td>\r\n    </tr>\r\n    <tr>\r\n      <td width=177 ><p >借款本金</p></td>\r\n      <td width=481 ><p ><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>￥</p></td>\r\n    </tr>\r\n    <tr>\r\n      <td width=177 ><p >借款利率</p></td>\r\n      <td width=481 ><p ><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u >%/180天。</p></td>\r\n    </tr>\r\n    <tr>\r\n      <td width=177 ><p >借款期限</p></td>\r\n      <td width=481 ><p >自<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>年<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>月<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>日（起息日）起，\r\n         </p>\r\n        <p >至<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>年<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>月<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>日（到期还款日）止\r\n         </p></td>\r\n    </tr>\r\n  </table>\r\n  <p >1.2“标的债权转让部分”信息：</p>\r\n  <table class=\"top-table\">\r\n    <tr>\r\n      <td width=177  ><p >转让标的债权</p></td>\r\n      <td width=479 ><p ><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>￥</p></td>\r\n    </tr>\r\n    <tr>\r\n      <td width=177 ><p >转让标的价格</p></td>\r\n      <td width=479   ><p ><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>￥</p></td>\r\n    </tr>\r\n    <tr>\r\n      <td width=177 ><p >转让生效日</p></td>\r\n      <td width=479 ><p ><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u></p></td>\r\n    </tr>\r\n  </table>\r\n  <p class=\"sz12\">2.定义</p>\r\n  <p>2.1《借款及担保协议》指由借款人和原始出借人就标的债权达成的借款协议，其内容作为本协议重要组成部分列于本协议附件中，为借款人的原始信息。<br>\r\n     2.2原始出借人指《借款及担保协议》中列明的出借人，为符合中国法律规定的具有完全民事权利能力和民事行为能力，独立享有和承担民事权利义务的自然人或机构。<br>\r\n     2.3借款人指《借款及担保协议》中列明的借款人，为符合中国法律规定的具有完全民事权利能力和民事行为能力，独立行使和承担原始《借款及担保协议》项下权利义务的自然人或符合中国法律规定的企业法人或其他机构。<br>\r\n     2.4债权受让人为符合中国法律规定的具有完全民事权利能力和民事行为能力，独立承担民事权利义务的自然人或机构。<br>\r\n     2.5转让生效日指受让人以网络在线点击确认的方式接受本协议且通过轻易贷或轻易贷委托的第三方成功向债权出让人支付转让价款之日。<br>\r\n     2.6转让标的价格指本协议中列明的债权出让人将标的债权部分转让的转让价格，为债权受让人向债权出让人支付的转让标的债权的对价。<br>\r\n     2.7转让债权最终到期日指本协议中列明的标的债权的到期还款日，即该笔借款债权原始借款期限届满之日。\r\n  <p>\r\n  <p class=\"sz12\">3.标的债权的转让</p>\r\n  <p>3.1甲乙双方同意并确认，双方通过自行或授权有关方根据轻易贷有关规则和说明，在轻易贷以网络在线点击确认的方式进行债权转让和受让。<br>\r\n     3.2双方接受本协议且轻易贷审核通过时，本协议立即成立，并待转让价款支付完成时生效。出让人将标的债权转让给受让人的价格为转让价格。协议成立的同时甲方授权轻易贷将转让价格等额的金额划转给乙方，上述转让价款划转完成即视为本协议生效且标的债权转让成功。<br> \r\n     3.3自转让生效日起，甲方享有所有标的债权的权利、利益和收益以及与上述相关的任何其他权利、诉求和利益(包括但不限于按约定收取标的债权本金、相应利息及担保公司提供的担保权益)。<br>\r\n     3.4自转让生效日起，甲方将自动受原始《借款及担保协议》中相关条款和条件的约束；并享有原始《借款及担保协议》中有关出借人享有的相关权利，承担出借人应承担的责任和义务。<br> \r\n     3.5经充分了解本债权转让交易的特点及风险，本协议双方在此确认并授权轻易贷将本债权转让交易通知担保方（如有）；本协议双方在此确认并授权轻易贷视情况（在必要时）将本债权转让交易通知借款人。\r\n  </p>\r\n  <p class=\"sz12\">4.陈述和保证</p>\r\n  <p>4.1乙方作出如下陈述和保证：<br>\r\n  4.1.1乙方拥有完全的民事权利能力和民事行为能力；<br>\r\n  4.1.2除本协议外，乙方保证未订立任何协议出售、转让或其他方式处置本协议项下的全部或部分标的债权；<br>\r\n  4.1.3在转让生效日，乙方不存在不能履行其在本协议项下的义务的诉讼、仲裁或行政程序。\r\n  </p>\r\n  <p class=\"sz12\">5.保密条款</p>\r\n  <p>5.1本协议签署后，除非事先得到另一方的书面同意，甲乙双方不得向轻易贷之外的任何第三方披露本协议以及本协议项下的事宜以及与此等事宜有关的任何文件、资料或信息。本款的约定不适用于下列保密信息：<br>\r\n      (a)从披露方获得时，已是公开的；<br>\r\n     (b)从披露方获得前，接受方已经获知的；<br>\r\n      (c)从有正当权限并不受保密义务制约的第三方获得的；<br>\r\n     (d)非依靠披露方披露或提供的信息独自开发的。<br>\r\n      5.2本协议双方因下列原因披露保密信息，不受前款的限制：<br>\r\n      (a)向本协议双方的雇员及其聘请的会计师、律师、咨询公司披露；<br>\r\n      (b)因遵循适用的法律、法规的强制性规定而披露；<br>\r\n      (c)依据其他应遵守的法规向政府机构进行的披露。<br>\r\n     5.3债权出让人和债权受让人提供给轻易贷和担保公司的信息及债权出让人和债权受让人享受轻易贷或担保公司服务产生的信息(包括本协议签署之前提供和产生的)，可由轻易贷和担保公司共享，法律禁止的除外。<br>\r\n     5.4各方应采取所有其他必要、适当和可以采取的措施，以确保信息的保密性。<br>\r\n    5.5各方在本条项下的权利和义务在本协议终止或到期后应继续有效。\r\n  </p>\r\n  <p class=\"sz12\">6.其他</p>\r\n  <p >6.1本协议双方确认并同意，委托轻易贷对本协议项下的任何金额进行计算，其计算结果应作为该金额有关事项的终局证明。<br>\r\n     6.2本协议双方同意并确认，本协议一方向另一方提供信息时均应同时将信息提供给轻易贷。本协议双方授权轻易贷根据本协议任何一方的合理要求向其提供本协议另一方向轻易贷提供的所有信息。<br>\r\n     6.3本协议双方同意并确认，出让人和受让人通过其轻易贷账户和银行账户采取的行为所产生的法律后果和法律责任归属于出让人和受让人本人；出让人和受让人授权并委托轻易贷根据本协议所采取的全部行动和措施的法律后果均归属于出让人和受让人本人，与轻易贷无关，轻易贷也不因此承担任何责任。<br>\r\n     6.4本协议双方同意并确认，轻易贷有权按照轻易贷网站届时公布的收费公告（包括收费标准）就其为出让人和受让人提供的平台服务收取服务费。出让人同意并授权轻易贷或轻易贷委托的第三方可以直接从标的债权转让交易的转让价款中划扣其应付轻易贷的一切费用和款项。<br>\r\n     6.5本协议中部分条款根据相关法律法规的规定成为无效，或部分无效时，该等无效不影响本协议项下其他条款的效力，本协议双方仍应履行。<br>\r\n     6.6本协议双方委托轻易贷保管所有与本协议有关的书面文件或电子信息；本协议双方同意并确认由轻易贷提供的与本协议有关的书面文件或电子信息在无明显错误的情况下应作为本协议有关事项的终局证明。<br>\r\n     6.7本协议双方应自行承担由于订立和履行本协议产生的相关税费。<br>\r\n     6.8任何一方根据本协议的约定作出的或与本协议有关的通知和/或文件均应符合轻易贷交易规则。\r\n  </p>\r\n  <p class=\"sz12\">7.法律适用和争议解决</p>\r\n  <p>7.1 双方同意，如果一方违反其在本协议中所作的保证、承诺或任何其他义务，致使其他方遭受或发生损害、损失等责任，违约方须向守约方赔偿守约方因此遭受的一切经济损失。<br>\r\n    7.2本协议的签订、履行、终止、解释均适用中国法律。各方同意，因本协议所产生的或与本协议有关的一切争议，各方应协商解决；协商无法达成一致的，任何一方均有权向有管辖权的人民法院提起诉讼。\r\n  </p>\r\n  <p class=\"sz12\">8.附件</p>\r\n  <p>借款人和原始出借人签署的《借款及担保协议》（编号：<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>），点击登录轻易贷网站查看。</p>\r\n</div></div>\r\n</body>\r\n</html>"
		    ],
		    "successful": true
		}
	},
	jspModel:{	
		desc:"jsp标签模板数据",
		MEDIAREPORTLIST:[
			{
				startTime:'2017-02-10',
				page_no:1611,
				cover:'https://www.qingyidai.com/upload/cmsimage/17/03/28/mediareport/2b6db788-1ca2-469a-9911-9faca6048b78/1490689117166.jpg',
				title_abstracts:'开元金融23周年'
			},{
				startTime:'2017-02-10',
				page_no:1607,
				cover:'https://www.qingyidai.com/upload/cmsimage/17/03/06/mediareport/5c02d201-64c5-47fa-ba6b-65563cbcfae8/1488783283262.jpg',
				title_abstracts:'开元金融23周年'
			},{
				startTime:'2017-02-10',
				page_no:1611,
			cover:'https://www.qingyidai.com/upload/cmsimage/17/01/23/mediareport/b5e6f92c-e222-4019-bc83-15a9eda804e4/1485149296077.jpg',
				title_abstracts:'开元金融23周年'
			},{
				startTime:'2017-02-10',
				page_no:1607,
				cover:'https://www.qingyidai.com/upload/cmsimage/16/12/02/mediareport/d2634ec2-0538-4710-9ac9-c7c2c45357a8/1480658361251.jpg',	
				title_abstracts:'开元金融23周年'
			}
		],
		FINANCIALPROFESSIONLIST:[
			{
				startTime:'2017-02-10',
				page_no:1,
				cover:'https://www.qingyidai.com/upload/cmsimage/16/04/01/financialprofession/e2f33bf7-5f8e-4b4d-a535-fdfc4994530c/1459490096195.png',
				title_abstracts:'hello'
			},{
				startTime:'2017-02-10',
				page_no:1,
				cover:'https://www.qingyidai.com/upload/cmsimage/16/03/25/financialknowledge/164e6d6b-1f4f-41dd-83a9-19a0981480d3/1458886961206.jpg',
				title_abstracts:'hello'
			},{
				startTime:'2017-02-10',
				page_no:1,
				cover:'https://www.qingyidai.com/upload/cmsimage/17/03/28/mediareport/2b6db788-1ca2-469a-9911-9faca6048b78/1490689117166.jpg',
				title_abstracts:'hello'
			},{
				startTime:'2017-02-10',
				page_no:1,
				cover:'https://www.qingyidai.com/upload/cmsimage/17/03/06/mediareport/5c02d201-64c5-47fa-ba6b-65563cbcfae8/1488783283262.jpg',
				title_abstracts:'hello'
			},{
				startTime:'2017-02-10',
				page_no:1,
				cover:'https://www.qingyidai.com/upload/cmsimage/17/01/23/mediareport/b5e6f92c-e222-4019-bc83-15a9eda804e4/1485149296077.jpg',
				title_abstracts:'hello'
			},{
				startTime:'2017-02-10',
				page_no:1,
				cover:'https://www.qingyidai.com/upload/cmsimage/16/12/02/mediareport/d2634ec2-0538-4710-9ac9-c7c2c45357a8/1480658361251.jpg',
				title_abstracts:'hello'
			}
		]
	}
};

module.exports = Mocks;
