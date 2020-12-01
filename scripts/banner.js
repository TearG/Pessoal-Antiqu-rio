$(function(){
	
	var slideAuto = setInterval(slideGo, 4000);

	$(".slide_nav_item.g").click(function(){
		clearInterval(slideAuto);
		slideGo();
	});

	$(".slide_nav_item.b").click(function(){
		clearInterval(slideAuto);
		slideBack();
	});
	
	$('.slide_pager span').click(function(){
		clearInterval(slideAuto);
		if(!$(this).hasClass('active')){
			var goto = $(this).attr('id');
			$('.slide_item.first').fadeOut(400, function(){
				$('.slide_item').fadeOut().removeClass('first');
				$('.slide_item:eq('+goto+')').fadeIn().addClass('first');
				slideMask();
			});
		}
	});


	function slideGo(){
		if($('.slide_item.first').next('.slide_item').size()){
			$('.slide_item.first').fadeOut(400, function(){
				$('.slide_item').fadeOut().removeClass('first');
				$(this).next().fadeIn().addClass('first');
				slideMask();
			});
		}else{
			$('.slide_item.first').fadeOut(400, function(){
				$('.slide_item').removeClass('first');
				$('.slide_item:eq(0)').fadeIn().addClass('first');
				slideMask();
			});
		}
	}

	function slideBack(){
		if($('.slide_item.first').index()>1){
			$('.slide_item.first').fadeOut(400, function(){
				$('.slide_item').fadeOut().removeClass('first');
				$(this).prev().fadeIn().addClass('first');
				slideMask();
			});
		}else{
			$('.slide_item.first').fadeOut(400, function(){
				$('.slide_item').removeClass('first');
				$('.slide_item:last-of-type').fadeIn().addClass('first');
				slideMask();
			});
		}
	}
	
	function slideMask(){
		var slideThis = $('.slide_item.first').index()-1;
		$('.slide_pager span').removeClass('active');
		$('.slide_pager span:eq('+slideThis+')').addClass('active');
	}
});