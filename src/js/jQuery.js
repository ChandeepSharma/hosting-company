$(document).ready(function(){
    $("#toggleBtn").click(function(){
        $("#toggleBtn").hide();
        $("#closeBtn").show();
        $("nav .col-span-12").toggle("2000");
    })
    $("#closeBtn").click(function(){
        $("#toggleBtn").show();
        $("#closeBtn").hide();
        $("nav .col-span-12").toggle("2000");
    })
    $("#asideBarBtn").click(function(){
        $("aside").hide("500");
        $("main").addClass("mx-auto")
        $("#asideBarBtnMain").show("500")
    })
    $("#asideBarBtnMain").click(function(){
        $("aside").show("500");
        // $("main").removeClass("mx-auto")
        $(this).hide("500");


    })
})