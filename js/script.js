$(function() {

	$('.anchor a[href^=#]').click(function(e) {
		var anchorLink = $(this).attr('href');
		if (anchorLink != '#') {
			var offTop = $(anchorLink).offset().top - 60;
			$('body, html').stop().animate({scrollTop:offTop}, 500);
		}
		return false;
	});

	/* --------------------
	// fixed pageTop and Header
	---------------------*/
	var showFlag = false;
	var topBtn = $('.pageTop a');
	topBtn.css('bottom', '-60px');
	var showFlag = false;
	$(window).scroll(function () {
		if ($(this).scrollTop() > 140) {
			if (showFlag == false) {
				showFlag = true;
				topBtn.stop().animate({'bottom' : '40px'}, 300);
			}
		} else {
			if (showFlag) {
				showFlag = false;
				topBtn.stop().animate({'bottom' : '-60px'}, 300);
			}
		}
		if ($(this).scrollTop() > 0 ){
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});
	$('.pageTop a').click(function(event) {
		$('body, html').stop().animate({scrollTop:0}, 500);
		return false;
	});
	/* --------------------
	// open menu on SP
	---------------------*/
	$('#menuToggle').click(function(event) {
		$(this).toggleClass('active');
		$('#navi, #wrapper, .overlay01, .openCart, #menuToggle a, .wrapSearchSp').toggleClass('slideLeft');
		return false;
	});
	$('.overlay01').click(function(event) {
		$('#menuToggle').trigger('click');
	});

	/* --------------------
	// open tab
	---------------------*/
	$(".tabArea .tab a").click(function() {
		var elm = $(this),
			parent = elm.parent("li");
		if (!parent.hasClass("active"))
		{
			parent.siblings().removeClass("active");
			parent.addClass("active");
			elm.parents(".tab").next().children(".tabBox").hide();
			$(this.hash).fadeIn(500);
		}
		return false;
	});

	/* --------------------
	// fixHeight for products list
	---------------------*/
	$('.productList li, .gameList li').matchHeight();

	/* --------------------
	// hover
	---------------------*/
	$('.imgover img').each(function(){
		this.osrc = $(this).attr('src');
		this.rollover = new Image();
		this.rollover.src = this.osrc.replace(/(\.gif|\.jpg|\.png)/, "_h$1");
		$(this).parent().css({backgroundImage : 'url(' + this.rollover.src + ')'});
	});
	$('.imgover img').hover(function(){
			$(this).stop().fadeTo('300', 1);
	},function(){
			$(this).stop().fadeTo('300', 0);
	});

	/* --------------------
	// filter products
	---------------------*/
	$('.subTab li > a').click(function(event) {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	
	$(".btnFilter").click(function(){
		var value = $(this).attr('data-filter');
		if(value == "all") {
			$('.filter').show('slow');
		} else {
			$('.filter').not('.'+value+'').hide('slow');
			$('.filter.'+value+'').show('slow');
		}
		$('#customArea').slideUp();
		return false;
	});

	/* --------------------
	// open Custom box
	---------------------*/
	$('.btnCustom').click(function(event) {
		$('#customArea').slideDown('slow');
		$("#wrapStep").carouFredSel({
			auto		: false,
			responsive	: true,
			prev		: "#wrapStep .btnPrev",
			next		: "#wrapStep .btnNext",
			scroll		: {
				items	: 1
			},
			items: {
				visible	: 1,
				minimum	: 1
			}
		});
		
		return false;
	});
	$('#wrapStep .btnNext').click(function() {
		$('.stepList li.result').addClass('active');
	});
	$('#wrapStep .btnPrev').click(function() {
		$('.stepList li.result').removeClass('active');
	});
	$('.btnClose').click(function(event) {
		$('#customArea').slideUp();
		$('.btnFilter.all').trigger('click');
		return false;
	});

	/* --------------------
	// button plus/minus
	---------------------*/
	$('.btnMinus').click(function(event) {
		var value = parseInt($(this).next('input').val());
		if (value > 1) {
			$(this).next('input').val(value - 1);
		}
	});
	$('.btnPlus').click(function(event) {
		var value = parseInt($(this).prev('input').val());
		$(this).prev('input').val(value + 1);
	});
	/* --------------------
	// open search box on SP
	---------------------*/
	$('.wrapSearchSp a').click(function(event) {
		$(this).next('.popup').toggleClass('show');
		return false;
	});

	/* --------------------
	// open cart
	---------------------*/
	$('.openCart').click(function(event) {
		$('#shoppingBag, .overlay02').addClass('show');
		$('body').addClass('fixed');
	});
	$('#shoppingBag .close').click(function(event) {
		$('#shoppingBag, .overlay02').removeClass('show');
		$('body').removeClass('fixed');
	});
	$('.overlay02').click(function(event) {
		$('#shoppingBag .close').trigger('click');
	});

	$('.btnCloseCanvas').click(function(event) {
		$('#shoppingBag, .overlay02').removeClass('show');
		$('body').removeClass('fixed');
	});

	/* --------------------
	// open profile on SP
	---------------------*/
	$('.openUser').click(function(event) {
		$(this).next('.popup').toggleClass('show');
	});
	/* --------------------
	// open btnExpand box
	---------------------*/
	$('.btnExpand').click(function(event) {
		$('#expandArea').slideDown('slow');
		
		
		return false;
	});
	
	$('.btnClose').click(function(event) {
		$('#expandArea').slideUp();
		
		return false;
	});

	/* --------------------
	// open btnExpand boxPW 
	---------------------*/
	$('.btnExpandPW ').click(function(event) {
		$('#expandAreaPW').slideDown('slow');
		
		
		return false;
	});
	
	$('.btnClosePW').click(function(event) {
		$('#expandAreaPW').slideUp();
		
		return false;
	});

	/* --------------------
	// btnBuy 
	---------------------*/
	$('.btnBuy').click(function(event) {
		return false;
	});
	/* --------------------
	// btnDel item in cart 
	---------------------*/
	$('.btnDel').click(function(event) {
		var itemCart = $(this).parents('li');
		itemCart.slideUp(300);
		setTimeout(function(){
			itemCart.remove();
		}, 400);
		return false;
	});

});