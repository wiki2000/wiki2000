$(window).on("load", function(){
    var $pp = $("#pp"),
        $sp = $pp.find(".sp");
        $sp.fadeOut();
        $pp.delay(350).fadeOut("slow");
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides-20");
  var dots2 = document.getElementsByClassName("dot-20");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active-20", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active-20";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides-30");
  var dots3 = document.getElementsByClassName("dot-30");
  if (n > slides3.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";  
  }
  for (i = 0; i < dots3.length; i++) {
      dots3[i].className = dots3[i].className.replace(" active-30", "");
  }
  slides3[slideIndex3-1].style.display = "block";  
  dots3[slideIndex3-1].className += " active-30";
}

var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("mySlides-40");
  var dots4 = document.getElementsByClassName("dot-40");
  if (n > slides4.length) {slideIndex4 = 1}    
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";  
  }
  for (i = 0; i < dots4.length; i++) {
      dots4[i].className = dots4[i].className.replace(" active-40", "");
  }
  slides4[slideIndex4-1].style.display = "block";  
  dots4[slideIndex4-1].className += " active-40";
}

var slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  var i;
  var slides5 = document.getElementsByClassName("mySlides-50");
  var dots5 = document.getElementsByClassName("dot-50");
  if (n > slides5.length) {slideIndex5 = 1}    
  if (n < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
      slides5[i].style.display = "none";  
  }
  for (i = 0; i < dots5.length; i++) {
      dots5[i].className = dots5[i].className.replace(" active-50", "");
  }
  slides5[slideIndex5-1].style.display = "block";  
  dots5[slideIndex5-1].className += " active-50";
}

//window.onscroll = function() {myFunction()};
//document.onscroll = function() {myFunction()};
window.addEventListener('scroll', myFunction);
window.addEventListener('scroll', myFunction20);
window.addEventListener('scroll', myFunction30);
window.addEventListener('scroll', myFunction40);
window.addEventListener('scroll', myFunction50);



  let y = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    //document.body.offsetHeight, document.documentElement.offsetHeight,
    //document.body.clientHeight, document.documentElement.clientHeight
  );
  let yx = window.innerHeight;
  
  function myFunction() {
  if (document.body.scrollTop >= y-yx || document.documentElement.scrollTop >= y-yx) {
    document.getElementById('lore').className = 'lore0';
    
  document.getElementById('blok-1').className = 'poyavlenie';
  document.getElementById('blok-1').style.display = 'block';
  document.getElementById('poyavlenie').style.display = 'block';
  document.getElementById('pchela2').className = 'pchela2p';
}else{
  document.getElementById('blok-1').style.display = 'none';
  document.getElementById('lore').className = '';
  document.getElementById('pchela2').className = '';
}};
function myFunction20() {
if (document.body.scrollTop >= y-yx || document.documentElement.scrollTop >= y-yx) {
  document.getElementById('lore-20').className = 'lore0-20';
document.getElementById('blok-1-20').className = 'poyavlenie-20';
document.getElementById('blok-1-20').style.display = 'block';
document.getElementById('poyavlenie-20').style.display = 'block';
document.getElementById('pchela2-20').className = 'pchela2p-20';
}else{
document.getElementById('blok-1-20').style.display = 'none';
document.getElementById('lore-20').className = '';
document.getElementById('pchela2-20').className = '';
}};
function myFunction30() {
if (document.body.scrollTop >= y-yx || document.documentElement.scrollTop >= y-yx) {
  document.getElementById('lore-30').className = 'lore0-30';
document.getElementById('blok-1-30').className = 'poyavlenie-30';
document.getElementById('blok-1-30').style.display = 'block';
document.getElementById('poyavlenie-30').style.display = 'block';
document.getElementById('pchela2-30').className = 'pchela2p-30';
}else{
document.getElementById('blok-1-30').style.display = 'none';
document.getElementById('lore-30').className = '';
document.getElementById('pchela2-30').className = '';
}};
function myFunction40() {
if (document.body.scrollTop >= y-yx || document.documentElement.scrollTop >= y-yx) {
  document.getElementById('lore-40').className = 'lore0-40';
document.getElementById('blok-1-40').className = 'poyavlenie-40';
document.getElementById('blok-1-40').style.display = 'block';
document.getElementById('poyavlenie-40').style.display = 'block';
document.getElementById('pchela2-40').className = 'pchela2p-40';
}else{
document.getElementById('blok-1-40').style.display = 'none';
document.getElementById('lore-40').className = '';
document.getElementById('pchela2-40').className = '';
}};
function myFunction50() {
if (document.body.scrollTop >= y-yx || document.documentElement.scrollTop >= y-yx) {
  document.getElementById('lore-50').className = 'lore0-50';
document.getElementById('blok-1-50').className = 'poyavlenie-50';
document.getElementById('blok-1-50').style.display = 'block';
document.getElementById('poyavlenie-50').style.display = 'block';
document.getElementById('pchela2-50').className = 'pchela2p-50';
}else{
document.getElementById('blok-1-50').style.display = 'none';
document.getElementById('lore-50').className = '';
document.getElementById('pchela2-50').className = '';
}
};



