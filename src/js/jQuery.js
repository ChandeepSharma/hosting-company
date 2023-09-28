$(document).ready(function(){
    $("#toggleBtn").click(function(){
        $("nav .col-span-12").toggle(function(){
            $("nav .col-span-12").removeClass("hidden");
        });
    })
})