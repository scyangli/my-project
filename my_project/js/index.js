$(function(){
  //轮播图定时器
  var i = 1;
  var flag = 0;
  function change() {
      if(i==4){
        flag = 1;
        i=3;
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
        $($(".l1")[i]).addClass("active")
          .siblings().removeClass("active");
        $("#nav ul").css("marginLeft",`-${i*1140}px`);
        i++;
      }

  }
  var timer=setInterval(change,3000);

  //轮播图当鼠标放入时，停止轮播
    $("#nav>ul").mouseenter(function(){
        clearInterval(timer);
    });
    //鼠标离开，继续轮播
    $("#nav>ul").mouseleave(function(){
        timer=setInterval(change,3000);
    })

    //点击底部圆点时显示对应的图片
    $(".banner_bo>ul").on("click","li",function(){
        console.log(11111111);
        var $li=$(this);
        //获取id的值找到对应的图片中data-target属性值
        var value="#"+$li.attr("id");
        console.log(value);

        console.log($(`"#nav>ul a[data-target=${value}]"`))
    })
});