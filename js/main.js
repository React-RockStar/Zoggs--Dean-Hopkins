var flag1=false, flag2 = false;
$(document).ready(function(){ 
    setTimeout(function(){ 
      $("#splash_dialog").hide();
      $("#select_dialog").show();
      range_dialog();
    }, 3000);     
});

$(function() {                       
  $(".button").click(function() {  
    $(".button").removeClass("bounceIn");
    $(this).addClass("bounceIn");
  });
});
$(function() {                       
  $(".recommend_view").click(function() {  
    $(this).addClass("bounceIn");
  });
});


$(document).ready(function(){
  $('.first_btn').click(function(){
    $('.first_btn').removeClass('btn_active').addClass('btn_inactive');
     $(this).removeClass('btn_inactive').addClass('btn_active');
     flag1 = true;
     if(flag2 == true)
     {
      setTimeout(function(){ 
        $("#select_dialog").hide();
        $("#range_dialog").show();
        scan_dialog();
      }, 500); 
     }
    });
})

$(document).ready(function(){
  $('.second_btn').click(function(){
    $('.second_btn').removeClass('btn_active').addClass('btn_inactive');
     $(this).removeClass('btn_inactive').addClass('btn_active');
     flag2 = true;
     if(flag1 == true)
     {
      setTimeout(function(){ 
        $("#select_dialog").hide();
        $("#range_dialog").show();
        scan_dialog();
      }, 500);   
     }
    });
})

function scan_dialog() {
  setTimeout(function(){ 
    $("#range_dialog").hide();
    $("#scan_dialog").show();
    loading_dialog();
  }, 3000); 
}
function loading_dialog() {
  setTimeout(function(){ 
    $("#scan_dialog").hide();
    $("#loading_dialog").show();
    move();
    recommend_dialog();
  }, 3000); 
}
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        $("#loading_dialog").hide();
        $("#recommend_dialog").show();
      } else {
        width++;
        if (width == 50) {
            $("#loading_text").text("FINDING YOUR GOGGLE FIT...");
            elem.style.width = width + "%";
        } else {
          elem.style.width = width + "%";  
        } 
      }
    }
  }
}

$(function() {                       
  $(".recommend_view").click(function() {  
      
        $("#recommend_dialog").hide();
        $("#AR_dialog").show();

        $("#owl-demo").owlCarousel({
 
  
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
     
      });
    
       
  });  
});


$(document).ready(function() {
 //return;
  
});

$(function() {                       
  $(".model").click(function() {  
    $(".model").removeClass("bounceIn");
    $(this).addClass("bounceIn");
  });
});