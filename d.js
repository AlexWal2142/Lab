 $( document ).ready(function() {
        $("#area").hover(function() {
        alert("hello")
        $("#area").css("background-color", "green")
        })
     $("#reset").click(function(){
         $("#area").css("background-color", "#953674")
     });
    });