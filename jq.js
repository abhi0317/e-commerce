
$(document).ready(function(){
    $("#pass").blur
    (function(){
        i=$("#pass").val()
        j=i.length
         if(j<5){
            $("#span").text("password is week")
            $("#span").css("color","red")
         }
         else if(j>5){
            $("#span").text("password is strong")
            $("#span").css("color","green")

         }

    })
  
})
name1=document.f1.name.value