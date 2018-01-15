'use strict';
$(document).on('pageInit', '#page-mine', function (e, id, page) {
  // $('.j-show-info').each(function () {
  //   $(this).click(function () {
  //     var show_obj = $(this).data('show-obj');
  //     var close_obj = $(this).siblings('.j-show-info').data('show-obj');
  //     $(show_obj).show();
  //     $(close_obj).hide();
  //   });
  // });

});
$(document).on('pageInit', '#page-media-info', function (e, id, page) {
  $('.j-red_click').click(function () {
    $('.j-plate_red').show();
  });
  $('.j-close').on('click', function () {
    var close_obj = $(this).data('close-obj');
    $(close_obj).hide();
  });
  $('.j-share_click').click(function () {
    $('.j-plate_share').show();
  });
  $('.j-plate_share').click(function () {
    $('.j-plate_share').hide();
  });
});
$(document).on('pageInit', '#page-media', function (e, id, page) {
  $('.j-link').each(function () {
    $(this).click(function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });
  });
});
$(document).on('pageInit', '#page-applyInvest', function (e, id, page) {
  $('.j-checkbox').click(function(){
    if($(this).hasClass('nocheck')){
      $(this).removeClass('nocheck');
    }else{
       $(this).addClass('nocheck');
    }
  });
  $('.j-close').on('click', function () {
    var close_obj = $(this).data('close-obj');
    $(close_obj).hide();
  });
  $('.j-xieyi').on('click', function () {
    $('.j-plate_rule').show();
  });
  $('.j-celue').on('click', function () {
    $('.j-plate_celue').show();
  });
});
$(document).on('pageInit', '#page-applyEnter', function (e, id, page) {
  $('.j-checkbox').each(function(){
    $(this).click(function(){
    if($(this).children('.j-check').hasClass('nocheck')){
      $(this).children('.j-check').removeClass('nocheck');
      $(this).siblings().children('.j-check').addClass('nocheck');
    }
  });
});
$('.j-upload').click(function(){
  $('.j-getUpload').trigger('click');
});
});
$(document).on('pageInit', '#page-strategy', function (e, id, page) {
  $('.j-close').on('click', function () {
    var close_obj = $(this).data('close-obj');
    $(close_obj).hide();
  });
  $('.j-xieyi').on('click', function () {
    $('.j-plate_rule').show();
  });
  $('.j-celue').on('click', function () {
    $('.j-plate_celue').show();
  });
});
