$( ".part" ).click(function() {
  var coaxial = $(this).text(),chat=$("#chat"),here=$(this);
  if(coaxial=="-"){
    here.html("+");
    chat.animate({
      opacity: 0.50,
      bottom: "-314px"
    }, 1000);

  }
})
