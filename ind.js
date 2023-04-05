
  function display(a){
document.getElementById("v").value+=a
  }
  function sym(s){
    n1=document.getElementById("v").value
    document.getElementById("v").value=""
    sy=s
  }
  function art(){
    n2=document.getElementById("v").value
    if(sy=='+'){
      ans=eval(n1)+eval(n2)
    }
    else if(sy=="-"){
      ans=eval(n1)-eval(n2)
    }
    else if(sy=="*"){
      ans=eval(n1)*eval(n2)
    }
    else if(sy=="/"){
      ans=eval(n1)/eval(n2)
    }
    else{
      ans="invalid operation"
    }
    document.getElementById("v").value=ans
  }

  $(document).ready(function(){
    $("p").click(function(){
      $(this).css('color','red')
    })
    $("#pp").click(function(){
      $('#pp').text("Hello")
    })
    $("#p1").dblclick(function(){
      $("#p1").hide()
    })
    // $("#p0").mouseenter(function(){
    //   alert("alert")
    // })
    // $("#p2").mouseleave(function(){
    //   alert("leaved")
    // })
    $("#p3").hover(
      function(){
      $("#p3").css('background-color','yellow')
      
    },
    function(){
      $("#p3").css('background-color','red')
    }
    )
  })