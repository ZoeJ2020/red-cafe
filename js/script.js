//Create function that talks to container on HTML
    function slider(){
        
        let slides = document.querySelectorAll('#slides .slide'); 
            //Setting a variable that stores each element that has the ID slides and class slide

        let currentSlide = 0;
            //Setting a variable to keep track of the current slide
            //Remember number lists go 0, 1, 2 instead of 1, 2, 3

        let slideInterval = setInterval(nextSlide, 3000);
            //Sets time interval for next slide. 3000ms = 3s.

        function nextSlide(){

            slides[currentSlide].className = 'slide'; //Changes class of number 0 (slide showing)
                //Change current slide's class so that it does not show
                //CSS transition: ; handles fadeout automatically

                
            currentSlide = (currentSlide+1)%slides.length;

            slides[currentSlide].className = 'slide showing';
                //Adds 1 to currentSlide so it moves onto next list item = next image.
                //Use % operator to cycle back to 0 when reaching the end of the slides.
        }
    }

    //Call function. Placed after function declaration so that program understands what this function does.
slider();



//JQUERY TESTIMONIAL START

$(document).ready(function(){
    $("#testTwo, #left").hide();

    $("#right").click(function(){
        $("#testOne, #right").hide();
        $("#testTwo, #left").show();
        $(".arrow-inner").addClass('flex-end');
    })

    $("#left").click(function(){
        $("#testOne, #right").show();
        $("#testTwo, #left").hide();
        $(".arrow-inner").removeClass('flex-end');
    })
});