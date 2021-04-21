$(document).ready(function(){

    /*제이쿼리탭*/
     //When page loads...
    $(".tab_content").hide(); //Hide all content
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content

    //On Click Event
    $("ul.tabs li").click(function() {

        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content").hide(); //Hide all tab content

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        return false;
    });
    
        //아코디언메뉴
    $('.sMenu').hide();
    
    $('.acodianMenu>li>a').click(function(e){
        e.preventDefault();
        
        $(this).siblings().slideToggle().parent().siblings().find('.sMenu').slideUp();
        
        //화살표on
        $(this).toggleClass('on').parent().siblings().find('a').removeClass('on');
    })
    
    //팝업
    $('.popBg,.popBox').hide();
    $('.popBtn').click(function(){
        $('.popBg,.popBox').fadeIn();
        
        $('.popBg,.close').click(function(){
        $('.popBg,.popBox').fadeOut();
        })
    })
    
    //패널메뉴창
    $('.panelBg,.panelBox').hide();
    $('.panelBtn').click(function(){
        $('.panelBg,.panelBox').fadeIn();
        
        $('.panelBg,.panelclose').click(function(){
        $('.panelBg,.panelBox').fadeOut();
        })
    })
    

});