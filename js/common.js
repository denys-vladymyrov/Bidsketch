

var topLine = $(".top-line");
var mainContent = $("main");
var offSet = $(".top-line-main").offset();
var isFixed = false;
var topLineFees = $(".top-line-fees");

$(window).scroll(function() {

  if( $(this).scrollTop() > offSet.top && offSet.top != 0) {
    topLine.addClass("top-line-fixed");

    if(!isFixed) {
      topLineFees.show();
      var offsetTop = parseInt(mainContent.css("margin-top"));
      offsetTop += parseInt(topLine.outerHeight() - topLineFees.outerHeight());
      mainContent.css("margin-top", offsetTop);
      isFixed = true;
    }

  } else if(offSet.top != 0){

    if(isFixed) {
      topLineFees.hide();
      var offsetTop = parseInt(mainContent.css("margin-top") + topLineFees.outerHeight());
      offsetTop -= parseInt(topLine.outerHeight());
      mainContent.css("margin-top", offsetTop);
    }

    topLine.removeClass("top-line-fixed");
    isFixed = false;
  }
});


function moveProgressBar(animationDelay = 0) {
  var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
  var getProgressWrapWidth = $('.progress-wrap').width();
  var progressTotal = getPercent * getProgressWrapWidth;
  var animationLength = 100;

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

