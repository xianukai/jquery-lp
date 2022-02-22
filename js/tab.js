/**
 * 【WSもくもく】３つのテーマ
 */
$(function(){
    var $nav = $('.theme__nav li');
    $nav.on('click', function() {
      // 最初にremoveClassをしているのは、クリックされていないタブからactiveを外すため
      $nav.removeClass('active');
      $(this).addClass('active'); 
      
      var idx = $('.theme__nav li').index(this);
      console.log(idx);

      var $items = $('.theme__content .item');

      $items.each(function(i, item) {
        if(i === idx) {
            $(item).addClass('active');
            // setTimeout(function() {
            //   $(item).css('opacity', 1);
            // },1)

            $(item).animate({
                opacity: 1
            }, 500)
        } else {
            $(item).removeClass('active');
            $(item).css('opacity', 0);
        }
      })
    })
   // ページにアクセスした時にJSが開かれるようにする
    $('.theme__nav li:first-child').click();
});

