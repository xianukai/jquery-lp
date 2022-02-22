/**
 * 【WSもくもく】ハンバーガーメニュー
 */

$(function(){
  var time = 300;
  var $btn = $('.burger__btn');
  $btn.css('transition', 'background-color' + time + 'ms');
  $btn.find('span').css({
    transition: 'transform' + time + 'ms'
  });
  $btn.on('click', function() {
    $('.burger__modal').fadeToggle();
    $(this).toggleClass('open');
  })

  $('.burger__modal__menu li a').on('click', function() {
    // 三本線のボタンを押したのと同じ状態にする
    $btn.click();

    var speed = 500;
    var href = $(this).attr('href');
    var position = $(href).offset().top - $('header').innerHeight();
    $('html, body').animate({scrollTop: position}, speed, 'swing');
  });

  // ３本線にアニメーションをつける

});

