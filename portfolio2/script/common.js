$(function(){
    $(".gnb a").click(function(){
        var target = $(this.hash);
        var st = target.offset().top;
        $("html,body").stop().animate({scrollTop:st},300)
        return false
    })
    
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
    
    $('.mode>button').click(function(){
        var body = $('body');
        var button = document.getElementById('Btn');
        if(body.hasClass('dark') == true){
            body.removeClass('dark');
            $('.basic').css('display','block');
            $('.darkView').css('display','none');
            button.innerText = '다크모드'
        }
        else{
            body.addClass('dark');
            $('.basic').css('display','none');
            $('.darkView').css('display','block');
            button.innerText = '라이트모드'
        }
    })
})