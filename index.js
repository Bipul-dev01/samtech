/* **********************************************************
    Slide/Carousel Section JS Code
********************************************************** */
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active1", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active1";
// }

// Auto Slide   if you need auto slide ,remove the commit "//"

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//    var slides = document.getElementsByClassName("mySlides");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) { slideIndex = 1 }
//    slides[slideIndex - 1].style.display = "block";
//    setTimeout(showSlides, 3000); // Change image every 2.5 seconds
// }


// Product Image Hover Effect Magnifying

// IP Camera 1
//*******************************************************

var lens1=document.getElementById('lens1');
var first1=document.getElementById('first1');
var second1=document.getElementById('second1');

first1.addEventListener('mousemove', function(e){

    var x = e.clientX - e.target.offsetLeft;
    var y = e.clientY - e.target.offsetTop;

    lens1.style.display = "block";
    lens1.style.left = x + 'px';
    lens1.style.top = y +250+ 'px';

    second1.style.backgroundPosition = (x - (500/2/6))* -6 + 'px ' + (y - (500/2/6))* -6 + 'px';
})
first1.addEventListener('mouseout', function(){
    lens1.style.display = "none";
})

// IP Camera 2
//*******************************************************

        var lens2=document.getElementById('lens2');
        var first2=document.getElementById('first2');
        var second2=document.getElementById('second2');

        first2.addEventListener('mousemove', function(e){

            var x = e.clientX - e.target.offsetLeft;
            var y = e.clientY - e.target.offsetTop;

            lens2.style.display = "block";
            lens2.style.left = x + 'px';
            lens2.style.top = y +250+ 'px';

            second2.style.backgroundPosition = (x - (500/2/6))* -6 + 'px ' + (y - (500/2/6))* -6 + 'px';
        })
        first2.addEventListener('mouseout', function(){
            lens2.style.display = "none";
        })

// IP Camera 3
//*******************************************************

var lens3=document.getElementById('lens3');
        var first3=document.getElementById('first3');
        var second3=document.getElementById('second3');

        first3.addEventListener('mousemove', function(e){

            var x = e.clientX - e.target.offsetLeft;
            var y = e.clientY - e.target.offsetTop;

            lens3.style.display = "block";
            lens3.style.left = x + 'px';
            lens3.style.top = y +250+ 'px';

            second3.style.backgroundPosition = (x - (500/2/6))* -6 + 'px ' + (y - (500/2/6))* -6 + 'px';
        })
        first3.addEventListener('mouseout', function(){
            lens3.style.display = "none";
        })

// IP Camera 4
//*******************************************************

var lens4=document.getElementById('lens4');
        var first4=document.getElementById('first4');
        var second4=document.getElementById('second4');

        first4.addEventListener('mousemove', function(e){

            var x = e.clientX - e.target.offsetLeft;
            var y = e.clientY - e.target.offsetTop;

            lens4.style.display = "block";
            lens4.style.left = x + 'px';
            lens4.style.top = y +250+ 'px';

            second4.style.backgroundPosition = (x - (500/2/6))* -6 + 'px ' + (y - (500/2/6))* -6 + 'px';
        })
        first4.addEventListener('mouseout', function(){
            lens4.style.display = "none";
        })

// IP Camera 5
//*******************************************************

var lens5=document.getElementById('lens5');
        var first5=document.getElementById('first5');
        var second5=document.getElementById('second5');

        first5.addEventListener('mousemove', function(e){

            var x = e.clientX - e.target.offsetLeft;
            var y = e.clientY - e.target.offsetTop;

            lens5.style.display = "block";
            lens5.style.left = x + 'px';
            lens5.style.top = y +250+ 'px';

            second5.style.backgroundPosition = (x - (500/2/6))* -6 + 'px ' + (y - (500/2/6))* -6 + 'px';
        })
        first5.addEventListener('mouseout', function(){
            lens5.style.display = "none";
        })