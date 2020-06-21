$(function(){
    $("a").click(function(){
        $("a").removeClass("selected");
        $(this).addClass("selected");
    });
        
    $.fn.scrollView=function(){
        topElem=$(this).offset().top;
            $("html,body").animate({scrollTop:topElem},500);        
    }; 
    
    function ativa(id){
        $("header nav a").removeClass("selected");
        $(id).addClass("selected");
    }
        
    $("#aHome").on("click", function(){
            $("#Home").scrollView();
            ativa(this);
    });
    
    $("#aIntegrantes").on("click", function(){
            $("#Integrantes").scrollView();
            ativa(this);
    });
    
    $("#aDepoimentos").on("click", function(){
            $("#Depoimentos").scrollView();
            ativa(this);
    });
    
    $("#aContato").on("click", function(){
            $("#Contato").scrollView();
            ativa(this);
    });
    
    $(window).on("scroll",function(){
        posDoc=$(document).scrollTop();
        posHome=$("#Home").offset().top-100;
        posIntegrantes=$("#Integrantes").offset().top-100;
        posDepoimentos=$("#Depoimentos").offset().top-100;
        posContato=$("#Contato").offset().top-100;
        
        console.log(posDoc+"/"+posIntegrantes);
        
        if(posDoc>=posContato){
            ativa("#Contato");
        }
        else if (posDoc>=posDepoimentos){
            ativa("#aDepoimentos");
           
        } 
        else if (posDoc>=posIntegrantes){
            ativa("#aIntegrantes");
        } 
        else{
            ativa("#aHome");
        }
    });
    
    $(window).on("scroll",function(){
        posDoc=$(document).scrollTop();
        posMedia=posDoc+$(window).height()/2;
        posImg=$("#html5").offset().top-60;
        if (posMedia>=posImg)
            $("#html5").addClass("entrada");  
    });
     
});
  
   
 
