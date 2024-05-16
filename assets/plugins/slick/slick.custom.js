
$(document).ready(function() {

    $('.banner-slider').slick({
        autoplay: false,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: false,
        dots: true,
    }).slickAnimation();


    $('.project-slider').slick({
        infinite: true,
        slidesToShow: 2,
        arrows: true,
        centerMode:true,
        centerPadding:"400px",
        slidesToScroll: 1,
        dots:false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    centerPadding:"100px",
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    centerPadding:"100px",
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    centerPadding:"50px",
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerPadding: 0,
                    centerMode:false,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerPadding: 0,
                    centerMode:false,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: 0,
                    centerMode:false,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: 0,
                    centerMode:false,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.slider-btn .prev-btn').click(function(e){
        //e.preventDefault();
        $('.project-slider').slick('slickPrev');
    } );

    $('.slider-btn .next-btn').click(function(e){
        //e.preventDefault();
        $('.project-slider').slick('slickNext');
    } );


    $('.pt-slider .prev-btn').click(function(e){
        //e.preventDefault();
        $('.testimonial-slider').slick('slickPrev');
    } );

    $('.pt-slider .next-btn').click(function(e){
        //e.preventDefault();
        $('.testimonial-slider').slick('slickNext');
    } );

    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.testimonial-slider-rtl').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
        rtl:true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.testi-slider-two').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // $('.clients-carousel').slick({
    // 	infinite: true,
    // 	slidesToShow: 5,
    // 	slidesToScroll: 1,
    // 	dots:false,
    // 	responsive: [
    // 	  {
    // 		breakpoint: 991,
    // 		settings: {
    // 		  slidesToShow: 4,
    // 		  slidesToScroll: 1,
    // 		  infinite: true
    // 		}
    // 	  },
    // 	  {
    // 		breakpoint: 576,
    // 		settings: {
    // 		  slidesToShow: 3,
    // 		  slidesToScroll: 1
    // 		}
    // 	  },
    // 	  {
    // 		breakpoint: 480,
    // 		settings: {
    // 		  slidesToShow: 1,
    // 		  slidesToScroll: 1
    // 		}
    // 	  }
    // 	  // You can unslick at a given breakpoint now by adding:
    // 	  // settings: "unslick"
    // 	  // instead of a settings object
    // 	]
    // });


    $('.client-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:false,
        arrows:true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(".prev-btn").click(function () {
        $(".client-slider.slick-list").slick("slickPrev");
    });

    $(".next-btn").click(function () {
        $(".client-slider.slick-list").slick("slickNext");
    });
    $(".prev-btn").addClass("slick-disabled");
    $(".client-slider.slick-list").on("afterChange", function () {
        if ($(".slick-prev").hasClass("slick-disabled")) {
            $(".prev-btn").addClass("slick-disabled");
        } else {
            $(".prev-btn").removeClass("slick-disabled");
        }
        if ($(".slick-next").hasClass("slick-disabled")) {
            $(".next-btn").addClass("slick-disabled");
        } else {
            $(".next-btn").removeClass("slick-disabled");
        }
    });



});