(function(){
  var scale = 0;
  document.getElementById('pchela2').onmouseover = function(){
      scale = 0.9;
      document.getElementById('blok-1').style.transform = 'scale(' + scale + ')';
  }
})();
(function(){
  var scale = 0;
  document.getElementById('pchela2').onmouseout = function(){
      scale = 1;
      document.getElementById('blok-1').style.transform = 'scale(' + scale + ')';
  }
})();

(function(){
  var scale = 0;
  document.getElementById('pchela2-20').onmouseover = function(){
      scale = 0.9;
      document.getElementById('blok-1-20').style.transform = 'scale(' + scale + ')';
  }
})();
(function(){
  var scale = 0;
  document.getElementById('pchela2-20').onmouseout = function(){
      scale = 1;
      document.getElementById('blok-1-20').style.transform = 'scale(' + scale + ')';
  }
})();
(function(){
  var scale = 0;
  document.getElementById('pchela2-30').onmouseover = function(){
      scale = 0.9;
      document.getElementById('blok-1-30').style.transform = 'scale(' + scale + ')';
  }
})();
(function(){
  var scale = 0;
  document.getElementById('pchela2-30').onmouseout = function(){
      scale = 1;
      document.getElementById('blok-1-30').style.transform = 'scale(' + scale + ')';
  }
})();
(function(){
  var scale = 0;
  document.getElementById('pchela2-40').onmouseover = function(){
      scale = 0.9;
      document.getElementById('blok-1-40').style.transform = 'scale(' + scale + ')';
  }
})();
(function(){
  var scale = 0;
  document.getElementById('pchela2-40').onmouseout = function(){
      scale = 1;
      document.getElementById('blok-1-40').style.transform = 'scale(' + scale + ')';
  }
})();
(function(){
  var scale = 0;
  document.getElementById('pchela2-50').onmouseover = function(){
      scale = 0.9;
      document.getElementById('blok-1-50').style.transform = 'scale(' + scale + ')';
  }
})();
(function(){
  var scale = 0;
  document.getElementById('pchela2-50').onmouseout = function(){
      scale = 1;
      document.getElementById('blok-1-50').style.transform = 'scale(' + scale + ')';
  }
})();

document.getElementById('pchela2').addEventListener('click', myFunction1);
document.getElementById('pchela2-20').addEventListener('click', myFunction2);
document.getElementById('pchela2-30').addEventListener('click', myFunction3);
document.getElementById('pchela2-40').addEventListener('click', myFunction4);
document.getElementById('pchela2-50').addEventListener('click', myFunction5);

function myFunction1(){
      document.getElementById('poyavlenie').style.display = 'none';
      document.getElementById('p_1').style.display = 'none';
      document.getElementById('poyavlenie-20').style.display = 'none';
      document.getElementById('p_2').style.display = 'block';
      document.documentElement.scrollTop = 0;
};
function myFunction2(){
  document.getElementById('poyavlenie-20').style.display = 'none';
  document.getElementById('p_2').style.display = 'none';
  document.getElementById('poyavlenie-30').style.display = 'none';
  document.getElementById('p_3').style.display = 'block';
  document.documentElement.scrollTop = 0;
};
function myFunction3(){
  document.getElementById('poyavlenie-30').style.display = 'none';
  document.getElementById('p_3').style.display = 'none';
  document.getElementById('poyavlenie-40').style.display = 'none';
  document.getElementById('p_4').style.display = 'block';
  document.documentElement.scrollTop = 0;
};
function myFunction4(){
  document.getElementById('poyavlenie-40').style.display = 'none';
  document.getElementById('p_4').style.display = 'none';
  document.getElementById('poyavlenie-50').style.display = 'none';
  document.getElementById('p_5').style.display = 'block';
  document.documentElement.scrollTop = 0;
};
function myFunction5(){
  document.getElementById('poyavlenie-50').style.display = 'none';
  document.getElementById('p_5').style.display = 'none';
  document.getElementById('poyavlenie').style.display = 'none';
  document.getElementById('p_1').style.display = 'block';
  document.documentElement.scrollTop = 0;
};

