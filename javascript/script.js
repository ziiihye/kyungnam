$(".menu").click(function(){
    if(!$(".hide_menu").is(":visible")){
        $(".hide_menu").css("display","block");
    }else{
        $(".hide_menu").css("display","none");
    }
});
$(".menu_list_box_inner>div").mouseover(function(){
    let i = $(this).index();
    $(".menu_title>li").eq(i).css("border-bottom","1px solid red");
    $(".menu_title>li").eq(i).siblings().css("border","none");
});

    $(window).scroll(function () { 
        var scrollValue = $(document).scrollTop(); 
        console.log(scrollValue); 
        if(scrollValue>=650<700){
            $(".sales_title").css("animation","sales1 1s 0s reverse");
            $(".sales_text>h4").css("animation","sales1 1s 0s reverse");   
            $(".sales_btn").css("animation","sales2 1.5s 0s reverse");
            $(".sales_img>img").css("animation","sales2 1.5s 0s reverse");
        }
    });

    // 메인슬라이드
    let imgs=5;
    let now=0;
    let play;
    let mode=true;
    let prevIndex;

    // dot 누르면 슬라이드 이동
    $(".dot>li").click(function(){
        now=$(this).index();
        clearInterval(play);
        curr_slide(now);
        if(mode==true){
            play=setInterval(function(){slide();},6000);
        }
        prevIndex=now;
    });

    // 슬라이드 이동하는 제이쿼리
    start();

    function start(){
        $(".main_slide_box>div").eq(0).css("display","block");
        $(".main_slide_box>div").eq(0).siblings().fadeOut();
        $(".dot>li").eq(0).siblings().css("background-color","#fff");
        setInterval(function(){slide();},6000);
        prevIndex=0;
    }
  
    function slide(){
        if(imgs==now){
            now=0;
        }else{
            now++;
        }
        curr_slide(now);	
    }
    function curr_slide(e){	
        if(e==0){
            $(".main_slide_box>div").eq(0).fadeIn(800);
            $(".main_slide_box>div").eq(0).siblings().fadeOut();
            $(".dot>li").eq(0).siblings().css("background-color","#fff");
            $(".dot>li").eq(0).css("background-color","#ed1c24");
            prevIndex=0;
        }else if(e==1){		
            $(".main_slide_box>div").eq(1).fadeIn(800);
            $(".main_slide_box>div").eq(1).siblings().fadeOut();
            $(".dot>li").eq(1).siblings().css("background-color","#fff");
            $(".dot>li").eq(1).css("background-color","#ed1c24");
            prevIndex=1;
        }else if(e==2){		
            $(".main_slide_box>div").eq(2).fadeIn(800);
            $(".main_slide_box>div").eq(2).siblings().fadeOut();
            $(".dot>li").eq(2).siblings().css("background-color","#fff");
            $(".dot>li").eq(2).css("background-color","#ed1c24");
            prevIndex=2;
        }else if(e==3){		
            $(".main_slide_box>div").eq(3).fadeIn(800);
            $(".main_slide_box>div").eq(3).siblings().fadeOut();
            $(".dot>li").eq(3).siblings().css("background-color","#fff");
            $(".dot>li").eq(3).css("background-color","#ed1c24");
            prevIndex=3;
        }else if(e==4){
            $(".main_slide_box>div").eq(4).fadeIn(800);
            $(".main_slide_box>div").eq(4).siblings().fadeOut();
            $(".dot>li").eq(4).siblings().css("background-color","#fff");
            $(".dot>li").eq(4).css("background-color","#ed1c24");
            prevIndex=4;
        }else{
            $(".main_slide_box>div").eq(5).fadeIn(800);
            $(".main_slide_box>div").eq(5).siblings().fadeOut();
            $(".dot>li").eq(5).siblings().css("background-color","#fff");
            $(".dot>li").eq(5).css("background-color","#ed1c24");
            prevIndex=5;
        }
    }


  		
