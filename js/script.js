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
$("form.submit").click(function(){
  var name=$(".name").val ()
  var email=$(".email").val()
  var message=$(".class").val()
  alert("Hi"+name"your message has been recieved . Thank you")
});
});
