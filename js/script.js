$(document).ready(function() {
    var owl = $('#demos .owl-carousel');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      dots :false,
      center:true,

      responsive: {
        0: {
          items: 1,
        nav:false,
        dots:true,
        navigation : false,
        slideSpeed : 500,
         paginationSpeed : 800,
        rewindSpeed : 1000,
        singleItem: true,
        autoPlay : true,
        stopOnHover : true,

        },
        600: {
          dots:true,
          items: 3,
          navigation : false,
          slideSpeed : 500,
           paginationSpeed : 800,
          rewindSpeed : 1000,
          singleItem: true,
          autoPlay : true,
          stopOnHover : true,
        },
        1000: {
          items: 3
        }
      }
    })
  })



  $(document).ready(function() {
    var owl = $('#details .owl-carousel');
    owl.owlCarousel({
      autoplay:3000,
      margin: 10,
      nav: false,
      loop: true,
      dots :true,
      center:true,


      responsive: {
        0: {
          items: 2,
        },
        767: {
          items: 2,
        },
        1000: {
          items: 3
        }
      }
    })
  })


  $(document).ready(function() {
    var owl = $('#imkanlar .owl-carousel');
    owl.owlCarousel({
      margin: 10,
      nav: false,
      loop: true,
      dots :false,
      center:true,
      responsive: {
        0: {
          items: 2,
        },
        767: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })
  })



  $(document).ready(function() {
    var owl = $('#paketler .owl-carousel');
    owl.owlCarousel({
      margin: 10,
      nav: false,
      loop: true,
      dots :false,
      center:true,
      autoplay:3000,

      responsive: {
        0: {
          items: 1
        },
        767: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })
  });

  


  $(document).ready(function(){

    var stepBtn=$(".steps h1");
    var allStep=$('.three-step .first-step');

    stepBtn.click(function(){
      stepBtn.removeClass("active");
      $(this).addClass( "active" );
      allStep.removeClass("active-step");

      var value= $(this).text();
      var currentActive=$(`.three-step .first-step[data-value=${value}]`);
      currentActive.addClass("active-step");
    });
});


$(document).ready(function(){

  $("#flip").click(function(){
      $("#panel").slideDown("slow");
      $(this).css("display","none",);
      $("#up").css("display","block",);
      $(".up-navbar").addClass("sticky")
  });

  $("#up").click(function(){
      $("#panel").slideUp("slow");
      $(this).css("display","none",);
      $("#flip").css("display","block",);
      $(".up-navbar").removeClass("sticky")

  });


    var menu=$(".up-navbar");
    window.onscroll=function(){
      console.log(window.pageYOffset);
      if(window.pageYOffset >= 1){
          menu.addClass("sticky");
      }
      else{
        menu.removeClass("sticky");
      }
    };

});





