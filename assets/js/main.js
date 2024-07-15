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
        let percentage = 0;
        let LoadingCounter = setInterval(function () {
            if (percentage <= 100) {
                $("#loading-screen .loading-counter").text(percentage + "%");
                $("#loading-screen .bar").css("width", (100 - percentage) / 2 + "%");
                $("#loading-screen .progress-line").css("transform", "scale(" + percentage / 100 + ")");
                percentage++;
            } else {
                $("#loading-screen").fadeOut(500);
                setTimeout(() => {
                    $("#loading-screen").remove();
                }, 500);
                clearInterval(LoadingCounter);
            }
        }, 10);
    };



    /*===========================================
	=         Mobile Menu Active         =
    =============================================*/
    if ($(".mobile-menu").length) {
        var mobileMenuContent = $(".nav-header .main-menu .navigation").html();

        $(".mobile-menu .navigation").append(mobileMenuContent);
        $.fn.mobilemenu = function (options) {
            var opt = $.extend({
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
    }

    /*===========================================
	=         Desk Menu Active         =
    =============================================*/
    $.fn.deskmenu = function (options) {
        var opt = $.extend({
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
    if ($('.scroll-top')) {
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
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(scrollTopbtn).addClass('show');
            } else {
                jQuery(scrollTopbtn).removeClass('show');
            }
        });
        jQuery(scrollTopbtn).on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, 1);
            return false;
        })
    }

    const topScrollButton = document.querySelector('.top-scroll');
    if (topScrollButton) {
        topScrollButton.addEventListener('click', () => {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: 0,
                    ease: 'power2.inOut'
                }
            });
        });
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
	=         Swiper Global Slider         =
    =============================================*/
    if ($(".testi-carousel-1").length > 0) {
        new Swiper('.testi-carousel-1', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.testi-carousel-1 .swiper-button-next',
                prevEl: '.testi-carousel-1 .swiper-button-prev',
            },
            breakpoints: {
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 2,
                },
                1920: {
                    slidesPerView: 2,
                }
            }
        });
    }


    if ($(".testi-carousel-2").length > 0) {
        new Swiper('.testi-carousel-2', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: {
                el: '.swiper-pagination',
                clickable: false,
            },
            navigation: {
                nextEl: '.testi-button-next',
                prevEl: '.testi-button-prev',
            },
            breakpoints: {
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 2,
                },
                1920: {
                    slidesPerView: 2,
                }
            }
        });
    }



    // Brands Carousel
    if ($('.brands-carousel').length) {
        $('.brands-carousel').owlCarousel({
            autoplay: false,
            loop: true,
            nav: false,
            dots: false,
            margin: 50,
            dotsEach: 1,
            smartSpeed: 1500,
            startPosition: 1,
            navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                420: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 5
                }
            }
        });
    }



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
    const elem = document.querySelector('.masonary-active');
    if (elem) {
        imagesLoaded(elem, () => {
            const iso = new Isotope(elem, {
                itemSelector: '.filter-item',
                layoutMode: 'fitRows'
            });

            document.querySelector('.portfolio-filter').addEventListener('click', (e) => {
                if (e.target.matches('li')) {
                    iso.arrange({
                        filter: e.target.getAttribute('data-filter')
                    });
                    document.querySelector('.current_menu_item')?.classList.remove('current_menu_item');
                    e.target.classList.add('current_menu_item');
                }
            });
        });
    }

    // document.addEventListener('DOMContentLoaded', () => {
    //     if (window.innerWidth > 767) {
    //         const sections = [".service-area.style-two", ".service-area", ".awards-area"];
    //         const items = ['.service-item', '.single-experience-list', '.single-awards-list'];

    //         // Animation for the entire section
    //         gsap.from(sections.join(','), {
    //             opacity: 0,
    //             y: 50,
    //             duration: 0.5,
    //             scrollTrigger: {
    //                 trigger: sections.join(','),
    //                 start: "top 80%",
    //                 end: "bottom 20%",
    //                 toggleActions: "play none none none"
    //             }
    //         });

    //         // Animation for each item
    //         gsap.utils.toArray(items.join(',')).forEach((item, i) => {
    //             gsap.from(item, {
    //                 opacity: 0,
    //                 y: 50,
    //                 duration: 1,
    //                 delay: i * 0.1,
    //                 scrollTrigger: {
    //                     trigger: item,
    //                     start: "top 90%",
    //                     end: "bottom 20%",
    //                     toggleActions: "play none none none"
    //                 }
    //             });
    //         });
    //     }
    // });




    // Check if .service-area-2 exists
    const serviceArea2 = document.querySelector(".service-area.style-two");
    if (serviceArea2) {
        // Define GSAP timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".service-area.style-two",
                start: "top top",
                end: "+=500",
                scrub: 1,
                // markers: true // Remove this line in production
            }
        });

        // Add animations to the timeline
        tl.to(".service-thumb-wrapper", {
            y: "100%", // Adjust the distance as needed
            ease: "none"
        });

        // Check if the last .service-item is reached
        ScrollTrigger.create({
            trigger: ".service-item:last-child",
            start: "top top",
            end: "bottom bottom"
        });
    }



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
    $('.progress-bar').waypoint(function () {
        $('.progress-bar').css({
            animation: "animate-positive 1.8s",
            opacity: "1"
        });
    }, {
        offset: '75%'
    });



    /*===========================================
	=         Counter Up         =
    =============================================*/
    $(".count-number").counterUp({
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
            startVisible: true,
        });
    }

    /*===========================================
	=         Some Class Remove         =
    =============================================*/
    // Function to remove classes based on screen width
    function checkWidthAndRemoveClasses() {
        if (window.innerWidth <= 485) {
            // Select all elements with the classes 'text-anim-left' and 'text-anim-right'
            var elementsLeft = document.querySelectorAll('.text-anim-left');
            var elementsRight = document.querySelectorAll('.text-anim-right');

            // Remove the classes
            elementsLeft.forEach(function (element) {
                element.classList.remove('text-anim-left');
            });
            elementsRight.forEach(function (element) {
                element.classList.remove('text-anim-right');
            });
        }
    }

    // Check width and remove classes on page load
    window.addEventListener('load', checkWidthAndRemoveClasses);

    // Check width and remove classes on window resize
    window.addEventListener('resize', checkWidthAndRemoveClasses);

    // Select the elements with the specified class names
    if (window.innerWidth <= 485) {
        document.querySelectorAll('.service-item-wrapper .ml-35, .service-item-wrapper .mr-75, .service-item-wrapper .ml-30, .service-item-wrapper .mr-5, .service-item-wrapper .mr-40').forEach(function (element) {
            element.classList.remove('ml-35', 'mr-75', 'ml-30', 'mr-5', 'mr-40');
        });
    }


    if ($('.text_anim p').length > 0) {
        let splitTextLines = gsap.utils.toArray(".text_anim p");

        splitTextLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    duration: 2,
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "lines"
            });
            gsap.set(splitTextLine, {
                perspective: 400
            });
            itemSplitted.split({
                type: "lines"
            })
            tl.from(itemSplitted.lines, {
                duration: 1,
                delay: 0.7,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1
            });
        });
    }

    if ($('.title_anim').length > 0) {
        let splitTitleLines = gsap.utils.toArray(".title_anim");
        splitTitleLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "words, lines"
            });
            gsap.set(splitTextLine, {
                perspective: 400
            });
            itemSplitted.split({
                type: "lines"
            })
            tl.from(itemSplitted.lines, {
                duration: 1,
                delay: 0.3,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1
            });
        });
    }





    /*===========================================
	=         Button Effects        =
    =============================================*/
    var mouse = {
        x: 0,
        y: 0
    };
    var pos = {
        x: 0,
        y: 0
    };
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

    document.querySelectorAll(".parallax-wrap").forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            gsap.to(this, {
                duration: 0.3,
                scale: 2
            });
            gsap.to(this.children, {
                duration: 0.3,
                scale: 0.5
            });
            active = true;
        });

        element.addEventListener("mouseleave", function () {
            gsap.to(this, {
                duration: 0.3,
                scale: 1
            });
            gsap.to(this.children, {
                duration: 0.3,
                scale: 1,
                x: 0,
                y: 0
            });
            active = false;
        });

        element.addEventListener("mousemove", function (e) {
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


    /*===========================================
	=         Button Hover Animation         =
    =============================================*/
    $('.tp-hover-btn').on('mouseenter', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('.btn-circle-dot').css({
            top: y,
            left: x
        });
    });

    $('.tp-hover-btn').on('mouseout', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('.btn-circle-dot').css({
            top: y,
            left: x
        });
    });


    var hoverBtns = gsap.utils.toArray(".tp-hover-btn-wrapper");

    const hoverBtnItem = gsap.utils.toArray(".tp-hover-btn-item");
    hoverBtns.forEach((btn, i) => {
        $(btn).mousemove(function (e) {
            callParallax(e);
        });

        function callParallax(e) {
            parallaxIt(e, hoverBtnItem[i], 80);
        }

        function parallaxIt(e, target, movement) {
            var $this = $(btn);
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;

            gsap.to(target, 0.5, {
                x: ((relX - $this.width() / 2) / $this.width()) * movement,
                y: ((relY - $this.height() / 2) / $this.height()) * movement,
                ease: Power2.easeOut,
            });
        }
        $(btn).mouseleave(function (e) {
            gsap.to(hoverBtnItem[i], 0.5, {
                x: 0,
                y: 0,
                ease: Power2.easeOut,
            });
        });
    });


    // button hover end

    if (window.innerWidth > 991) {
        // Button Bounce
        function setupButtonBounce(areaConfigurations) {
            areaConfigurations.forEach(config => {
                const {
                    areaClass,
                    bounceHeight
                } = config;
                if ($(areaClass).length > 0) {
                    gsap.set(".btn-bounce-1", {
                        y: -bounceHeight,
                        opacity: 0
                    });
                    gsap.utils.toArray(".btn-bounce-1").forEach(btn => {
                        const $this = $(btn);
                        gsap.to(btn, {
                            scrollTrigger: {
                                trigger: $this.closest(areaClass),
                                start: "bottom bottom",
                                markers: false
                            },
                            duration: 1,
                            ease: "bounce.out",
                            y: 0,
                            opacity: 1,
                        });
                    });
                }
            });
        }

        const areaConfigurations = [{
                areaClass: '.about-area',
                bounceHeight: 100
            },
            {
                areaClass: '.contact-btn_wrapper',
                bounceHeight: 100
            },
            {
                areaClass: '.btn-bounce-1',
                bounceHeight: 100
            },
            {
                areaClass: '.experience-area',
                bounceHeight: 100
            },
            {
                areaClass: '.portfolio-area',
                bounceHeight: 100
            },
            {
                areaClass: '.contact-area',
                bounceHeight: 100
            }
        ];

        setupButtonBounce(areaConfigurations);
    }


    //////////////////////////////////////////////////
    // Common Js

    $("[data-background").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    $("[data-text-color]").each(function () {
        $(this).css("color", $(this).attr("data-text-color"));
    });

    $(".has-img").each(function () {
        var imgSrc = $(this).attr("data-menu-img");
        var img = `<img class="mega-menu-img" src="${imgSrc}" alt="img">`;
        $(this).append(img);

    });


    /*===========================================
	=         Hover Reaveal Start         =
    =============================================*/
    const hoverItem = document.querySelectorAll(".hover-reveal-item");

    function moveImage(e, hoverItem, index) {
        const item = hoverItem.getBoundingClientRect();
        const x = e.clientX - item.x;
        const y = e.clientY - item.y;
        if (hoverItem.children[index]) {
            hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
        }
    }
    hoverItem.forEach((item, i) => {
        item.addEventListener("mousemove", (e) => {
            setInterval(moveImage(e, item, 1), 50);
        });
    });
    // hover reveal end


    /*===========================================
	=         Service Tab hover style         =
    =============================================*/
    const serviceItems = document.querySelectorAll('.service-item.style-2');
    const mainThumb = document.querySelector('.service-thumb-wrapper .hover-thumb img');

    serviceItems.forEach(serviceItem => {
        const hoverThumb = serviceItem.querySelector('.hover-thumb img');
        const imageUrl = hoverThumb.getAttribute('src');

        serviceItem.addEventListener('mouseenter', () => {
            gsap.to(mainThumb, {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                onComplete: () => {
                    mainThumb.setAttribute('src', imageUrl);
                    gsap.to(mainThumb, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5
                    });
                }
            });
        });
    });




    /////////////////////////////////////////////////////
    // Magnate Animation
    var magnets = document.querySelectorAll('.gsap-magnetic')
    var strength = 50

    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet);
        magnet.addEventListener('mouseout', function (event) {
            TweenMax.to(event.currentTarget, 1, {
                x: 0,
                y: 0,
                ease: Power4.easeOut
            })
        });
    });

    function moveMagnet(event) {
        var magnetButton = event.currentTarget
        var bounding = magnetButton.getBoundingClientRect()

        TweenMax.to(magnetButton, 1, {
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
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

        gsap.set(magicCursor, {
            xPercent: -50,
            yPercent: -50,
            scale: 0.5,
            borderWidth: '4px'
        });

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
            gsap.to(this, {
                duration: 0.3,
                scale: 2
            });
            gsap.to(magicCursor, {
                duration: 0.3,
                scale: 0.9,
                borderWidth: '2px',
                opacity: 1
            });
            gsap.to($(this).children(), {
                duration: 0.3,
                scale: 0.5
            });
            active = true;
        });

        $(".parallax-wrap").mouseleave(function (e) {
            gsap.to(magicCursor, {
                duration: 0.3,
                scale: 0.5,
                borderWidth: '4px',
                opacity: 1,
                borderColor: 'rgba(255,255,255,.5)'
            });
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
            gsap.to(magicCursor, {
                duration: 0.3,
                x: pos.x,
                y: pos.y
            });
        }
    }

    /*===========================================
	=         Scroll Down         =
    =============================================*/
    // Ensure GSAP is loaded
    if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
        // Select the anchor element
        const scrollLink = document.querySelector('.hero-scroll');

        // Check if the element exists
        if (scrollLink) {
            // Add click event listener
            scrollLink.addEventListener('click', (event) => {
                event.preventDefault();

                // Smoothly scroll to the .about-area-1 element
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: '#about-area-1',
                        offsetY: 0
                    },
                    ease: 'power2.inOut'
                });
            });
        }
    }


    /*===========================================
	=         FancyBox         =
    =============================================*/
    $('.lightbox-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


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


    /*===========================================
        =        Accordion Box         =
    =============================================*/
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {

            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');

            if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active ');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                return false;
            } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
            }
        });
    }

    /*===========================================
	=         Pricing Item         =
    =============================================*/
    $(".pricing-item.upper").each(function () {
        $(this).find('.link-btn').addClass('bg-black');
    });

    $(".pricing-item").hover(function () {
        $(this).addClass('upper').find('.link-btn').addClass('bg-black');
        $('.pricing-item').not(this).removeClass('upper').find('.link-btn').removeClass('bg-black');
    });





})(jQuery);