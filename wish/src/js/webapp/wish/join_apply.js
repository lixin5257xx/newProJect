
 
 var phone=OperationURL.getQueryString("phone");

function init(){

       

        $("#phone").val(phone);
       
  
      $("#wishName,#phone,#apply-num").bind("keyup", function(){
          

		        var name = $("#wishName").val();

		        var phone = $("#phone").val();

		        var applyNum=$("#apply-num").val();

		        if(name != "" &&phone != ""&& applyNum!=""){

		            $("#btn-sure").addClass("active");

		             $("#btn-sure").attr("disabled", false);

		        } else {

		            $("#btn-sure").removeClass("active");
		            $("#btn-sure").attr("disabled", true);
		        }
       });
      
       
     


};



function sureClick(){
	   //确认报名 

	   var name = $("#wishName").val();

	   var phone = $("#phone").val();
	
	   var applyNum=$("#apply-num").val();
      
         if (!validate.phone(phone)) {

	    	   $.wishListAlert("敢不敢把手机号写对！");
	    	
	    	    return false;
       	 };

        var  activityId=OperationURL.getQueryString("id");

    
        var param = {

            id: activityId,
        	name:name,
            phoneNum :phone,
            num :applyNum 
        };

      $.loadingShow();
     
       applyName(param,true, function(result){
           
               console.log(result)

         $.loadingHide();

            if(result.code == 0){

                   $.wishListAlert("<div class='layer-ball-box'><i  class='iconfont circle-hook' style='margin-bottom:18px;'>&#xe66c;</i>"+result.msg+"</div>");
               

                  window.location.href = result.data.link+"&oid=" + result.data.phoneNum + "&magic=[{key:'手机号码',val:'"+result.data.phoneNum+"'},{key:'姓名',val:'" + result.data.name + "'},{key:'报名时间',val:'" + result.data.signTime + "'},{key:'报名商品名称',val:'" + result.data.title + "'},{key:'报名人数',val:'" +  result.data.inNum + "'}]";

                

            }else{

                $.wishListAlert("<div class='layer-ball-box'><i  class='iconfont circle-hook-fork' style='margin-bottom:18px;'>&#xe629;</i>"+result.msg+"</div>");

            }


        });
  
};
