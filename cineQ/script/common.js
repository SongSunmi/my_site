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
})