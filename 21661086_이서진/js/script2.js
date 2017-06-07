

$(document).ready(function(){
    
   var btnTarget = $("#alarm_bt > li");
   $('#ol_one').hide(); 
   $('#circle3_line').hide(); 

   
    
   $(".alarm").mousedown(function(){
   $('#ol_one').show();
   $("#clock_wrap").hide();
   $("#stopwatch_wrap").hide();
   $("#worldclock").hide();
   $("#alarm_box").fadeIn('slow');
   $('alarm_txt2').show(); 
   $(document.body).css('background-Image',"url(images/background2.jpg)");
})
            
   $(".sw").mousedown(function(){
   $("#clock_wrap").hide();
   $("#alarm_box").hide();
   $("#worldclock").hide();
   $("#stopwatch_wrap").fadeIn('slow');
   $(document.body).css('background-Image',"url(images/background3.jpg)");
}) 
   
   $(".wc").mousedown(function(){
   $("#clock_wrap").hide();
   $("#alarm_box").hide();
   $("#stopwatch_wrap").hide();
   $("#worldclock").fadeIn('slow');
   $(document.body).css('background-Image',"url(images/background4.jpg)");
}) 
    var interval;
    var blink= function(){
        $('#circle3_line').fadeIn('fast', function () {
        $('#circle3_line').fadeOut('slow')  })
    };
    $("#start3").mousedown(function(){
        interval = setInterval(blink,300);
    });

    $("#stop3").mousedown(function(){
        clearInterval(interval);
        $('#circle3_line').hide();

    });
    $("#reset").mousedown(function(){
        clearInterval(interval);
        $('#circle3_line').hide();
    });
 
   $(".one").mousedown(function(){
        $('#clock_wrap').fadeIn();
        $('#stopwatch_wrap').hide();
        $('#alarm_box').css('display','none');
        $('#worldclock').hide();
        $('#ol_one').hide();
        $(document.body).css('background-Image',"url(images/background1.jpg)");
       
   });
   $(".two").mousedown(function(){
        $('#clock_wrap').hide();
        $('#stopwatch_wrap').hide();
        $('#alarm_box').fadeIn();
        $('#worldclock').hide();
        $('#ol_one').fadeIn();
        $(document.body).css('background-Image',"url(images/background2.jpg)");
       
   });
   $(".three").mousedown(function(){
        $('#clock_wrap').hide();
        $('#stopwatch_wrap').fadeIn();
        $('#alarm_box').hide();
        $('#worldclock').hide();
        $('#ol_one').hide();
        $(document.body).css('background-Image',"url(images/background3.jpg)");
       
   });
   $(".four").mousedown(function(){
        $("#clock_wrap").hide();
        $("#alarm_box").hide();
        $("#stopwatch_wrap").hide();
        $("#worldclock").fadeIn('slow');
        $(document.body).css('background-Image',"url(images/background4.jpg)");
})   
 
   btnTarget.click(function(){
        if(!$(this).hasClass('active')){
        btnTarget.removeClass('active');
        $(this).addClass('active');
            
   }
   })
    
   
});



 

    