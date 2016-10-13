
 var  cont = true;
 
  var that=null;

var dataType=null;

 var reInvidateCode = ''; //后台获取的验证码
  
var operateId=null; // 获取主键Id

 var Id = OperationURL.getQueryString("id");

function init(){


      var isView= OperationURL.getQueryString("isView");//获取是否被查看

           if(isView=="0"){
             //如果没被查看则调入
               operate();

            };
            



     update();


};



function update(){
    
 
 console.log(Id)

  var param = {
        id:Id,  
      
  };
  


 aliveInfo(param, true, function(result){

     var listData=result.data;

      if (result.code == 0) {

          console.log(result);

        $("#scr-main").html(template("template1",{data:listData}));


          

         $("#act-ontent").html(listData.content);


        $("#act-ontent p").attr("style","font-size:0.24rem;line-height:0.39rem;")

          $("#act-ontent img").each(function(i){

             
                $(this).removeAttr('style');
              
                $(this).attr("style","margin:0 auto;");
          });

       


        
      } else {

        console.log(result.msg);
      }

  });



};     



function detailClick(id,dataType) { 
   // 点击商品跳转到对应商品详情页。
    
 
   window.location.href ="../detailed_account/account_detail.html?id="+id+"&type="+dataType;
   

};









// =========点赞 收藏==注册登录模块==========


function operate(target,event,type,id){
 //查看 点赞 收藏 操作
  
  event.stopPropagation();

  that=target;

  dataType=type;
  
  operateId=id;

  var param={
     type:dataType,

     actionType:$(target).index()+1,
     id:operateId
  }

  console.log(param)

  

     lpcOperate(param, true, function(result){

      if(result.code==0){

         var origNum=parseInt($(that).find(".num").html())+1;

               $(that).find(".num").html(origNum);

               $(that).find("i").removeClass("bg-c");


              $(that).removeAttr("onclick"); //移除点击事件
      
       


      }else if(result.code==3){
         
           $("#main-box").hide();

           $("#islogin").show();

        
      }else{

         console.log(result.msg)
      }



     });
     


};



 function getInvidateCode() {

    //获取短信验证码 120秒倒计时

      var countDownTime = 120;

      var teleNumber = $("#tele-number").val();

       var param = {

        phoneNum: teleNumber

      };

      if(cont){

         var timer =setInterval(function (){

              countDownTime--;

            $(".count-down").children('i').html(countDownTime);

                  if (countDownTime == 0) {

                       cont=true;

                      clearInterval(timer);

                       countDownTime = 120;

                      $(".count-down").children('i').html(countDownTime);

                       
                   }
               
                  cont=false;


           }, 1000);

           

        getInvidateCodeInfo(param, false, function (result) {

               if(result.code==0){

                   console.log(result)

                   reInvidateCode = result.data.vCode;

                 }else{
                     
                     // console.log(result.msg)
                      hint_info(result.msg);

                 }

            
          });


       };

         
};




function bindPhone(){
  //绑定手机号
      
    var teleNumber = $("#tele-number").val();

    var validateCode = $("#validate-code").val();

       if (!validate.phone(teleNumber)) {

          hint_info("敢不敢把手机号写对");
        
          return false;
       };

      if(validateCode!=reInvidateCode){

         hint_info("您输入的验证码不正确");

         return false;
      }


      var param={
          id:operateId,
          
          type:dataType,
          
          actionType:$(that).index()+1,

          phoneNum :teleNumber,

          yzm:validateCode,
        
          inviteCode:$("#invite-code").val(),
      }
           
          
          
           console.log(param);

             load_start();

            actionLogin(param, false, function (result) {

                   load_stop();

                  if (result.code == 0) {


                       var origNum=parseInt($(that).find(".num").html())+1;

                       $(that).find(".num").html(origNum);

                       $(that).find("i").removeClass("bg-c");


                      $(that).removeAttr("onclick"); //移除点击事件

                       $("#islogin").hide();

                       $("#main-box").show();

                   
                     
                   } else {

                        hint_info(result.msg);
                   }

            });
      


  };



    function operate(){
             //查看 
              

              var param={
                 type:"8",

                 actionType:1,

                 id:Id
              }


             lpcOperate(param, true, function(result){
              //调查看接口
                

                  if(result.code==0){

                      console.log(result);

                  }else{
                    
                      console.log(result.msg)
                  }

             });

    };
