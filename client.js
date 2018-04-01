$(() => {
  $('#main-nav').prop('hidden', true);

  $('#hamburger-button').click(() => {
    if($('#main-nav').prop('hidden')) {
      $('#main-nav').prop('hidden', false);
    } else {
      $('#main-nav').prop('hidden', true);
    }
  });

  $('.main-nav-link').click(() => {
    $('#main-nav').prop('hidden', true);
  });

  $('.project').click(e => {
    if ($(e.currentTarget).hasClass('project-open')) {
      $(e.currentTarget).removeClass('project-open');
      $(e.currentTarget).siblings().removeClass('project-open');
      $(e.currentTarget).children('img').toggle();
      $(e.currentTarget).children('.project-down-arrow').toggleClass('fa-rotate-180');
      $(e.currentTarget).children('nav').toggle();
    } else {
      $(e.currentTarget).addClass('project-open');
      $(e.currentTarget).siblings('.project-open').children('img').toggle();
      $(e.currentTarget).siblings('.project-open').children('nav').toggle();
      $(e.currentTarget).siblings('.project-open').children('.project-down-arrow').toggleClass('fa-rotate-180');
      $(e.currentTarget).siblings().removeClass('project-open');
      $(e.currentTarget).children('img').toggle();
      $(e.currentTarget).children('.project-down-arrow').toggleClass('fa-rotate-180');
      $(e.currentTarget).children('nav').toggle();
    }
  });
  // USING VELOCITY FOR SMOOTH SCROLLING
  //target any href that starts with a #
  //because that's a link to elsewhere on the page
  $('a[href^="#"]').click(e => {
  // set target to anchor's "href" attribute
    const target = $(e.target).attr('href');
    // console.log(target);
  // scroll to each target
    $(target).velocity('scroll', {
      duration: 500,
      offset: -40,
      easing: 'ease-in-out'
    }).focus();
  });
});
