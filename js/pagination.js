/**
 * 【WSもくもく】もくもく会一覧
 */
$(function(){
  var $items = $('.events__inner .item');
  var num = Math.ceil($items.length / 6);
  console.log(num);

  // ページネーション作成
  var $pn = $('.events__pages');
  for(var i = 1,l= num; i <= l; i++) {
    var li = '<li><a>' + i + '</a></li>';
    $pn.append(li);
  };

  // 各記事のリンクが何ページ目の記事かを判別できるようにする
  // eqメソッドを使う
  for(var i = 0,l = $items.length;i < l;i++) {
    var page = Math.ceil((i + 1) / 6);
    $items.eq(i).addClass('page-' + page);
  }

  // 9. ボタンをクリックすると記事一覧の丈夫にスクロールして戻る
  var firstClick = false;

  // クリックイベントを登録
  $('.events__pages li').on('click', function() {
    $('.events__pages li.active').removeClass('active');
    $(this).addClass('active');

    // ボタンをクリックするとそのページの記事リンクのみが表示されるようになる
    var page = $('.events__pages li').index(this);
    page ++;
    $items.removeClass('active');
    $('.events__inner').find('.page-' + page).addClass('active');
  });

  // 9. ボタンをクリックすると記事一覧の上部にスクロールして戻る
  if(firstClick === true) {
    var pos = $('.events__inner').offset().top - $('header').innerHeight();
    $('html, body').animate({scrollTop}, 300, 'swing');
  }

  //9. ボタンをクリックすると記事一覧の上部にスクロールして戻る
  firstClick = true;

  $('.events__pages li:first-child').click();
});
