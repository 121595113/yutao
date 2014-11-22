// JavaScript Document
//适配不同手机屏幕屏幕
window.onload=function(){
	$(function () {
					var browser = {
						versions:function(){ 
						var u = navigator.userAgent, app = navigator.appVersion; 
						return {//移动终端浏览器版本信息 
							trident: u.indexOf("Trident") > -1, //IE内核
							presto: u.indexOf("Presto") > -1, //opera内核
							webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
							gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
							mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
							ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
							android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
							iPhone: u.indexOf("iPhone") > -1 , //是否为iPhone或者QQHD浏览器
							iPad: u.indexOf("iPad") > -1, //是否iPad
							webApp: u.indexOf("Safari") == -1 //是否web应该程序，没有头部与底部
							};
						}(),
						language:(navigator.browserLanguage || navigator.language).toLowerCase()
					} 
					
					if(browser.versions.mobile && browser.versions.iPhone){
						//调用style2.css的样式
						$("#css").attr("href", "style2.css");
						//适配手机屏幕的代码
						$(function(){
							if(/Android (\d+\.\d+)/.test(navigator.userAgent)){
								var version = parseFloat(RegExp.$1);
								if(version>2.3){
									var phoneScale = parseInt(window.screen.width)/640;
										$("#css").after('<meta name="viewport" content="width=640, minimum-scale = '+ phoneScale +', maximum-scale = '+ phoneScale +', target-densitydpi=device-dpi">');
								}else{
									$("#css").after('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
									}
								}else{
									$("#css").after('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
									}
									})
							}else{
								//调用style.css的样式
								$("#css").attr("href", "style.css");
								}
						}
				)}
