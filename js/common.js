// var  mn = $(".top-line");
// mns = "main-nav-scrolled";
// hdr = $('header').height();
//
// $(window).scroll(function() {
//   if( $(this).scrollTop() > hdr ) {
//     mn.addClass(mns);
//   } else {
//     mn.removeClass(mns);
//   }
// });

var topLine = $(".top-line");
var offSet = $(".top-line").offset();
console.log(offSet);

$(window).scroll(function() {
  if( $(this).scrollTop() > offSet.top) {
    topLine.addClass("top-line-fixed");
  } else {
    topLine.removeClass("top-line-fixed");
  }
});


function moveProgressBar(animationDelay = 0) {
  var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
  var getProgressWrapWidth = $('.progress-wrap').width();
  var progressTotal = getPercent * getProgressWrapWidth;
  var animationLength = 100;

  // on page load, animate percentage bar to data percentage length
  // .stop() used to prevent animation queueing
  $('.progress-bar').stop().delay(animationDelay).animate({
    left: progressTotal
  }, animationLength);
}

function countActiveNavLi(){
  var activeNavLi = 0;

  $(".nav-list li").each(function( index ) {
    if($(this).hasClass("active")){
      activeNavLi++;
    }
  });

  return activeNavLi;
}

function setProgressBarPercent(animationDelay = 0){
  var progress  = $('.progress-wrap');

  switch (countActiveNavLi()){
    case 1: progress.data('progress-percent', 0);
      break;
    case 2: progress.data('progress-percent', 27);
      break;
    case 3: progress.data('progress-percent', 50);
      break;
    case 4: progress.data('progress-percent', 73);
      break;
    case 5: progress.data('progress-percent', 100);
      break;
  }

  moveProgressBar(animationDelay);

}

setProgressBarPercent();

$(".nav-list li a").on("mouseenter", function(){
  var progress  = $('.progress-wrap');

  switch ($(this).parent('li').index()){
    case 0: progress.data('progress-percent', 0);
      break;
    case 1: progress.data('progress-percent', 27);
      break;
    case 2: progress.data('progress-percent', 50);
      break;
    case 3: progress.data('progress-percent', 73);
      break;
    case 4: progress.data('progress-percent', 100);
      break;
  }
  moveProgressBar();
});

$(".top-nav").on("mouseleave", function(){
   setProgressBarPercent(700);
});
