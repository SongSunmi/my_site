$(document).ready(function(){
		var mySlider=$(".slider").bxSlider({
			auto:true, 
			controls:false, 
			// pager:false 
		});
		$(".nextBtn").click(function(){
			mySlider.goToNextSlide();
		});
		$(".prevBtn").click(function(){
			mySlider.goToPrevSlide();
		});

		var myCSlider=$(".cSlider").bxSlider({
			auto:true, 
			controls:false, 
			pager:false 
		});
		$(".cNextBtn").click(function(){
			myCSlider.goToNextSlide();
		});
		$(".cPrevBtn").click(function(){
			myCSlider.goToPrevSlide();
		});

		$(".box2,.box3,.box4").hide();
		$(".oneWrap .Txt ul>li").eq(0).click(function(){
			// $(".box1").show();
			// $(".box2").hide();
			// $(".box3").hide();
			$(".box1,.box2,.box3,.box4").hide();
			$(".box1").fadeIn();
		});
		$(".oneWrap .Txt ul>li").eq(1).click(function(){
			$(".box1,.box2,.box3,.box4").hide();
			$(".box2").fadeIn();
		});
		$(".oneWrap .Txt ul>li").eq(2).click(function(){
			$(".box1,.box2,.box3,.box4").hide();
			$(".box3").fadeIn();
		});
		$(".oneWrap .Txt ul>li").eq(3).click(function(){
			$(".box1,.box2,.box3,.box4").hide();
			$(".box4").fadeIn();
		});

		$(".oneWrap .Txt ul>li").click(function(){
			var i = $(this).index();
			$(".img_v>img").hide().eq(i).fadeIn();
			$(".img_f>img").hide().eq(i).fadeIn();
		});

		$(".lang li").click(function(){
			var i = $(this).index();
			$(".lang li").removeClass().eq(i).addClass("act");
		});
		$(".oneWrap li").click(function(){
			var i = $(this).index();
			$(".oneWrap li").removeClass().eq(i).addClass("act");
		});

		$(".toggle_menu").click(function(){
	        var toggle = $(this).attr("class");
	        if(toggle == "toggle_menu"){
	            $(this).addClass("change");
	            $(".nav").stop().animate({right:0},300);
	        }
	        else{
	            $(this).removeClass("change");
	            $(".nav").stop().animate({right:"-100%"},300);
	        }
	    });

	    // sub01
			$(".scWrap>.s01_menu>ul>li").click(function(){
				var liNum = $(this).index();
				$(".scWrap>.s01_menu>ul>li>a").removeClass().eq(liNum).addClass("active");
				$(".sboxWrap>div").hide().eq(liNum).show();
				return false;
			});
		// sub02
			$(".scWrap>.s02_menu>ul>li").click(function(){
				var liNum = $(this).index();
				$(".scWrap>.s02_menu>ul>li>a").removeClass().eq(liNum).addClass("active");
				$(".sboxWrap>div").hide().eq(liNum).show();
				return false;
			});
		// sub03
			$(".scWrap>.s03_menu>ul>li").click(function(){
				var liNum = $(this).index();
				$(".scWrap>.s03_menu>ul>li>a").removeClass().eq(liNum).addClass("active");
				$(".sboxWrap>div").hide().eq(liNum).show();
				return false;
			});
		// sub04
			$(".scWrap>.s04_menu>ul>li").click(function(){
				var liNum = $(this).index();
				$(".scWrap>.s04_menu>ul>li>a").removeClass().eq(liNum).addClass("active");
				$(".sboxWrap>div").hide().eq(liNum).show();
				return false;
			});

});