var $star_rating = $('.star-rating .fa'),
    $stylist_rating = $('.stylist-rating .fa'),
    $made_rating = $('.made-rating .fa'),
    $menu = $('.fas.fa-bars'),
    $search = $('.fas.fa-search');

var SetRatingStar = function() {
  return $star_rating.each(function() {
    if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$star_rating.on('click', function() {
  $star_rating.siblings('input.rating-value').val($(this).data('rating'));
  return SetRatingStar();
});

var SetStylistRatingStar = function() {
  return  $stylist_rating.each(function() {
    if (parseInt( $stylist_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$stylist_rating.on('click', function() {
  $stylist_rating.siblings('input.rating-value').val($(this).data('rating'));
  return SetStylistRatingStar();
});

var SetMadeRatingStar = function() {
  return   $made_rating.each(function() {
    if (parseInt(  $made_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

$made_rating.on('click', function() {
  $made_rating.siblings('input.rating-value').val($(this).data('rating'));
  return SetMadeRatingStar();
});

function menu(){
  $('#menu').on('click', function() {
      $('.menu').slideToggle(500, function(){
          if( $(this).css('display') === "none"){
              $(this).removeAttr('style');
          }
      });
  });
};

var searchFlag = false;
$search.on('click', function(event) {
  event.preventDefault();
  $('[name="search"]').focus();

  let $input = $('[placeholder="Искать здесь..."]', $(this).parent());
  console.log($input);
  if (searchFlag) {
    searchFlag = false;
    $input.css({'width': 0, 'border-bottom': 2 + 'px solid transparent'});
  } else {
    searchFlag = true;
    $input.css({'width': 300 + 'px', 'border-bottom': 2 + 'px solid black'});
  }
})

var menuFlag = true;
$menu.on('click', function(event) {
  event.preventDefault();
  
  if (menuFlag) {
    menuFlag = false;
    $('.menu').fadeOut();
  } else {
    menuFlag = true;
    $('.menu').fadeIn();
  }
});

var $modalAddTask = $('#modalAddTask'),
    $formAddTask = $('#formAddTask'),
    $formSearch = $('#formSearch');

$modalAddTask.on('shown.bs.modal', function() {
  console.log(this)
  $('[name="name"]', $formAddTask).focus();
});

$formAddTask.on('submit', function(event) {
  event.preventDefault();

  let question = {
    name: $('[name="name"]', this).val(),
    email: $('[name="email"]', this).val(),
    description: $('[name="description"]', this).val()
  }

  if(!question.name && !question.email && !question.description) {
    $modalAddTask.modal('hide');
    return;
  };

  $modalAddTask.modal('hide');

  this.submit();
  this.reset();
});

$formSearch.on('submit', function(event) {
  event.preventDefault();
  if( !$('[name="search"]', this).val() ) {
    return;
  };
  this.submit();
})

$('#grey').on('click', function(event) {
  event.preventDefault();
  let $parent = $(this).parent(),
      $image = $('img', $parent);
  
  $('<img>').attr('src', 'images/item4.png').addClass('shirt').prependTo($parent);
  $image.remove();
})

$('#burgundy').on('click', function(event) {
  event.preventDefault();
  let $parent = $(this).parent(),
      $image = $('img', $parent);
  
  $('<img>').attr('src', 'images/item5.png').addClass('shirt').prependTo($parent);
  $image.remove();
})

$('#blue').on('click', function(event) {
  event.preventDefault();
  let $parent = $(this).parent(),
      $image = $('img', $parent);
  
  $('<img>').attr('src', 'images/item1.png').addClass('shirt').prependTo($parent);
  $image.remove();
})

$('body').on('click', 'button.play', function(event) {
  console.log(this)
})

$(document).ready(function() {
  menu();
  SetRatingStar();
  SetStylistRatingStar();
  SetMadeRatingStar();
  $('.slider1').slick({
    dots: true,
    prevArrow: '<span class="icon-arrow-left2"></span>',
    nextArrow: '<span class="icon-arrow-right2"></span>'
  });
  $('.slider2').slick({
    prevArrow: '<span class="icon-arrow-left2 black"></span>',
    nextArrow: '<span class="icon-arrow-right2 black"></span>'
  });
  $('.slider3').slick({
    prevArrow: '<span class="icon-arrow-left2 black"></span>',
    nextArrow: '<span class="icon-arrow-right2 black"></span>',
    autoplay: true,
    autoplaySpeed: 2500
  });
  $('.slider4').slick({
    prevArrow: '<span class="icon-arrow-left2 black"></span>',
    nextArrow: '<span class="icon-arrow-right2 black"></span>',
    autoplay: true,
    autoplaySpeed: 3000
  });
});