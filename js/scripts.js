$( ".part" ).click(function() {
  var coaxial = $(this).text(),chat=$("#chat"),here=$(this);
  if(coaxial=="-"){
    here.html("+");
    chat.animate({
      opacity: 0.50,
      bottom: "-314px"
    }, 1000);

  }else{
    here.html("-");
    chat.animate({
      opacity: 1,
      bottom: "0px"
    }, 1000);

  }

});


$('#txt').keydown(function (e){
    if(e.keyCode == 13){
      var here="<div class='o'><img align='right' src='url("../assets/ring.gif")' width='30px'> © Copyright 2017 - Stewart ilondanga",
          heres = $("#txt").val(),
          output = $('.message'),
          sil = "<div class='sil'></div>";

          $("#son").append("<div class='sen'>"+heres+sil+"</div>"+sil+here+sil+"</div>");


          output.scrollTop(
            output[0].scrollHeight - output.height()
          );

          $("#form")[0].reset();

    }

});
