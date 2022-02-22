/**
 *【WSもくもく】よくある質問
 */
$(function(){
  var dt = $('.qa__content dt');

  dt.on('click', function() {
    var ele = this;
    $(ele).toggleClass('open');
    $(ele).next().slideToggle();
  });
  
});
