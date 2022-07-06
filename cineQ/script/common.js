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


    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $(".top_btn").fadeIn();
        }else{
            $(".top_btn").fadeOut();
        }
    });

    $(".top_btn").click(function(){
        $("html,body").animate({scrollTop:0},300);
        return false;
    });
    

    $(".toggle_menu").click(function(){
        var toggle = $(this).attr("class");
        if(toggle == "toggle_menu"){
            $(this).addClass("change");
            $(".m_menu").stop().animate({left:0},300);
        }
        else{
            $(this).removeClass("change");
            $(".m_menu").stop().animate({left:"-100%"},300);
        }
    });

    var current = 0;
    var banner = $(".mobile_flex .m_flex>div");

    function banMove(){
        banner.eq(current).css("left","0").animate({left:"-100%"},400);
        current++;
        if(current == 5){current=0;}
        banner.eq(current).css("left","100%").animate({left:0},400);
    }
    setInterval(banMove,3000);


    let curPos = 0;
    let postion = 0;
    let start_x, end_x;
    const IMAGE_WIDTH = 212;
    const images = document.querySelector(".con_sl ul li") 
     
    images.addEventListener('touchstart', touch_start);
    images.addEventListener('touchend', touch_end);
     
    function prev(){
      if(curPos > 0){
        postion += IMAGE_WIDTH;
        images.style.transform = `translateX(${postion}px)`;
        curPos = curPos - 1;
      }
    }
    function next(){
      if(curPos < 3){
        postion -= IMAGE_WIDTH;
        images.style.transform = `translateX(${postion}px)`;
        curPos = curPos + 1;
      }
    }
     
    function touch_start(event) {
      start_x = event.touches[0].pageX
    }
     
    function touch_end(event) {
      end_x = event.changedTouches[0].pageX;
      if(start_x > end_x){
        next();
      }else{
        prev();
      }
    }







    $(".top_menu>ul>li>a,.gnb ul li a,.simple_rsv,.flex>div,.con_sl ul li,.notice h2 a,.notice_table td.subject a,#footer .company a,.m_flex>div").click(function(){
        page_ready();
    });
})

function page_ready(){
        alert('페이지 준비중입니다.');
}