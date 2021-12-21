$(document).ready(function() {

  $('[name="country"]').on('change', function () {
    var geoKey = $(this).find('option:selected').val();
    var data = $jsonData.prices[geoKey];
    var price = data.price;
    var oldPrice = data.old_price;
    var currency = data.currency;
    $("[value = " + geoKey + "]").attr("selected", true).siblings().attr('selected', false);

    $('.price_land_s1').text(price);
    $('.price_land_s2').text(oldPrice);
    $('.price_land_curr').text(currency);
  });
  /* lazy load */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  });

  AOS.init();
    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

  $(".tovarimg").slick({
    dots: false,
    infinite: true
  })

  $(".rew-js").slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });

  let $page = $("html, body");
  $('a[href*="#"]').click(function() {
    let id = $(this).attr("href");
    if ($("div").is(id) || $("section").is(id)) {
      $page.animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top
        },
        600
      );
    }
    return false;
  });

  $('a.open-popup').click(function(){
    orderCode = $(this).closest('.tovar_item').find('.art').text();

    $(".popup-w").fadeIn(500);
    $("body").append("<div id='overlay'></div>");
    $('#overlay').show().css('opacity','0.8');
    $(".card-order").find('.card-order__code').text(orderCode);
    $(".card-order input[name='dop_params[articul]']").val(orderCode);
    $('.card-order__close, #overlay').click(function () {
          $('.popup-w').fadeOut(100);
          $('#overlay').remove();
          return false;
      });
          $('.popup-w').click(function(e){
          e.stopPropagation();
      });
      return false;
  });
  // 	//=========================================================скролл к якорю
});
