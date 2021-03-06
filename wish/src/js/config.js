/**
 * 配置说明
 * 
 */
(function(window){
    //图片服务器
    var imgServer="http://image.tonglianw.cn:9000/";

    //区域域名

    var areaDomain = "http://localhost:9005/";
    //微信支付
    var wxPay = "http://wxpay.tonglianw.cn";
    //服务接口
    var url = "";
    var type = "POST",datatype = "JSON";
    //test:本地测试 local:本地发布 debug:测试调试 publish:生产发布
    var model = "publish";  //debug
    
    if(model=="local"){

        url = "http://127.0.0.1:8080/";

    }else if(model=="debug"){

          url = "http://192.168.2.100:8080/wishlist_mobile/mobile/";
        
    }else if(model=="publish"){

     url = "http://m.wishlist1314.com/wishlist_mobile/mobile/";    

}



    function config() {
        var getType = function(){
            return type;
        };
        var getUrl = function () {
            return url;
        };
        var getDataType = function () {
            return datatype;
        };
        var getUpload = function () {
            return imgServer+"21/upload";
        };
        var getImgServer = function () {
            return imgServer;
        };
        var getAreaDomain = function(){
            return areaDomain;
        };
        var getWxPay = function(){
            return wxPay;
        }
        return {
            getUrl: getUrl,
            getType:getType,
            getDataType: getDataType,
            getUpload:getUpload,
            getImgServer:getImgServer,
            getAreaDomain:getAreaDomain,
            getWxPay:getWxPay
        }
    }

    window.config = new config();

})(window);