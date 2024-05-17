(function ($) {
    "use strict";

    /*===========================================
        =    On Load Function      =
    =============================================*/
    $(window).on("load", function () {
        preloader();
        wowAnimation();
    });


    /*===========================================
        =    Preloader      =
    =============================================*/
    function preloader() {
        $('.preloader').delay(0).fadeOut();
    };


    /*===========================================
	=         Mobile Menu Active         =
    =============================================*/
    $.fn.mobilemenu = function (options) {
        var opt = $.extend(
            {
                menuToggleBtn: ".menu-toggle",
                bodyToggleClass: "body-visible",
                subMenuClass: "submenu-class",
                subMenuParent: "submenu-item-has-children",
                subMenuParentToggle: "active-class",
                meanExpandClass: "mean-expand-class",
                appendElement: '<span class="mean-expand-class"></span>',
                subMenuToggleClass: "menu-open",
                toggleSpeed: 400,
            },
            options
        );

        return this.each(function () {
            var menu = $(this);

            function menuToggle() {
                menu.toggleClass(opt.bodyToggleClass);

                var subMenu = "." + opt.subMenuClass;
                $(subMenu).each(function () {
                    if ($(this).hasClass(opt.subMenuToggleClass)) {
                        $(this).removeClass(opt.subMenuToggleClass);
                        $(this).css("display", "none");
                        $(this).parent().removeClass(opt.subMenuParentToggle);
                    }
                });
            }

            menu.find("li").each(function () {
                var submenu = $(this).find("ul");
                submenu.addClass(opt.subMenuClass);
                submenu.css("display", "none");
                submenu.parent().addClass(opt.subMenuParent);
                submenu.prev("a").append(opt.appendElement);
                submenu.next("a").append(opt.appendElement);
            });

            function toggleDropDown($element) {
                var $parent = $($element).parent();
                var $siblings = $parent.siblings();

                $siblings.removeClass(opt.subMenuParentToggle);
                $siblings.find("ul").slideUp(opt.toggleSpeed).removeClass(opt.subMenuToggleClass);

                $parent.toggleClass(opt.subMenuParentToggle);
                $($element).next("ul").slideToggle(opt.toggleSpeed).toggleClass(opt.subMenuToggleClass);
            }

            var expandToggler = "." + opt.meanExpandClass;
            $(expandToggler).each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    toggleDropDown($(this).parent());
                });
            });

            $(opt.menuToggleBtn).each(function () {
                $(this).on("click", function () {
                    menuToggle();
                });
            });

            menu.on("click", function (e) {
                e.stopPropagation();
                menuToggle();
            });

            menu.find("div").on("click", function (e) {
                e.stopPropagation();
            });
        });
    };
    $(".mobile-menu-wrapper").mobilemenu();


    /*===========================================
	=         Desk Menu Active         =
    =============================================*/
    $.fn.deskmenu = function (options) {
        var opt = $.extend(
            {
                menuToggleBtn: ".menu-toggle2",
                bodyToggleClass: "body-visible",
                subMenuClass: "submenu-class2",
                subMenuParent: "submenu-item-has-children2",
                subMenuParentToggle: "active-class2",
                meanExpandClass: "mean-expand-class2",
                appendElement: '<span class="mean-expand-class2"></span>',
                subMenuToggleClass: "menu-open2",
                toggleSpeed: 400,
            },
            options
        );

        return this.each(function () {
            var menu = $(this);

            function menuToggle() {
                menu.toggleClass(opt.bodyToggleClass);

                var subMenu = "." + opt.subMenuClass;
                $(subMenu).each(function () {
                    if ($(this).hasClass(opt.subMenuToggleClass)) {
                        $(this).removeClass(opt.subMenuToggleClass);
                        $(this).css("display", "none");
                        $(this).parent().removeClass(opt.subMenuParentToggle);
                    }
                });
            }

            menu.find("li").each(function () {
                var submenu = $(this).find("ul");
                submenu.addClass(opt.subMenuClass);
                submenu.css("display", "none");
                submenu.parent().addClass(opt.subMenuParent);
                submenu.prev("a").append(opt.appendElement);
                submenu.next("a").append(opt.appendElement);
            });

            function toggleDropDown($element) {
                var $parent = $($element).parent();
                var $siblings = $parent.siblings();

                $siblings.removeClass(opt.subMenuParentToggle);
                $siblings.find("ul").slideUp(opt.toggleSpeed).removeClass(opt.subMenuToggleClass);

                $parent.toggleClass(opt.subMenuParentToggle);
                $($element).next("ul").slideToggle(opt.toggleSpeed).toggleClass(opt.subMenuToggleClass);
            }

            var expandToggler = "." + opt.meanExpandClass;
            $(expandToggler).each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    toggleDropDown($(this).parent());
                });
            });

            $(opt.menuToggleBtn).each(function () {
                $(this).on("click", function () {
                    menuToggle();
                });
            });

            menu.on("click", function (e) {
                e.stopPropagation();
                menuToggle();
            });

            menu.find("div").on("click", function (e) {
                e.stopPropagation();
            });
        });
    };

    $(".desk-menu-wrapper").deskmenu();



    /*===========================================
	=         Sticky Fix         =
    =============================================*/
    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 500) {
            $('.sticky-wrapper').addClass('header-sticky');
        } else {
            $('.sticky-wrapper').removeClass('header-sticky')
        }
    })


    /*===========================================
	=         Scroll To Top         =
    =============================================*/
    if($('.scroll-top')) {
        var scrollTopbtn = document.querySelector('.scroll-top');
        var progressPath = document.querySelector('.scroll-top path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 750;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(scrollTopbtn).addClass('show');
            } else {
                jQuery(scrollTopbtn).removeClass('show');
            }
        });
        jQuery(scrollTopbtn).on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, 1);
            return false;
        })
    }


    /*===========================================
	=         Set Background Image         =
    =============================================*/
    if ($("[data-bg-src]").length > 0) {
        $("[data-bg-src]").each(function () {
            var src = $(this).attr("data-bg-src");
            $(this).css("background-image", "url(" + src + ")");
            $(this).removeAttr("data-bg-src").addClass("background-image");
        });
    }



    /*===========================================
	=         Slick Global Slider         =
    =============================================*/
    $(".global-carousel").each(function () {
        var carouselSlide = $(this);

        // Collect Data
        function d(data) {
            return carouselSlide.data(data);
        }

        // Custom Arrow Button
        var prevButton =
                '<button type="button" class="slick-prev"><i class="' +
                d("prev-arrow") +
                '"></i></button>',
            nextButton =
                '<button type="button" class="slick-next"><i class="' +
                d("next-arrow") +
                '"></i></button>';

        // Function For Custom Arrow Btn
        $("[data-slick-next]").each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                $($(this).data("slick-next")).slick("slickNext");
            });
        });

        $("[data-slick-prev]").each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                $($(this).data("slick-prev")).slick("slickPrev");
            });
        });

        // Check for arrow wrapper
        if (d("arrows") == true) {
            if (!carouselSlide.closest(".arrow-wrap").length) {
                carouselSlide.closest(".container").parent().addClass("arrow-wrap");
            }
        }

        carouselSlide.slick({
            dots: d("dots") ? true : false,
            fade: d("fade") ? true : false,
            arrows: d("arrows") ? true : false,
            speed: d("speed") ? d("speed") : 1000,
            sliderNavfor: d("slidernavfor") ? d("slidernavfor") : false,
            autoplay: d("autoplay") == false ? false : true,
            infinite: d("infinite") == false ? false : true,
            slidesToShow: d("slide-show") ? d("slide-show") : 1,
            adaptiveHeight: d("adaptive-height") ? true : false,
            centerMode: d("center-mode") ? true : false,
            autoplaySpeed: d("autoplay-speed") ? d("autoplay-speed") : 8000,
            centerPadding: d("center-padding") ? d("center-padding") : "0",
            focusOnSelect: d("focuson-select") == false ? false : true,
            pauseOnFocus: d("pauseon-focus") ? true : false,
            pauseOnHover: d("pauseon-hover") ? true : false,
            variableWidth: d("variable-width") ? true : false,
            vertical: d("vertical") ? true : false,
            verticalSwiping: d("vertical") ? true : false,
            prevArrow: d("prev-arrow")
                ? prevButton
                : '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            nextArrow: d("next-arrow")
                ? nextButton
                : '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            rtl: $("html").attr("dir") == "rtl" ? true : false,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        arrows: d("xl-arrows") ? true : false,
                        dots: d("xl-dots") ? true : false,
                        slidesToShow: d("xl-slide-show")
                            ? d("xl-slide-show")
                            : d("slide-show"),
                        centerMode: d("xl-center-mode") ? true : false,
                        centerPadding: d("xl-center-padding") ? d("xl-center-padding") : "0",
                    },
                },
                {
                    breakpoint: 1400,
                    settings: {
                        arrows: d("ml-arrows") ? true : false,
                        dots: d("ml-dots") ? true : false,
                        slidesToShow: d("ml-slide-show")
                            ? d("ml-slide-show")
                            : d("slide-show"),
                        centerMode: d("ml-center-mode") ? true : false,
                        centerPadding: d("ml-center-padding") ? d("ml-center-padding") : "0",
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: d("lg-arrows") ? true : false,
                        dots: d("lg-dots") ? true : false,
                        slidesToShow: d("lg-slide-show")
                            ? d("lg-slide-show")
                            : d("slide-show"),
                        centerMode: d("lg-center-mode")
                            ? d("lg-center-mode")
                            : false,
                        centerPadding: d("lg-center-padding") ? d("lg-center-padding") : "0",
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: d("md-arrows") ? true : false,
                        dots: d("md-dots") ? true : false,
                        slidesToShow: d("md-slide-show")
                            ? d("md-slide-show")
                            : 1,
                        centerMode: d("md-center-mode")
                            ? d("md-center-mode")
                            : false,
                        centerPadding: 0,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: d("sm-arrows") ? true : false,
                        dots: d("sm-dots") ? true : false,
                        slidesToShow: d("sm-slide-show")
                            ? d("sm-slide-show")
                            : 1,
                        centerMode: d("sm-center-mode")
                            ? d("sm-center-mode")
                            : false,
                        centerPadding: 0,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: d("xs-arrows") ? true : false,
                        dots: d("xs-dots") ? true : false,
                        slidesToShow: d("xs-slide-show")
                            ? d("xs-slide-show")
                            : 1,
                        centerMode: d("xs-center-mode")
                            ? d("xs-center-mode")
                            : false,
                        centerPadding: 0,
                    },
                },
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ],
        });
    });


    /*===========================================
	=         Custom Animation For Slider     =
    =============================================*/
    $('[data-ani-duration]').each(function () {
        var durationTime = $(this).data('ani-duration');
        $(this).css('animation-duration', durationTime);
    });

    $('[data-ani-delay]').each(function () {
        var delayTime = $(this).data('ani-delay');
        $(this).css('animation-delay', delayTime);
    });

    $('[data-ani]').each(function () {
        var animaionName = $(this).data('ani');
        $(this).addClass(animaionName);
        $('.slick-current [data-ani]').addClass('slider-animated');
    });

    $('.global-carousel').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $(slick.$slides).find('[data-ani]').removeClass('slider-animated');
        $(slick.$slides[currentSlide]).find('[data-ani]').addClass('slider-animated');
    })


    /*===========================================
	=         Ajax Contact Form         =
    =============================================*/
    var form = ".ajax-contact";
    var invalidCls = "is-invalid";
    var $email = '[name="email"]';
    var $validation =
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'; // Must be use (,) without any space
    var formMessages = $(".form-messages");

    function sendContact() {
        var formData = $(form).serialize();
        var valid;
        valid = validateContact();
        if (valid) {
            jQuery
            .ajax({
                url: $(form).attr("action"),
                data: formData,
                type: "POST",
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                formMessages.removeClass("error");
                formMessages.addClass("success");
                // Set the message text.
                formMessages.text(response);
                // Clear the form.
                $(
                    form +
                        ' input:not([type="submit"]),' +
                        form +
                        " textarea"
                ).val("");
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                formMessages.removeClass("success");
                formMessages.addClass("error");
                // Set the message text.
                if (data.responseText !== "") {
                    formMessages.html(data.responseText);
                } else {
                    formMessages.html(
                        "Oops! An error occured and your message could not be sent."
                    );
                }
            });
        }
    }

    function validateContact() {
        var valid = true;
        var formInput;

        function unvalid($validation) {
            $validation = $validation.split(",");
            for (var i = 0; i < $validation.length; i++) {
                formInput = form + " " + $validation[i];
                if (!$(formInput).val()) {
                    $(formInput).addClass(invalidCls);
                    valid = false;
                } else {
                    $(formInput).removeClass(invalidCls);
                    valid = true;
                }
            }
        }
        unvalid($validation);

        if (
            !$($email).val() ||
            !$($email)
                .val()
                .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
        ) {
            $($email).addClass(invalidCls);
            valid = false;
        } else {
            $($email).removeClass(invalidCls);
            valid = true;
        }
        return valid;
    }

    $(form).on("submit", function (element) {
        element.preventDefault();
        sendContact();
    });



    /*===========================================
	=         Search Box Popup         =
    =============================================*/
    function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
        $($searchOpen).on("click", function (e) {
            e.preventDefault();
            $($searchBox).addClass($toggleCls);
        });
        $($searchBox).on("click", function (e) {
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
        $($searchBox)
            .find("form")
            .on("click", function (e) {
                e.stopPropagation();
                $($searchBox).addClass($toggleCls);
            });
        $($searchCls).on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
    }
    popupSarchBox(
        ".popup-search-box",
        ".searchBoxToggler",
        ".searchClose",
        "show"
    );



    /*===========================================
	=         Popup Sidemenu         =
    =============================================*/
    function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
        // Sidebar Popup
        $($sideMunuOpen).on('click', function (e) {
            e.preventDefault();
            $($sideMenu).addClass($toggleCls);
        });
        $($sideMenu).on('click', function (e) {
            e.stopPropagation();
            $($sideMenu).removeClass($toggleCls)
        });

        var sideMenuChild = $sideMenu + ' > div';
        $(sideMenuChild).on('click', function (e) {
            e.stopPropagation();
            $($sideMenu).addClass($toggleCls)
        });
        $($sideMenuCls).on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $($sideMenu).removeClass($toggleCls);
        });
    };
    popupSideMenu('.sidemenu-wrapper', '.sideMenuToggler', '.sideMenuCls', 'show');



    /*===========================================
	=         Magnific Popup         =
    =============================================*/
    /* magnificPopup img view */
    $(".popup-image").magnificPopup({
        type: "image",
        mainClass: 'mfp-zoom-in',
        removalDelay: 260,
        gallery: {
            enabled: true,
        },
    });

    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
        type: "iframe",
        mainClass: 'mfp-zoom-in',
        removalDelay: 260,
    });



    /*===========================================
	=        Masonary Active         =
    =============================================*/
    $(".masonary-active").imagesLoaded(function () {
        var $filter = ".masonary-active",
            $filterItem = ".filter-item";

        if ($($filter).length > 0) {
            var $grid = $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });
        }
    });


    /*===========================================
	=         Shape Mockup         =
    =============================================*/
    $.fn.shapeMockup = function () {
        var $shape = $(this);
        $shape.each(function () {
            var $currentShape = $(this),
                shapeTop = $currentShape.data("top"),
                shapeRight = $currentShape.data("right"),
                shapeBottom = $currentShape.data("bottom"),
                shapeLeft = $currentShape.data("left");
            $currentShape
                .css({
                    top: shapeTop,
                    right: shapeRight,
                    bottom: shapeBottom,
                    left: shapeLeft,
                })
                .removeAttr("data-top")
                .removeAttr("data-right")
                .removeAttr("data-bottom")
                .removeAttr("data-left")
                .parent()
                .addClass("shape-mockup-wrap");
        });
    };

    if ($(".shape-mockup")) {
        $(".shape-mockup").shapeMockup();
    }



    /*===========================================
	=         Progress Bar Animation         =
    =============================================*/
    $('.progress-bar').waypoint(function() {
        $('.progress-bar').css({
        animation: "animate-positive 1.8s",
        opacity: "1"
        });
    }, { offset: '75%' });



    /*===========================================
	=         Counter Up         =
    =============================================*/
    $(".counter-number").counterUp({
        delay: 10,
        time: 1000,
    });



    /*===========================================
	=         Marquee Active         =
    =============================================*/
    if ($(".marquee_mode").length) {
        $('.marquee_mode').marquee({
            speed: 50,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible:true,
        });
    }


    /*===========================================
	=         Button Effects        =
    =============================================*/
    var mouse = { x: 0, y: 0 };
    var pos = { x: 0, y: 0 };
    var ratio = 0.65;
    var active = false;

    var allParalax = document.querySelectorAll('.parallax-wrap');

    allParalax.forEach(function (e) {
      e.addEventListener("mousemove", mouseMoveBtn);
    });

    function mouseMoveBtn(e) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      mouse.x = e.pageX;
      mouse.y = e.pageY - scrollTop;
    }

    gsap.ticker.add(updatePosition);

    document.querySelectorAll(".parallax-wrap").forEach(function(element) {
      element.addEventListener("mouseenter", function() {
        gsap.to(this, { duration: 0.3, scale: 2 });
        gsap.to(this.children, { duration: 0.3, scale: 0.5 });
        active = true;
      });

      element.addEventListener("mouseleave", function() {
        gsap.to(this, { duration: 0.3, scale: 1 });
        gsap.to(this.children, { duration: 0.3, scale: 1, x: 0, y: 0 });
        active = false;
      });

      element.addEventListener("mousemove", function(e) {
        parallaxCursorBtn(e, this, 2);
        callParallaxBtn(e, this);
      });
    });

    function updatePosition() {
      pos.x += (mouse.x - pos.x) * ratio;
      pos.y += (mouse.y - pos.y) * ratio;
    }

    function callParallaxBtn(e, parent) {
      parallaxItBtn(e, parent, parent.querySelector(".parallax-element"), 20);
    }

    function parallaxItBtn(e, parent, target, movement) {
      var boundingRect = parent.getBoundingClientRect();
      var relX = e.pageX - boundingRect.left;
      var relY = e.pageY - boundingRect.top;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      gsap.to(target, {
        duration: 0.3,
        x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
        y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.height * movement,
        ease: "power2.out"
      });
    }

    function parallaxCursorBtn(e, parent, movement) {
      var rect = parent.getBoundingClientRect();
      var relX = e.pageX - rect.left;
      var relY = e.pageY - rect.top;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
      pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2 - scrollTop) / movement;
    }

    ///////////////////////////////////////////////////////
    // GSAP Register

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
	
	gsap.config({
		nullTargetWarn: false,
	});

	let smoother = ScrollSmoother.create({
		smooth: 2,
		effects: true,
		smoothTouch: 0.1,
		normalizeScroll: false,
		ignoreMobileResize: true,
	});

    /////////////////////////////////////////////////////
    // Magnate Animation
    var magnets = document.querySelectorAll('.gsap-magnetic')
    var strength = 50

    magnets.forEach( (magnet) => {
        magnet.addEventListener('mousemove', moveMagnet );
        magnet.addEventListener('mouseout', function(event) {
            TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
        } );
    });

    function moveMagnet(event) {
        var magnetButton = event.currentTarget
        var bounding = magnetButton.getBoundingClientRect()

        TweenMax.to( magnetButton, 1, {
            x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
            y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
            ease: Power4.easeOut
        })
    }

    /*===========================================
	=         Custom Cursor         =
    =============================================*/
    if (!$('body').hasClass("hide-magic-cursor")) {
        var mouse = {
            x: 0,
            y: 0
        };
        var pos = {
            x: 0,
            y: 0
        };
        var ratio = 0.65;

        var magicCursor = document.getElementById("awesome-cursor-circle");

        gsap.set(magicCursor, { xPercent: -50, yPercent: -50, scale: 0.5, borderWidth: '4px' });

        document.addEventListener("mousemove", mousemoveHandler);

        function mousemoveHandler(e) {

            let tl = gsap.timeline({
                defaults: {
                    x: e.clientX,
                    y: e.clientY,
                }
            })

            tl.to(magicCursor, {
                ease: "power2.out"
            })
        }

        $(".parallax-wrap").mouseenter(function (e) {
            gsap.to(this, { duration: 0.3, scale: 2 });
            gsap.to(magicCursor, { duration: 0.3, scale: 0.9, borderWidth: '2px', opacity: 1 });
            gsap.to($(this).children(), { duration: 0.3, scale: 0.5 });
            active = true;
        });

        $(".parallax-wrap").mouseleave(function (e) {
            gsap.to(magicCursor, { duration: 0.3, scale: 0.5, borderWidth: '4px', opacity: 1, borderColor: 'rgba(255,255,255,.5)' });
            active = false;
        });

        $(".parallax-wrap").mousemove(function (e) {
            parallaxCursor(e, this, 2);
            callParallax(e, this);
        });

        function callParallax(e, parent) {
            parallaxIt(e, parent, parent.querySelector(".parallax-element"), 20);
        }

        function parallaxIt(e, parent, target, movement) {
            var boundingRect = parent.getBoundingClientRect();
            var relX = e.pageX - boundingRect.left;
            var relY = e.pageY - boundingRect.top;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            gsap.to(target, {
                duration: 0.3,
                x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
                y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.height * movement,
                ease: Power2.easeOut
            });
        }

        function parallaxCursor(e, parent, movement) {
            var rect = parent.getBoundingClientRect();
            var relX = e.pageX - rect.left;
            var relY = e.pageY - rect.top;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
            pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2 - scrollTop) / movement;
            gsap.to(magicCursor, { duration: 0.3, x: pos.x, y: pos.y });
        }
    }


    /*===========================================
	=         Jarallax Active         =
    =============================================*/
    $('.jarallax').jarallax();


    /*===========================================
        =        Wow Active         =
    =============================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }


})(jQuery);


