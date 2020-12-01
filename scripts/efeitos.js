//function anima_categorias(){
//    
//    $(".categorias:eq(0)").addClass("animated fadeInDown")
//            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//                $(".categorias:eq(1)").addClass("animated fadeInDown").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
//                    $(".categorias:eq(2)").addClass("animated fadeInDown").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//						$(".categorias:eq(3)").addClass("animated fadeInDown").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
//                            $(".categorias:eq(4)").addClass("animated fadeInDown").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//								$(".categorias:eq(5)").addClass("animated fadeInDown").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
//                                    $(".categorias:eq(6)").addClass("animated fadeInDown").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
//                                        $(".categorias:eq(7)").addClass("animated fadeInDown");
//						});
//                    });
//                }) ;
//            });
//		});
//	});
//});
//};

function irPara(elemento, velocidade){
    var href = elemento.attr('href');
    var top = $(href).offset().top;

    $("html,body").animate({scrollTop:top}, velocidade, function(){
    	
    	
    });
    
}

$(function(){
	
  $("#header").addClass("animated bounceInDown");
  $("#voltar").css("display","none");
	$("#voltar").click(function(){
		$("html,body").animate({scrollTop:0}, 500);
	});
	
	/*$(".menu a").click(function(e){
		e.preventDefault();
		irPara($(this), 500);
	});*/
		
  /* ESCONDENDO OS ITENS QUE SERÃO ANIMADOS*/
  
  $('.banner').addClass("esconder");
  $('.categorias').addClass("esconder");
  $('.banner2').addClass("esconder");
 

  /* EXIBINDO OS ITENS AO ROLAR A PÁGINA*/	
  $(window).scroll(function(){
		var topo = $(window).scrollTop();
        
      /* EXIBINDO OS ITENS QUE FORAM OCULTOS */
        if(topo <= 100){
            $("#voltar").css("display","none");
        }else{
            $("#voltar").css("display","block");
        }

    	
	});


});





