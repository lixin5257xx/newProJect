$(function () {
     var queryId = OperationURL.getQueryString("id");
     var queryType = OperationURL.getQueryString("type");
     
     var isView= OperationURL.getQueryString("isView");//获取是否被查看
           if(isView=="0"){
             //如果没被查看则调入
               operate();

            }
            

            function operate(){
             //查看
              var param={
                 type:queryType,

                 actionType:1,
                 id:queryId
              }


                 lpcOperate(param, true, function(result){
                  //调查看接口
                    

                      if(result.code==0){
                      }else{
                          console.log(result.msg)
                      }
                 });
        }


    // swiperTab 切换
    function swiperTab() {
        var mySwiper = new Swiper('.swiper-container', {
            onSlideChangeStart: function () {
                var index = mySwiper.activeIndex;
                if(index == 2){
                    var tabH = $(".tab-content-3 p").height();
                    $(".swiper-slide").css('height', tabH + 'px');
                    $(".swiper-wrapper").css('height', tabH + 'px');
                }else{
                    var H = $(".product-details").eq(index).height();
                    $(".swiper-slide").css('height', H + 'px');
                    $(".swiper-wrapper").css('height', H + 'px');
                }
            },
            onSlideChangeEnd: function (swiper) {
                var j = mySwiper.activeIndex;
                $('.swiper-nav li').removeClass('selected').eq(j).addClass('selected');
            }
        });

        $('.swiper-nav li').on('touchstart mousedown', function (e) {
            e.preventDefault();
            var i = $(this).index();
            if(i == 2){
                var tabH = $(".tab-content-3 p").height();
                $(".swiper-slide").css('height', tabH + 'px');
                $(".swiper-wrapper").css('height', tabH + 'px');
            }else{
                var H = $(".product-details").eq(i).height();
                $(".swiper-slide").css('height', H + 'px');
                $(".swiper-wrapper").css('height', H + 'px');
            }
            $('.swiper-nav li').removeClass('selected').eq(i).addClass('selected');
            mySwiper.slideTo(i, 1000, false);
        });
    }

    //页面滚动时导航置顶
    function navFixed() {
        $("#scroll-div").on("scroll",function () {
            var navTop = $(".tab-box").offset().top;
            var winScrollT = $(window).scrollTop();
            if ( winScrollT > navTop) {
                $(".swiper-nav").addClass('swiper-nav-fixed');
            } else {
                $(".swiper-nav").removeClass('swiper-nav-fixed');
            }

        });
    }

    // 跳转页面查询字段，渲染新页面
   
    var sendData = {
        "id": queryId,
        "type": queryType
    };
    getAccountDetailInfo(sendData, true, function (result) {
        if (result.code == 0) {
            isOrder = result.data.isSign;  // 是否预约状态
            var data = result.data;
            var str = result.data.detail;
            var brandStr = result.data.brand;
            var detailStr = template('account-detail', {data: data});
            $(".product-img-box").html(detailStr);
            $(".product-details-1").html(str);
            $(".tab-content-3").html(brandStr);

            var imgNum = $('img').length;
            $('img').load(function () {
                if (!--imgNum) {
                    var tabH = $(".product-details").height();
                    $(".swiper-wrapper").height(tabH);
                }
            });
            swiperTab();
            guessLikeDetail();
            navFixed();
            makeOrder();
        }
    });

    //我要预约跳转页面
    function makeOrder() {
        var url ="../order/";
        $("#order-btn ").click(function () {
            isLogin(null, false, function (result) {
                console.log(result);
                if (result.code == 0) {  //  已经绑定
                    if (isOrder == 0) {
                        window.location.href = url + "join_info.html" + "?id=" + queryId + "&type=" + queryType +"&phoneNum=" +result.data.phoneNum;
                    } else {
                        hint_info('您已预约,请到店体验');
                    }
                } else if (result.code == 1) {
                    hint_info('系统异常');
                } else if (result.code == 3) {  //  用户未登录
                    window.location.href = url + "bind_phone.html" + "?id=" + queryId + "&type=" + queryType +"&action_type=1";
                }
            })
        })
    }

    // 猜你喜欢 跳转详情页
    function guessLikeDetail() {
        $(".guess-like li").on("click", function () {
            var curId = $(this).attr('data-pid');
            var curType = $(this).attr('data-ptype');
            var url = "../detailed_account/";
            window.location.href = url + "account_detail.html?id=" + curId + "&type=" + curType;
        });
    }
});