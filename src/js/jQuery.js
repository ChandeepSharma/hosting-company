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
})