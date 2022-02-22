$(function() {
  var h = $(window).height();
  $(window).on('scroll', function() {
    // scrollTop のメソッドで現在のscroll量が表示されるようになる
    // これの応用で、スクロール時にヘッダーの表示を変更させることなどできる
    var s = $(window).scrollTop();
    if(h/2 < s) {
      $('#fixed__contents').addClass('active');
    } else {
      $('#fixed__contents').removeClass('active');
    }
  })
});