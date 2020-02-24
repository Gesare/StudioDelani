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
  $("#design,.design").css("text-align","center")
});
$(".pm,#pm").click(function(){
  $("#pm,.pm").fadeToggle()
  $("#pm,.pm").fadeToggle().css("text-align","center")
});
$(".dev,#dev").click(function(){
  $("#dev,.dev").fadeToggle()
  $("#dev,.dev").fadeToggle().css("text-align","center")
});
$("form").submit(function(){
  var name=$("#name").val ()
  var email=$("#email").val()
  var message=$("#message").val()
  alert ("HI " +name+ " we have recieved your message.")
});
});
