/**
 * Created by 130383 on 2017/4/1.
 */
ky.dataAcquisition = {
    store:{ //配置项
        storeVer:'1.0.0',
        storeInput:"ACINPUT",
        storePage:"ACPAGE",
        storeClick:"ACCLIK",
        storePath:"ACPATH",
        sendUrl:"http://localhost:9090/asd/asd",
        maxDays:5
    },
    util:{ //工具函数
        isNullOrEmpty:function(obj){
            return  ( obj !== 0|| obj !== "0" || obj === null || obj === undefined || obj === "" || obj === "null" || typeof obj === "undefined");
        },
        setCookie:function(name,value,Day){
            if(!Day)Day=this.store.maxDays;
            var exp = new Date();
            exp.setTime(exp.getTime() + Day*24*60*60000);
            document.cookie = name + "="+ encodeURIComponent(value) + ";domain=*****.com.cn;expires=" + exp.toUTCString() + ";path=/";
        },
        getCookie:function(name){
            if(name){
                var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                if(arr=document.cookie.match(reg))
                    return (decodeURIComponent(arr[2]));
                else
                    return null;
            }else{
                return null;
            }
        },
        delCookie:function(name) {
            this.setCookie(name,'',-1);
        }
    },
    setInputAc:function(e){ //输入框操作数据保存
        var storeString = this.util.getCookie(this.store.storeInput);
        var elementId = e.id;
        var ACIdata;
        if(!this.util.isNullOrEmpty(storeString)){
            ACIdata=JSON.parse(storeString);
        }else{
            ACIdata={};
        }
        var inputData = ACIdata[elementId];
        //已存在的数据做补充不新增
        var  now =new Date().getTime();
        if(this.util.isNullOrEmpty(inputData)){
            inputData={};
            inputData.type=this.store.storeInput;
            inputData.eId=elementId;
            inputData.val=''+e.value;
            inputData.sTme=now;
            inputData.eTme=now;
        }else{
            inputData.val+=(","+(now-inputData.eTme)+":"+e.value);
            inputData.eTme=now;
        }
        ACIdata[elementId]=inputData;
        this.util.setCookie(this.store.storeInput,JSON.stringify(ACIdata));
    },
    setClickAc:function(e){  //元素点击数据保存
        var storeString=this.util.getCookie(this.store.storeClick);
        var ACBdata = this.util.isNullOrEmpty(storeString) ? [] : (JSON.parse(storeString));

        ACBdata.push({type:this.store.storeClick,eId:e.id,sTme:new Date().getTime()});
        this.util.setCookie(this.store.storeClick,JSON.stringify(ACBdata))
    },
    getAc2Type:function(type){  //获取本地数据
        var storeArr = [];
        var storeString = this.util.getCookie(type);
        if(!this.util.isNullOrEmpty(storeString)){
            storeArr = JSON.parse(storeString);
        }
        this.util.delCookie(type);
        return storeArr;
    },
    getACBtarget:function(node){//获取实际目标元素，解决js动态添加dom元素无法采集的问题
        var targetAc;
        if(node&&node.id&&node.id.indexOf('qyd_acb')>-1){
            targetAc = node;
        }else{
            var parentNode = node&&node.parentNode;
            if(Object.prototype.toString.call(parentNode) === Object.prototype.toString.call(document)){
                targetAc = null;
            }else{
                this.getACBtarget(parentNode);
            }
        }
        return targetAc;
    },
    postData: function(data){//数据上报
        $.ajax({
            type:"post",
            dataType: "json",
            contentType:'application/json;charset=UTF-8;',
            data:JSON.stringify(data),
            url:this.store.sendUrl,
            success:function(data){}
        });
    },
    init:function($){
        var _this=this;
        var _domList=[];
        var _ACIDoms=$("*[id^='qyd_aci']");
        var storePath = this.util.getCookie(this.store.storePath);
        var inputAcData = this.getAc2Type(this.store.storeInput);
        var clickAcData = this.getAc2Type(this.store.storeClick);

        if(_this.util.isNullOrEmpty(storePath)){
            storePath = window.location.pathname;
            _this.util.setCookie(_this.store.storePath,storePath);

        }
        _domList.push({'type':_this.store.storePage,'path':storePath});
        //先上报上一个页面数据
        if(inputAcData.length > 0){
            _domList = _domList.concat(_domList,inputAcData);
        }
        if(clickAcData.length > 0){
            _domList = _domList.concat(_domList,clickAcData);
        }
        if(_domList.length>0){
            _this.postData(_domList);
        }
        //对本页面添加监听（ios兼容性问题）
        if(/iphone|ipad|ipod/i.test(window.navigator.userAgent)){
            var elements = document.getElementsByTagName("body")[0].childNodes;
            for(var z = 0,length = elements.length; z<length; z++){
                elements[z].addEventListener("click", function(){});
            }
        }

        for(var i=0;i<_ACIDoms.length;i++){
            var selector = _ACIDoms[i];
            if(selector.type&&['text','tel','password'].indexOf(selector.type.toLowerCase())>-1){
                selector.addEventListener("input",function(){
                    _this.setInputAc(this);
                });
                selector.addEventListener("focus",function(){
                    _this.setInputAc(this);
                });
                selector.addEventListener("blur",function(){
                    _this.setInputAc(this);
                });
            }
        }
        document.addEventListener("click",function(e){
            var  event=window.event||e;
            var  target = event.srcElement?event.srcElement:event.target;
            var  targetNode = _this.getACBtarget(target);
            if(!_this.util.isNullOrEmpty(targetNode)){
                _this.setClickAc(targetNode);
            }
        });
    }
};
ky.dataAcquisition.init(jQuery);