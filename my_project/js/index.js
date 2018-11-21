$(function(){
  //轮播图定时器
  var i = 0;
  var flag = 0;
  function change() {
      if(i==3){
        flag = 1;
      }
      if(i==0){
        flag = 0;
      }
      if(flag){
        i--;
        $($(".l1")[i]).addClass("active")
          .siblings().removeClass("active");
        $("#nav ul").css("marginLeft",`-${i*1140}px`);
      }else{
        i++;
        $($(".l1")[i]).addClass("active")
          .siblings().removeClass("active");
        $("#nav ul").css("marginLeft",`-${i*1140}px`);
      }
  }
  var timer=setInterval(change,3000);

  //轮播图当鼠标放入时，停止轮播
  $(".banner").mouseenter(function(){
      clearInterval(timer);
  });
  //鼠标离开，继续轮播
  $(".banner").mouseleave(function(){
      timer=setInterval(change,3000);
  })

  //点击底部圆点时显示对应的图片
  $(".banner_bo>ul").on("click","li",function(){
      var $li=$(this);
      //获取id的值找到对应的图片中data-target属性值
      var value=$li.attr("id");
      var i=$("#nav>ul a").index($(`#nav>ul a[data-target$=${value}]`));
      $("#nav>ul").css("marginLeft",`-${i*1140}px`);
      $li.addClass("active")
        .siblings().removeClass("active");
  })

  //点击左右箭头按钮切换图片
    $("div.left>a").on("click", function (e) {
      e.preventDefault();
      if(i<3) {
        $(".banner_bo li").eq(++i).click();
      }
    })
  $("div.right>a").on("click", function (e) {
    e.preventDefault();
    if(i>0) {
      $(".banner_bo li").eq(--i).click();
    }
  })

});