
$(document).ready(function(){
    
// 스크롤 매직, 컨트롤러
(function(){
  
  var controller = new ScrollMagic.Controller();
 
  var tween1 = TweenMax.to('.shape_round', 0.5, {
    backgroundColor: "#3156ff",
    scale:3.5,
    rotation: 0,
    x: 0,
    y: 0,
  });
    
  
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: "45%"
  })
  .setTween(tween1)
  .addTo(controller)
  
  var tween1 = TweenMax.to('.shape_pentagon', 0.5, {
    backgroundColor: "rgba(0,0,0,.3)",
    scale:1.5,
    rotation: -50,
    x: 0,
    y: 0,
  });
    
  
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: "45%"
  })
  .setTween(tween1)
  .addTo(controller)
  
    var tween2 = TweenMax.to('.shape_square', 0.5, {
    backgroundColor: "#2c50fe",
    scale: 3,
    rotation: 0,
    x: 730,
    y: 370,
  });
  

  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: "45%"
  })
  .setTween(tween2)
  .addTo(controller)
    
    
    
    

  
  
//con03_img
      var tween4 = TweenMax.to('.con03Img', 0.5, {
    opacity: 1,    
    scale: 0.625,
    rotation: 0,
    x: 0,
    y: 1660,
  });
    
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger0",
    duration: "160%"
  })
  .setTween(tween4)
  .addTo(controller)
  
  

//con04_Ani
      var tween6 = TweenMax.to('.sliderAni02', 0.5, {
    opacity: 1,  
    scale: 1,
    rotation: 0,
    x: 0,
    y: 1100,
  });
    
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger0",
    duration: "250%"
  })
  .setTween(tween6)
  .addTo(controller)
    
  
  
  
  
  
  
}());
// 스크롤 매직, 컨트롤러 끝    

    
    
    

//WOW
new WOW().init();
    
});