function animate1({duration1, timing1, draw1}) {
  let start1 = performance.now();
  requestAnimationFrame(function animate1(time1) {
    // timeFraction изменяется от 0 до 1
    let timeFraction1 = (time1 - start1) / duration1;
    if (timeFraction1 > 1) timeFraction1 = 1;
    // вычисление текущего состояния анимации
    let progress1 = timing1(timeFraction1);
    draw1(progress1); // отрисовать её
    if (timeFraction1 < 1) {
     requestAnimationFrame(animate1); 
    }
  });

} 

document.querySelector('.sprava').onclick = function() {
  animate1({
    duration1: 1000,
    timing1: function quad1(timeFraction1) {
        //return (0.075, 0.82, 0.165, 1.0)
        return 1 - Math.pow(timeFraction1, 2)
      },
      draw1: function(progress1) { 
        window.scrollBy(0, progress1*9);
      }
  });
  };
  
  document.querySelector('.sleva').onclick = function(){
      animate1({
          duration1: 1000,
          timing1: function duad1(timeFraction1){
              return 1 - Math.pow(timeFraction1, 2)
          },
          draw1: function(progress1){
              window.scrollBy(0, progress1*(-9));
          }
      });
  };

  document.getElementById('menu3').onclick = function(){
    document.getElementById('p_1').style.display = 'block';
    document.getElementById('p_2').style.display = 'none';
    document.getElementById('p_3').style.display = 'none';
    document.getElementById('p_4').style.display = 'none';
    document.getElementById('p_5').style.display = 'none';
    document.documentElement.scrollTop = 0;
  }
  document.getElementById('menu3_2').onclick = function(){
    document.getElementById('p_1').style.display = 'none';
    
    document.getElementById('p_3').style.display = 'none';
    document.getElementById('p_4').style.display = 'none';
    document.getElementById('p_5').style.display = 'none';
    document.getElementById('p_2').style.display = 'block';
    document.documentElement.scrollTop = 0;
  }
  document.getElementById('menu3_3').onclick = function(){
    document.getElementById('p_1').style.display = 'none';
    document.getElementById('p_2').style.display = 'none';
    
    document.getElementById('p_4').style.display = 'none';
    document.getElementById('p_5').style.display = 'none';
    document.getElementById('p_3').style.display = 'block';
    document.documentElement.scrollTop = 0;
  }
  document.getElementById('menu3_4').onclick = function(){
    document.getElementById('p_1').style.display = 'none';
    document.getElementById('p_2').style.display = 'none';
    document.getElementById('p_3').style.display = 'none';
    
    document.getElementById('p_5').style.display = 'none';
    document.getElementById('p_4').style.display = 'block';
    document.documentElement.scrollTop = 0;
  }
  document.getElementById('menu3_5').onclick = function(){
    document.getElementById('p_1').style.display = 'none';
    document.getElementById('p_2').style.display = 'none';
    document.getElementById('p_3').style.display = 'none';
    document.getElementById('p_4').style.display = 'none';
    document.getElementById('p_5').style.display = 'block';
    document.documentElement.scrollTop = 0;
  }
    
  document.getElementById('menu').addEventListener("click", myFunc);
  document.getElementById('menu').addEventListener("click", myFunc2);

  function myFunc(){
    this.classList.toggle("change");
  }
  function myFunc2(){
    document.getElementById("menu3").classList.toggle("menu4");
    document.getElementById("menu3_2").classList.toggle("menu4");
    document.getElementById("menu3_3").classList.toggle("menu4");
    document.getElementById("menu3_4").classList.toggle("menu4");
    document.getElementById("menu3_5").classList.toggle("menu4");
  }
