$(document).ready(function(){
$(".A").hover(function(){
  $(".Jimmy").slideToggle()
});
$(".B").hover(function(){
  $(".yellow").slideToggle()
});
$(".C").hover(function(){
  $(".Mig").slideToggle()
});
$(".D").hover(function(){
  $(".BlackDark").slideToggle()
});
$(".E").hover(function(){
  $(".Happy").fadeToggle()
});
$(".F").hover(function(){
  $(".Settings").fadeToggle()
});
$(".G").hover(function(){
  $(".Burned").fadeToggle()
});
$(".H").hover(function(){
  $(".Giraffe").fadeToggle()
});
$(".design,#design").click(function(){
  $("#design,.design").fadeToggle()
});
$(".pm,#pm").click(function(){
  $("#pm,.pm").fadeToggle()
});
$(".dev,#dev").click(function(){
  $("#dev,.dev").fadeToggle()
});
$("form#submit").submit(function(){
  var fname=$(".fname").val ()
  var email=$(".email").val()
  var message=$(".message").val()
   if((name==="")||(email==="")||(message==="")){
     alert("Please, fill the required!")
   }
   else{
     alert("HI" +name+ "we have recieved your message.")
   }
});
});
