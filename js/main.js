document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("hamburger"),n=document.getElementById("small-menu");function a(a){n.className=n.className.replace(" w3-show",""),e.className=e.className.replace(" fa-times "," fa-bars ")}document.addEventListener("click",function(t){t.target!=e&&t.target!=n&&a()}),e.addEventListener("click",function(a){-1==n.className.indexOf("w3-show")?(n.className+=" w3-show",e.className=e.className.replace(" fa-bars "," fa-times ")):(n.className=n.className.replace(" w3-show",""),e.className=e.className.replace(" fa-times "," fa-bars "))}),n.addEventListener("click",a);var t=document.getElementsByClassName("hero-button")[0];document.body.contains(t)&&t.addEventListener("click",function(e){e.preventDefault(),location="#projects-section"}),document.body.contains(document.getElementsByClassName("video-background")[0])&&$(".video-background").vidbacking({masked:!0});var s=$(".me-card");window.innerWidth<=1080?s.removeClass("w3-third"):window.innerWidth>1080&&s.addClass("w3-third"),$(window).resize(function(){window.innerWidth<=1080?s.removeClass("w3-third"):window.innerWidth>1080&&s.addClass("w3-third")});var o=document.getElementById("back-to-top");o.addEventListener("click",function(e){e.preventDefault(),window.scrollTo(0,top)}),o.style.display="none",window.onscroll=function(){document.body.scrollTop>600||document.documentElement.scrollTop>600?o.style.display="block":o.style.display="none"}});