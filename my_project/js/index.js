$(function(){
  //轮播图定时器
  var i = 1;
  var flag = 0;

  function change() {
      if(i==4){
        flag = 1;
      }
      if(i==1){
        flag = 0;
      }
      if(flag){
        i--;
        $($(".l1")[i]).addClass("active")
          .siblings().removeClass("active");
        $("#nav ul").css("marginLeft",`-${i*960}px`);
      }else{
        $($(".l1")[i]).addClass("active")
          .siblings().removeClass("active");
        $("#nav ul").css("marginLeft",`-${i*960}px`);
        i++;
      }

  }


  setInterval(function(){
    change();

  },1000)
});