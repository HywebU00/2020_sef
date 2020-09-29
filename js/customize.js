// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
     // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });

    // 三欄單格run
    // - 主題專區
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $('.publications-items').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });

    // 單欄單格run
    // - 影像專區
    $('.videoSlider').slick({
        mobileFirst: true,
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });

    // 月刊輪播
    $('.bookSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 5000,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });

    // 偵測高度吐出來
    $(document).ready(function(){
		// 用於海基會陸配關懷專區tab頁
		
		height(); // 啟動先呼叫確認高度
     	     	
		$('.tabs2').each(function() {
			var _tabItem = $(this).find('.tabItem'),
				_tabItemA = _tabItem.children('a');
		       	_tabItemA.click(tabs2);
			
			// 切換頁籤			
			function tabs2(e) {
		    	var _tabItemNow = $(this).parent()
		        	_tabItem.removeClass('active');
		           	_tabItemNow.addClass('active');
					height();
			}
		});
     	
     	// 標籤點擊算高度
     	$('.tabs2 .accordion a.title').click(height);
     	
     	function height(){
	        var _block_title_HH = $('h3.block-title').height(), 			//h3標題高
        		_tabItem_HH = $('h2.active').height(),              			//標屜高
        		_tabConten_HH = $('h2.active + div').height(),          //內容高
        		_total_HH = _tabItem_HH + _tabConten_HH 
        				+ _block_title_HH + 90; 											//總高＝標屜高＋內容高 + h3標題高 + 內距
        		$(".tabItemH").find('span').text(_tabItem_HH);     		//前台動態顯示
        		$(".contentH").find('span').text(_tabConten_HH);   	//前台動態顯示
        		$('.totalH').find('span').text(_total_HH);         				//前台動態顯示
        		$('.tabLink').css('height', _total_HH);            					//把總高吐出來
     	}    
    });

    // parallax scrolling 視差滾動


    // search switch
    // $('.switch').click(function(){
    //     $(this).next('.form_grp').stop(true,false).slideToggle(300);
    // });

    // 搜尋  ------------------------------------------------------------------------------------------

    // $('.search').on({
    //     mouseenter: function() {
    //         $(this).find('.form_grp').stop(true, false).fadeIn();
    //     },
    //     mouseleave: function() {
    //         $(this).find('.form_grp').stop(true, false).fadeOut();
    //     }
    // });

    // 搜尋主按鈕 clicked，.form_grp可開啟關閉
    $('.search .switch').on('click',function(){
        $(this).next('.form_grp').stop(true, false).fadeToggle();
    });

    // .form_grp 內最後一個 input focusout 時，關閉 .form_grp
    $('.search .form_grp').find('input:last-child').focusout(function(){
        $('.search .form_grp').stop(true, false).fadeOut();
    });

    // 點空白處關閉
    // var _window = $(window),
    //     ww = _window.outerWidth(),
    //     wh = _window.height(),
    //     _body = $('body'),
    //     wwNormal = 1400,
    //     wwMedium = 992,
    //     wwSmall = 768,
    //     wwxs = 576;

    // if ( ww >= wwSmall) {
    //     $(document).click(function(event){
    //         var _swi = $('.search .switch'),
    //             _con = $('.search .form_grp');
    //         if(!_swi.is(event.target) && !_con.is(event.target) && _con.has(event.target).length === 0){
    //             //$('.search .form_grp').slideUp('slow');                            //滑動消失
    //             $('.search .form_grp').stop(true, false).fadeOut();        //淡出消失
    //         }
    //     });
    // }
    // $(document).click(function(event){
    //     var _swi = $('.search .switch'),
    //         _con = $('.search .form_grp');
    //     if(!_swi.is(event.target) && !_con.is(event.target) && _con.has(event.target).length === 0){
    //         //$('.search .form_grp').slideUp('slow');                            //滑動消失
    //         $('.search .form_grp').stop(true, false).fadeOut();        //淡出消失
    //     }
    // });

    // $(document).click(function(event){
    //     // 設定目標區域
    //     var _switch = $('.search .switch'),
    //         _searchGrp = $('.search .form_grp');
    //         _searchInput = $('.search .form_grp input');
            
    //     // 當 焦點 不在上述三個元件上的情況時，把 .form_grp 關掉
    //     if(!_switch.is(event.target) && !_searchGrp.is(event.target) && !_searchInput.is(event.target)){              
    //         $('.search .form_grp').fadeOut();     //淡出消失
    //     }
    // });

    // var _window = $(window),
    //     _ww = _window.outerWidth(),
    //     _wwMedium = 992,
    //     _switch = $('.search .switch'),
    //     _searchGrp = $('.search .form_grp');
    //     _searchInput = $('.search .form_grp input');

    // function search_machine(){
    //     if( _ww > _wwMedium ){
    //         // 當 焦點 不在上述三個元件上的情況時，把 .form_grp 關掉
    //         if(!_switch.is(event.target) && !_searchGrp.is(event.target) && !_searchInput.is(event.target)){              
    //             $('.search .form_grp').fadeOut();//淡出消失
    //         };
    //     };
    // }
    // search_machine();

    // $(document).ready(function(){
    //     $(window).resize(function() {
    //         var _window = $(window),
    //             _ww = _window.outerWidth(),
    //             _wwMedium = 992;

    //             if( _ww > _wwMedium ){
    //                 $('.search .switch').hide();
    //                 $('.search .form_grp').show();
    //             } 
    //     });
    // });

    // 搜尋  ------------------------------------------------------------------------------------------ END


    // 條件查詢
    $('.Conditional_query > .switch').click(function(){
        $(this).next('.form_grid').stop(true, false).slideToggle(function(){
            if ($(this).is(':visible')) {
                $(this).siblings('.btn').attr('value', '收合條件查詢');
            } else {
                $(this).siblings('.btn').attr('value', '顯示條件查詢');
            }
        });
    });

    // 開合選單
    // $('.elastic-box .btn').click(function(e){
    //     // alert('有');
    //     $(this).next('.content').stop(true,true).slideToggle(function(){
    //         if ($(this).is(':visible')) {
    //             $('.btn').attr('value', '收合選單');
    //         } else {
    //             $('.btn').attr('value', '展開選單');
    //         }
    //     });
    // });

    // 開合選單 - 一次全展
    $('.elastic-box').each(function(){
        var _elasticBox = $(this).find('input.btn');
        _elasticBox.each(function(){
            function gogo(e){
                $(this).next('.content').stop(true,true).slideToggle(function(){
                    if ($(this).is(':visible')) {
                        $(this).siblings('.btn').attr('value', '收合內容');
                    } else {
                        $(this).siblings('.btn').attr('value', '展開內容');
                    }
                });
                e.preventDefault();
            }
            $(this).click(gogo);
            $(this).keyup(gogo);
        });
    });

    // 開合選單 - 露出一點，一次全展
    // var _content = $(this).parent('.btn_grp').siblings('.content');

    $('.Half-cover input.btn').click(function(){
        // alert('有');
        if($(this).parents('.Half-cover').find('.content').hasClass('open')){
            $(this).parents('.Half-cover').find('.content').removeClass('open');
            $(this).attr('value', '展開更多內容');
        }else{
            $(this).parents('.Half-cover').find('.content').addClass('open');
            $(this).attr('value', '收合更多內容');
        }
        // $(this).parent('.btn_grp').siblings('.content').addClass('open');
    });
    
});














