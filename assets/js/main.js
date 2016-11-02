
fixImgHeight();

function fixImgHeight(){
  var postHeader = document.querySelector('.img-header');
  var height = document.documentElement.clientHeight;

  if(postHeader){
    postHeader.style.height = height + 'px';
  }


  var triangle = document.querySelector('.triangle');
  if(triangle){
     triangle.style.marginTop =  (height-50)+'px';
  }
}

var header=document.querySelector('.site-header')

headroom= new Headroom(header,{
  offset:0,
  tolerance : {
    up : 5,
    down : 10
  },
  classes:{
    initial:"animated",
    pinned:"slide-down",
    unpinned:"slide-up",
    top:"top",
    notTop:"notTop",
    bottom:"bottom",
    notBottom:"notBottom"
  }
});

headroom.init();

// Active menu

var url = window.location.pathname;
if(url == "/blog/"){
  document.getElementById("menu-blog").className = "active";
} else if(url == "/sobre/"){
  document.getElementById("menu-sobre").className = "active";
} else if(url == "/trabalhos"){
  document.getElementById("menu-trabalhos").className = "active";
}


// Smooth Scrolling 12 meses 12 livros

$('.books-list a').click(function(){
  var jumpId = $(this).attr('href');
  $('body').animate({scrollTop: $(jumpId).offset().top - 10}, 1500);
});


$('.anchor-destination a').click(function(){
  var jumpId = $(this).attr('href');
  $('body').animate({scrollTop: $(jumpId).offset().top - 10}, 1500);
});
