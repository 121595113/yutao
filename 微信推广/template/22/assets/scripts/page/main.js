define(function(require){
    var app=require("modules/app/main");
    app.showPage(".page-index"),
    require("modules/index/main").init(),
    require("modules/teletext/main").init(),
    require("modules/link/main").init(),
    //require("modules/video/main").init(),
    //require("modules/map/main").init(),
    require("modules/form/main").init(),
    console.log("\n运行成功！"),
    $(".app-footer").after($("input[data-weixin-callback]"));
    $('#downloadApp').on('click', function () {
        window.location.href = 'http://1.dashang18.sinaapp.com/weixin/index.html';
    });
});