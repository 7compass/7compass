var SevenCompass={};SevenCompass.attachLearnMore=function(){$(".learn-more").on("click",function(o){o.preventDefault(),$(o.target).parent(".product").find(".detail").toggle(),$(o.target).parent(".product").find(".detail-long").toggle()})},SevenCompass.attachContactModal=function(){$("#start-project-confirm").on("click",function(){var o=$("#contact-form");o.submit(),$("#start-project-modal").modal("hide"),$("#thank-you-modal").modal("show")})},SevenCompass.attachBillingModal=function(){$("#billing-question-confirm").on("click",function(){var o=$("#billing-contact-form");o.submit(),$("#billing-question-modal").modal("hide"),$("#billing-thank-you-modal").modal("show")})},SevenCompass.setupSmoothScroll=function(){$(".scroll").click(function(o){o.preventDefault(),$("html,body").animate({scrollTop:$(this.hash).offset().top},500)})};