
var images = ['url(img/hair-girl-main.jpg)', 'url(img/cream.jpg)', 'url(img/hair-girl-main.jpg)']
//Preload images first 
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}


$([images[0],images[1],images[2],images[3]]).preload();

// Usage:

var currimg = 0;

$(document).ready(function(){
   
    function loadimg(){
        
       $('.home-img').animate({ opacity: 1 }, 5000,function(){

            //finished animating, minifade out and fade new back in           
            $('.home-img').animate({ opacity: 0.7 }, 400,function(){
                $("#circle"+currimg).removeClass('circle-active');
                currimg++;
                
                if(currimg > images.length-1){
                    
                    currimg=0;
                    
                }
                var newimage = images[currimg];
                //swap out bg src
                $("#circle"+currimg).addClass('circle-active');                
                $('.home-img').css("background-image", newimage); 
                //animate fully back in
                $('.home-img').animate({ opacity: 1 }, 400,function(){

                    //set timer for next
                    setTimeout(loadimg,5000);

                });

            });
        
        });

     }
     setTimeout(loadimg,5000);
  
});

