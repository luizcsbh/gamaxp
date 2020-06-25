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
    
    
    $(window).on("scroll",function(){
        posDoc=$(document).scrollTop();
        posHome=$("#Home").offset().top-100;
        posIntegrantes=$("#Integrantes").offset().top-100;
        
        console.log(posDoc+"/"+posIntegrantes);
    });
});