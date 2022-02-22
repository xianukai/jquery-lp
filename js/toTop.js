/**
 * 【WSもくもく】トップにスクロールで戻るボタン
 */
$(function(){
  var h = $(window).height();
  $(window).on('scroll', function() {
    // scrollTop のメソッドで現在のscroll量が表示されるようになる
    // これの応用で、スクロール時にヘッダーの表示を変更させることなどできる
    var s = $(window).scrollTop();
    if(h/2 < s) {
      $('.btnTop').addClass('active');
    } else {
      $('.btnTop').removeClass('active');
    }
  })

  $('.btnTop').on('click', function() {
    // scrollTopを500ミリ秒かけて0にする（スクロールを戻す）
    $('html, body').animate({scrollTop: 0}, 500, 'swing')
  })
});



