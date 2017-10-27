//This is file of custom scripts for the Omnifood website.
$(document).ready(function(){
     $('.js--section-features').waypoint(function(direction){
       if (direction =='down') {
           $('nav').addClass('sticky');
         } else {
           $('nav').removeClass('sticky');
         }
     },
       {
         offset: '10%;'
       });

/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window')
}, {
  offset: '25%'
})

*/


}); /*end document.ready function*/
