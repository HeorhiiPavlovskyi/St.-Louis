$(function() {

$(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

function navbar() {
    if ($(this).scrollTop() >= $(window).height()/2) {
      $('.navbarbox').addClass("fixed-top");
    } else {
      $('.navbarbox').removeClass("fixed-top");
    };
  };
  navbar();
  $(window).on("scroll", navbar);

// var typed = new Typed('.element', {
//   strings: ["Hello hello.", "Second sentence."],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 1500,
//   startDelay: 2000,
//   loop: true,
//   loopCount: true,
//   cursorChar: ''
// });

jQuery(document).ready(function(){
  jQuery(window).scroll(function() {    
    
    if (jQuery(window).scrollTop() >= 500) {
      jQuery("#to-top").css("opacity", "1");
    } else {
      jQuery("#to-top").css("opacity", "0");
    }
  });
  jQuery("#to-top").click(function(){
    jQuery('html, body').animate({
      scrollTop: jQuery("body").offset().top
    }, 1000); 
  });
});

// $(function() {
//   $('input[name="daterange"]').daterangepicker({
//     opens: 'left'
//   }, function(start, end, label) {
//     console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
//   });
// });

var start = moment("10/10/2023");
var end = moment("10/31/2023");

function cb(start, end) {
    $('#date').html(start.format('ddd, MMMM D') + ' - ' + end.format('ddd, MMMM D'));
}

$('#cal').daterangepicker({
    startDate: start,
    endDate: end,
}, cb);

cb(start, end);


// var btn = $('#button');

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });

// $(".btn-up").click(function() {
//   $("html, body").animate({ scrollTop: 0 }, "slow");
//   return false;
// });


 })

// document.addEventListener("DOMContentLoaded", () => {
//     let to_top_btn = document.querySelector(".btn-up");

//     window.onscroll = function () {
//         if (window.pageYOffset > 580) {
//             to_top_btn.style.display = "block"
//         } else {
//             to_top_btn.style.display = "none"
//         }
//     }

//     // плавный скролл наверх
//     to_top_btn.addEventListener("click", function () {
//         window.scrollBy({
//             top: -document.documentElement.scrollHeight,
//             behavior: "smooth"
//         });
//     });
// });