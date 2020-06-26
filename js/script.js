$(function(){

    $.fn.scrollView=function(){
        topElem=$(this).offset().top;
        $("html,body").animate({scrollTop:topElem},500); 
    };

    function ativa(id){
        $("header nav a").removeClass("selected");
        $(id).addClass("selected");
    }
    $("#aHome").on("click",function(){
        $("#home").scrollView();
        ativa(this);
    });
    $("#aIntegrantes").on("click",function(){
        $("#integrantes").scrollView();
        ativa(this);
    });

    $(window).on("scroll",function(){
        posDoc=$(document).scrollTop();
        posHome=$("#home").offset().top-60;
        posIntegrantes=$("#integrantes").offset().top-60;

        console.log(posDoc+"/"+posIntegrantes)
    });
});