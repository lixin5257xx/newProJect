/*==============================微信公众号=================================*/

/*
 * 微信配置签名
 *
 */
var getWxConfig = function (param, async, succfun) {
    var testurl = "";
    var useurl = "http://m.wishlist1314.com/wishlist_mobile/wechat/getConfig";
    var url = useurl;
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};


/*
 * 上传图片到服务器
 *
 */


var uploadSeverImg = function (param, async, succfun) {
    var testurl = "";
    var useurl = config.getUrl() + "confimImage";
    var url = useurl;
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};


/*
 *（1、判断是否登录接口）
 * 
 */

var isLogin = function (param, async, succfun) {
    var testurl = "/api/isLogin";
    var useurl = config.getUrl() + "isLogin";
    var url = useurl;

    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/*
 * (1-2、用户点赞收藏时触发的登录)
 * 
 */

var actionLogin = function (param, async, succfun) {

    var testurl = "/api/actionLogin";

    var useurl = config.getUrl() + "actionLogin";

    var url = useurl;

    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/*=============心愿================*/

/*
 *（banner-图片轮播） 10、获取banner列表
 * index.html
 * 
 */


var getMicroInfo = function (param, async, succfun) {
    var testurl = "/api/wishBanner";

    var useurl = config.getUrl() + "getBannerList";

    var url = useurl;

    $.ajax({
        type:"GET",
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/*
 * 心愿展示首页 11、获取心愿内容列表（精选是攻略、体验活动、婚礼堂的组合）
 * index.html
 * 
 */


var wishInfo = function (param, async, succfun) {

    var testurl = "/api/index" + param.type;

    var useurl = config.getUrl() + "getWishList";
    var url = useurl;


    $.ajax({
        type:config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};


/*
 * (16、查看、点赞、收藏接口)
 * 
 * 
 */

var lpcOperate = function (param, async, succfun) {

    var testurl = "/api/lpcOperate";

    var useurl = config.getUrl() + "modifyStatData";
    var url = useurl;


    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};


/*
 * 活动详情页接口  (12、跳转活动详情页接口)
 * experience_activity_detail.html
 * 
 */

var activityInfo = function (param, async, succfun) {
    var testurl = "/api/wishActivity";
    var useurl = config.getUrl() + "getActivityDetails";
    var url = useurl;


    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};


/*
 * 活动报名预约接口
 * experience_activity_detail.html
 * 
 */


var applyName = function (param, async, succfun) {
    var testurl = "/api/wishApply";
    var useurl = config.getUrl() + "activityRegistration";
    var url = useurl;

    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};


/*
 * 跳转攻略详情页接口 (13、跳转攻略详情页接口)
 * experience_activity_detail.html
 * 
 */

var aliveInfo = function (param, async, succfun) {
    var testurl = "/api/wishAlive";
    var useurl = config.getUrl() + "getGuideDetails";
    var url = useurl;


    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};


/*=============清单================*/


/*
 * 清单列表页筛选接口
 * account_list.json.html
 */


var getAccountListFilterInfo = function (param, async, succfun) {
    var testurl = "/api/account_list_filter";
    var useurl = config.getUrl() + "getSearchTerms";
    var url = useurl || testurl;
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/*
 * 清单列表页数据列表接口
 * account_list.json.html
 */


var getAccountListInfo = function (param, async, succfun) {
    var testurl = "/api/account_list";
    var useurl = config.getUrl() + "getList";
    var url = useurl || testurl;
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};


/*
 * 清单详情页数据列表接口
 * account_detail.json.html
 */

var getAccountDetailInfo = function (param, async, succfun) {
    var testurl = "/api/account_detail";
    var useurl = config.getUrl() + "getClothingDetail";
    var url = useurl || testurl;
    param = param || "";
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};
/*
 * 清单详情页周边配饰数据列表接口
 * account_detail.json.html
 */
var getAroundDetailInfo = function (param, async, succfun) {
    var testurl = "/api/account_detail";
    var useurl = config.getUrl() + "getAccessoriesDetail";
    var url = useurl || testurl;
    param = param || "";
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};

/*
 * 清单婚礼堂详情
 * weddingHouse_detail.html
 *
 */
var weddingHouseDetailInfo = function (param, async, succfun) {
    var testurl = "/api/wedding_house";
    //var useurl = "";
    var useurl = config.getUrl() + "getWeddingHallDetails";
    var url = useurl || testurl;
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};


/*
 * 清单婚礼堂详情菜单
 * weddingHouse_detail.html
 *
 */
var weddingHouseMenuInfo = function (param, async, succfun) {
    var testurl = "/api/wedding_house_menu";
    var useurl = config.getUrl() + "getWeddingHallpackages";
    var url = useurl || testurl;
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};


/*
 * 绑定手机号获取手机验证码
 * bind_phone.html
 *
 */

var getInvidateCodeInfo = function (param, async, succfun) {
    var testurl = "/api/getInvidateCodeInfo";

    var useurl = config.getUrl() + "getVerificationCode";

    var url = useurl;

    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/*
 * 绑定手机号表单提交
 * bind_phone.html
 *
 */


var sumbitPhoneNuber = function (param, async, succfun) {
    var testurl = config.getUrl() + "login";
    var useurl = "";
    var url = useurl || testurl;
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/*
 * 填写信息，确认预约,跳转客服
 * join_info.html
 */
var submitConfirmOrder = function (param, async, succfun) {
    var testurl = "http://192.168.2.96/wishlist_mobile/mobile/book";
    var useurl = config.getUrl() + "book";
    var url = useurl || testurl;
    $.ajax({
        type: "post",
        url: url,
        dataType: "json",
        data: param,
        async: async,
        success: function (data) {
            succfun(data);
            if (data.code == 0) {

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};
/*
 * 我的预约列表接口
 * my_order.html
 */
var getMyOrderInfo = function (param, async, succfun) {
    var testurl = "http://192.168.2.96/wishlist_mobile/mobile/book";
    var useurl = config.getUrl() + "getMemberBook";
    var url = useurl || testurl;
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data) {

            succfun(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};

/*
 *我的预约列表详情接口
 *order_detail.html
 */
var getOrderDetailInfo = function (param, async, succfun) {
    var testurl = "http://192.168.2.96/wishlist_mobile/mobile/book";
    var useurl = config.getUrl() + "getMemberBookDetail";
    var url = useurl || testurl;
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data) {
            succfun(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};
/*2、用户点赞收藏时判断是否的登录*/
var getStateInfo = function (param, async, succfun) {
    var testurl = "http://192.168.2.96/wishlist_mobile/mobile/book";
    var useurl = config.getUrl() + "modifyStatData";
    var url = useurl || testurl;
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data) {
            succfun(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};
/*1-2、用户点赞收藏登录提前的登录信息*/

var actionSubmitRegin = function (param, async, succfun) {
    var testurl = "http://192.168.2.96/wishlist_mobile/mobile/book";
    var useurl = config.getUrl() + "actionLogin";
    var url = useurl || testurl;
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data) {
            succfun(data)
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });
};


/*==================清单接口end========================*/




/*============================个人中心==================================*/




/* 个人中心接口 （2、获取个人信息接口）
 * personal.html / persinal_ibfomation.html
 * 
 */

var personalInfo = function (param, async, succfun) {
    var testurl = "/api/personalInfo";

    var useurl = config.getUrl() + "getMemberInfo";

    var url = useurl;


    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/* 个人中心修改保存（3、修改个人信息接口）
 * personal_infomation.html
 * 
 */

var perCenterAmend = function (param, async, succfun) {
    var testurl = "/api/perCenterAmend";

    var useurl = config.getUrl() + "modifyMemberInfo";
    var url = useurl;


    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/* 我的收藏展示接口 (4、获取会员的收藏列表)
 * myfavorite.html
 * 
 */

var favoriteInfo = function (param, async, succfun) {
    var testurl = "/api/micfavorite" + param.type;

    var useurl = config.getUrl() + "getMemberCollection";
    var url = useurl;


    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/*
 * 我的活动展示接口  (7.获取用户参与活动列表)
 * myactivities.html
 * 
 */

var myActivityInfo = function (param, async, succfun) {

    var testurl = "/api/micactivity";

    var useurl = config.getUrl() + "getMemberActivities";
    var url = useurl;


    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/*
 * 我的婚礼修改接口  (23-1.获取会员婚礼接口)
 * myWedding.html
 * 
 */

var myWiddingAmend = function (param, async, succfun) {

    var testurl = "/api/myWiddingAmend";

    var useurl = config.getUrl() + "getMemberWedding";
    var url = useurl;


    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/*
 * 我的婚礼4个步骤  (23-2 获取会员婚礼筛选数据接口)
 * myWedding.html
 * 
 */

var myWiddingStep = function (param, async, succfun) {

    var testurl = "/api/myWiddingStep";

    var useurl = config.getUrl() + "getMemberWeddingScreenData";
    var url = useurl;


    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/*
 * 我的婚礼提交返回礼券  (23-3 提交会员婚礼信息接口)
 * myWedding.html
 * 
 */

var myWiddingRefer = function (param, async, succfun) {

    var testurl = "";

    var useurl = config.getUrl() + "subMemberWeddingInfo";
    var url = useurl;


    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};


/*
 * 获取用户礼券列表券  (6 提交会员婚礼信息接口)
 * coupon.html
 *
 */
var getCouponInfo = function (param, async, succfun) {
    var url = config.getUrl() + "getMemberCoupons";
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};

/*
 * 预约验证登录注册  (1-4)
 * index.html
 *
 */
var isOrderLogin = function (param, async, succfun) {
    var url = config.getUrl() + "appointmentLogin";
    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};

 
/*
 * 获取用户礼券列表券  (5、删除用户的收藏)
 * myfavorite.html
 *
 */ 



 var delFavorite = function (param, async, succfun) {
    
    var url = config.getUrl() + "delMemberCollection";

    $.ajax({
        type: config.getType(),
        url: url,
        dataType: config.getDataType(),
        data: param,
        async: async,
        success: function (data, status) {
            succfun(data);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("Error " + textStatus);
        }
    });

};