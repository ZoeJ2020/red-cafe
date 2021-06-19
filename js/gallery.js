//GALLERY START

function openModal(){
    document.getElementById("myModal").style.display = "block";
}

function closeModal(){
    document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    //Declare a variable
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}

    //Initialise a variable
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}