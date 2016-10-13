

function init(){

  personCenter();

};


function personCenter(){

  //调取个人信息接口
  var param={};

	personalInfo(param,true,function(result){

	        if(result.code==0){
	        
	             if(result.data.headImg!=""){
                      $("#mic-header").attr("style","background:url("+result.data.headImg+") no-repeat center;background-size:cover;")
	             }else{

                 

	             	$("#mic-header").attr("style","background:url(../src/images/miccenter/personal-bg.png) no-repeat center;background-size:cover;")
	             }
	           
                if(result.data.userName!=""){
                    $("#micUserName").html(result.data.userName);
                }else{
                	  $("#micUserName").html("Admin");
                }

                


	        }else{

                console.log(result.msg);

	             $.wishListAlert("<div class='layer-ball-box'>"+result.msg+"</div>");
	        }
	});

};

	
function perInfomation(){
   
   window.location.href="personal_information.html";

};



function myfavorite(){

	window.location.href="myfavorite.html";
};

function myactivity(){
  
  window.location.href="myactivities.html";

};

function myOrder(){
  //我的预约

  window.location.href="../order/my_order.html";
  
};

function myCoupon(){

  window.location.href="../my_coupon/coupon.html";
}




function myWidding(){
//我的婚礼
  
  var param={};

   myWiddingAmend(param,true,function(result){

      if(result.code==0){

          if(result.data!=null){
             
         
             window.location.href="myWidding.html#slide8";
           
          }else{

               window.location.href="myWidding.html#slide1";
          }

      }else{
        
           console.log(result.msg)
          $.wishListAlert("<div class='layer-ball-box'>"+result.msg+"</div>");

      }


   });


};