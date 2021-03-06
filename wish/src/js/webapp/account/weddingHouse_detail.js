$(function () {
    var queryId = OperationURL.getQueryString("id");
    var queryType = OperationURL.getQueryString("type");
    var sendData = {
        id: queryId,
        type: queryType
    };

    // 获取婚礼堂详情
    weddingHouseDetailInfo(sendData, false, function (result) {
        console.log(result);
        if (result.code == 0) {
            var isOrder = result.data.isSign;  // 是否预约状态
            var weebingStr = template('webbing-house', result);
            $(".product-top").html(weebingStr);
            var reviewStr = template('editor-review', result);
            $(".review").html(reviewStr);
           // myScroll.refresh();
            swipeImg();

            var length = $(".exhibition-box >div").length;
            if (length > 2) {
                $(".check-all").show();
            } else {
                $(".check-all").hide();
            }
            if (isOrder == 0) {
                makeOrder();
            } else {
                hint_info('您已预约,请到店体验');
            }
        }
    });

    //获取婚礼堂菜单详情
    weddingHouseMenuInfo(sendData, false, function (result) {
        if (result.data.length !== 0) {
            var menuData = result.data;
            if (result.code == 0) {

                var menuAry = [];

                $.each(result.data, function (index, item) { /*tab导航栏数据绑定*/
                    menuAry.push({cName: item.cName, cPrice: item.cPrice})
                });
                var weebingMenuStr = template('meal-menu-tab', {data: menuAry});
                $(".menu-tab").html(weebingMenuStr);
                /*菜单内容数据绑定*/
                var firstData = menuData[0];
                var menuStr = template('menu-gird', firstData);
                var planStr = template('plan-gird', firstData);
                console.log(firstData);
                $(".menu-right").html(menuStr);
                $(".plan-right").html(planStr);
                initMenuH();
                $(".packge-tab>ul>li").click(function () {
                    var index = $(this).index();
                    var curData = menuData[index];
                    $(this).addClass('selected').siblings().removeClass('selected');
                    console.log(curData);
                    var girdStr = template('menu-gird', curData);
                    var planStr = template('plan-gird', firstData);
                    $(".menu-right").html(girdStr);
                    $(".plan-right").html(planStr);
                    initMenuH();
                    checkMenu();
                });

            }
        }
    });

    // 查看全部
    $(".check-all").click(function () {
        var h = $(".exhibition-box").height();
        if (h == 252) {
            $('.exhibition-box').css("height", "auto");
            $(this).children('span').html('向上收起');
            $(this).children('i').addClass('icon-up');
        } else {
            $('.exhibition-box').css("height", "252px");
            $(this).children('span').html('查看全部');
            $(this).children('i').removeClass('icon-up');
        }

    });
    function initMenuH() {
        var menuRightH = $(".menu-right").outerHeight();
        var planRightH = $(".plan-right").outerHeight();
        $(".menu-left").height(menuRightH - 1).css("line-height", menuRightH + 'px');
        $(".plan-left").height(planRightH - 1).css("line-height", planRightH + 'px');
    }

    initMenuH();
    /*遮罩层弹出*/
    function layerShow() {
        var winW = $(window).width();
        var winH = $("body").height();
        $('.black-layer').css({
            'width': winW,
            'height': winH
        }).show();
    }

    /*遮罩层隐藏*/
    function layerHide() {
        $('.black-layer').hide();
        $(".menu-content").hide();
    }


    //查看菜单内容
    function checkMenu() {
        $(".w-66 >ul>li a").on("click", function () {
            layerShow();
            var $curEle = $(this).parent().next(".menu-content");
            $curEle.show();
            if ($curEle.find('ul li').length > 2) {
                $(".check-menu-all").show();
            } else {
                $(".check-menu-all").hide();
            }
        });

        //策划中，查看单项介绍
        $(".plan-content li").on("click", function () {
            $(this).siblings().find("p").hide();
            $(this).find('i').toggleClass('icon-arrow-bottom');
            $(this).find('p').toggle();
        });

        // 菜单中展开全部
        $(".check-menu-all").click(function () {
            $(".menu-content ul").css("max-height", "inherit");
        });
        $(".close-menu").click(function () {
            layerHide();
            $(".menu-content").hide();
        });
    }

    checkMenu();
    //调用顶部轮播图
    function swipeImg() {
        var swiper_banner = new Swiper('.swiper-banner', {
            pagination: '.swiper-pagination',
            paginationClickable: false,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            loop: true

        });
    }

    function exhibitionAlbum(className) {
        var albumSwiper = new Swiper(className, {
            pagination: '.pagination',
            loop: true,
            grabCursor: true,
            paginationClickable: true
        })
    }

    // 宴会厅图片相册展示
    var winW = $(document).width();
    $(".exhibition-album").width(winW);
    function checkExhibition() {
        $(".exhibition-box dl dt").click(function () {
            layerShow();
            $(".scr-section").css("overflow-y", "hidden");
            var index = $(this).parent().parent().index();
            var curAlbumName = $(this).parent().next().children().attr("class");
            $(this).parent().next().children().attr("class", curAlbumName + index);
            curAlbumName = $(this).parent().next().children().attr("class");
            var swiperName = '.' + curAlbumName.split(' ')[1];
            $(this).parent().next('.exhibition-album').show();
            exhibitionAlbum(swiperName);
        });
    }

    checkExhibition();
    $(".black-layer").click(function () {
        layerHide();
        $(".scr-section").css("overflow-y", "scroll");
        $(".exhibition-album").hide();
    });
    /*我要预约跳转页面*/
    function makeOrder() {
        var localUrl = "http://127.0.0.1:8080/order/";
        //var hostUrl = "";
        var hostUrl = "http://m.wishlist1314.com/wishlist_mobile/mobileStation/order/";
        var url = hostUrl || localUrl;
        $("#order-btn ").click(function () {
            isLogin(null, false, function (result) {
                if (result.code == 0) {  // 已经绑定
                    window.location.href = url + "join_info.html" + "?id=" + queryId + "&type=" + queryType;
                } else if (result.code == 1) {
                    hint_info('系统异常');
                } else if (result.code == 3) {  //  用户未登录
                    window.location.href = url + "bind_phone.html" + "?id=" + queryId + "&type=" + queryType;
                }
            })
        })
    }
    makeOrder();

    //统筹流程弹窗
    function planDialog() {
        var winW = $(window).width();
        var winH = $(window).height()
        $(".plan-btn").click(function () {
            $(".plan-dialog img").height(winH).width(winW);
            $(".plan-dialog").show()
        });
        $(".plan-dialog").click(function () {
            $(this).hide()
        })
    }
    planDialog();
});