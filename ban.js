$(document).ready(function(){
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function(){ open(); });
  btn_open.click(function(){ open(); });
  btn_reset.click(function(){ close(); });

  function open(){
    envelope.addClass("open").removeClass("close");
    // Хэрэв текстийг динамикаар өөрчлөх бол:
    $(".line1").text("From: X");
    $(".line2").text("Dear Nomun-Ujin 💖");
    $(".line3").text("Төрсөн өдрийн мэнд хүргэе! 🎉");
  }

  function close(){
    envelope.addClass("close").removeClass("open");
  }
});
