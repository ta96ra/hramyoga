$(function(){

  // スライドホバー
  $('#thumbnail img').on('mouseover', function(){
    let img_src = $(this).attr("src");
    if($('#main-img img').attr("src") != img_src) {
      $('#main-img img').fadeOut(500, function() {
        $("#main-img img").attr({src:img_src});
        $("#main-img img").fadeIn(500);
      })
    }
  });

  // #lessonのアコーディオン
  $('main #lesson .accordion .item').click(function(){
    var $detail = $(this).find('.detail');
    if($detail.hasClass('open')){
      $detail
        .removeClass('open')
        .slideUp();
      $(this).find('span').text('＋');  
    }else{
      $detail
        .addClass('open')
        .slideDown();
      $(this).find('span').text('ー')
    }
  })

  // #guests のお客様の声のスクロールフェード

  // var effectPos = 100;
  // var effectMove = 100;
  // var effectTime = 400;

  // $('#guests ul li').css({
  //   opacity:0,
  //   transform: 'translateY('+ effectMove + 'px )',
  //   transition: effectTime + 'ms'
  // });

  // $(window).on('scroll load',function(){
  //   var scrollTop = $(this).scrollTop();
  //   var scrollBtm = scrollTop + $(this).height();
  //   effectPos = scrollBtm - effectPos;

  //   $('#guests ul li').each(function(){
  //     var thisPos = $(this).offset().top;
  //     if(effectPos > thisPos){
  //       $(this).css({
  //         opacity: 1,
  //         transform: 'translateY(0)'
  //       });
  //     }
  //   });
  // });


  // ご予約はこちらから
  $('.form-reserve').click(function(){
    $('form').slideDown();
  });

  // 予約フォームを閉じる
  $('.close-form').click(function(){
    $('form').slideUp();
  });


  // フォームに自動入力
  $('.s-yoga').click(function(){
    var btnText = $(this).text();
    $('#yoga').val(btnText);
  });
  $('.s-inner').click(function(){
    var btnText = $(this).text();
    $('#inner').val(btnText);
  });
  $('.s-logy').click(function(){
    var btnText = $(this).text();
    $('#logy').val(btnText);
  });
  $('.s-number').click(function(){
    var btnText = $(this).text();
    $('#number').val(btnText);
  });
  $('.s-mat').click(function(){
    var btnText = $(this).text();
    $('#mat').val(btnText);
  });
  $('.s-coupon').click(function(){
    var btnText = $(this).text();
    $('#coupon').val(btnText);
  });



  // 月の場合、
    // コース選択削除、〜コースと入力、人数２、３、４名と表示、ヨガマットレンタル削除、回数券購入表示
  $('#mon').click(function(){
    $('.yoga-list')
      .slideUp();
    $('#yoga-corse')
      .text('コース：体を整えるヨガ')
      .css({
        'padding-bottom': '20px',
        'display': 'block'
      });
    $('.two,.many').slideDown();  
    $('.mat-rent').slideUp();
    $('.coupon').slideDown();
  });

  //水の場合、
    // コース選択削除、〜コースと入力、人数２、３、４名と表示、ヨガマットレンタル削除,回数券表示
  $('#web').click(function(){
    $('.yoga-list')
      .slideUp();
    $('#yoga-corse')
      .text('コース：ママと一緒に親子ヨガ')
      .css({
        'padding-bottom': '20px',
        'display': 'block'
      });
    $('.two,.many').slideDown();  
    $('.mat-rent').slideUp();
    $('.coupon').slideDown();
  });
  
  // 木の場合
     // コース選択表示、人数３、４、名の削除、ヨガマットレンタル表示、回数券削除
    $('#thu').click(function(){
    $('.yoga-list').slideDown();
    $('#yoga-corse').slideUp();
    $('.two').slideDown();
    $('.many').slideUp();  
    $('.mat-rent').slideDown();
    $('.coupon').slideUp();
  }); 

  // 金の場合
    // コース選択表示、人数２、３、４名の削除、ヨガマットレンタル削除、回数券削除
  $('#fri').click(function(){
    $('.yoga-list').slideDown();
    $('#yoga-corse').slideUp();
    $('.two,.many').slideUp();
    $('.mat-rent').slideUp();
    $('.coupon').slideUp();
  }); 

  // 数秘術の表示、非表示
  $('#inner-yes').click(function(){
    $('.number-li').slideDown();
  });
  $('#inner-no').click(function(){
    $('.number-li').slideUp();
  });
  
    // var dayText = $(this).text();
    // $('#mat').val(btnText);
  

});