
//= require jquery-2.0.2.min
//= require_tree .

var SevenCompass = {};

SevenCompass.attachLearnMore = function() {
  $('.learn-more').on('click', function(e) {
    e.preventDefault();
    $(e.target).parent(".product").find(".detail").toggle()
    $(e.target).parent(".product").find(".detail-long").toggle()
  });
};

SevenCompass.attachContactModal = function() {
  $('#start-project-confirm').on('click', function() {
    var form = $('#contact-form');
    form.submit();
    $("#start-project-modal").modal("hide");
    $("#thank-you-modal").modal("show");
  });
};
SevenCompass.attachBillingModal = function() {
  $('#billing-question-confirm').on('click', function() {
    var form = $('#billing-contact-form');
    form.submit();
    $("#billing-question-modal").modal("hide");
    $("#billing-thank-you-modal").modal("show");
  });
};
SevenCompass.setupSmoothScroll = function() {
  $(".scroll").click(function(e){   
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
};