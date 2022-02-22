/**
 * 【WSもくもく】お知らせ
 */
$(function(){
  $.ajax({
    url: "./data1.json",
    dataType: "json"
  })
  .done(function(json){

    var idx = 0; // idxはindexの略の意味でよく使われる
    var $info = $(".info__list .item");
    $info.find("time").text(json[idx].date);
    $info.find("p").text(json[idx].value);

    $info.css('transition', 'opacity 500ms');

    setInterval(function(){
      if(idx === json.length - 1) {
        idx = 0;
      } else {
        // idx = idx + 1;
        idx++;
      }

      $info.css('opacity', 0);

      setTimeout(function() {
        $info.find("time").text(json[idx].date);
      $info.find("p").text(json[idx].value);
        $info.css('opacity', 1);
      }, 500);

    },5000)

  });


});