
// Product Image Hover Effect Magnifying

// IP Bullet CCTV 1
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

    second1.style.backgroundPosition = (x - (850/2/6))* -6 + 'px ' + (y - (850/2/6))* -6 + 'px';
})
first1.addEventListener('mouseout', function(){
    lens1.style.display = "none";
})

// IP Bullet CCTV 2
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

            second2.style.backgroundPosition = (x - (850/2/6))* -6 + 'px ' + (y - (850/2/6))* -6 + 'px';
        })
        first2.addEventListener('mouseout', function(){
            lens2.style.display = "none";
        })

// IP Bullet CCTV 3
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

            second3.style.backgroundPosition = (x - (850/2/6))* -6 + 'px ' + (y - (850/2/6))* -6 + 'px';
        })
        first3.addEventListener('mouseout', function(){
            lens3.style.display = "none";
        }) 
       
// IP Dome CCTV 1
// ********************************************************
    // script code on ipDomeCCTV.html page



// HD Bullet CCTV 1
//*******************************************************
    // script code on HDBulletCCTV.html page
// HD Bullet CCTV 2
//*******************************************************
    // script code on HDBulletCCTV.html page

// HD Bullet CCTV 3
//*******************************************************
    // script code on HDBulletCCTV.html page


// HD Dome CCTV 1
//*******************************************************
    // script code on HDDomeCCTV.html page


    