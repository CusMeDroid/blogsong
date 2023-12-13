function myFunction(burger) {
  burger.classList.toggle("change");
}
$(document).ready(function(){
  $("#smenu").click(function(){
    $("#menu-show").slideToggle('fast');
  });
});