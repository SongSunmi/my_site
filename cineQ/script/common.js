$(function(){
    
    $(window).scroll(function(){
        var scrollY = $(window).scrollTop();
        var pg_num = $("section").length; 
        for(var i=0;i<pg_num;i++){
            if($("section").eq(i).offset().top <= scrollY){
                $(".gnb a").removeClass("active").eq(i).addClass("active")
            }
            
        }
        
        if(960 <= scrollY & 6200 > scrollY){
            $("#hd").addClass("hd_bg")
        }else{
            $("#hd").removeClass("hd_bg")
        }
    })

    $(".content .btn_page>div").click(function(){
        var i = $(this).index();
        var num = 970*i*-1;
        $(".content .con_sl ul").stop().animate({left:num},370);
    });

    $(".con_nav li").click(function(){
        var i = $(this).index();
        var num = $()
        $(".con_nav li").find("a").removeClass("active").eq(i).addClass("active");
        $(".con_sl>ul").hide().eq(i).show();
        return false;
    });

})