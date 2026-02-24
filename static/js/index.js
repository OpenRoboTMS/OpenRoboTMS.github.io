window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
  // Options for image carousels (auto-advances on a timer)
  var defaultOptions = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Options for video carousels (no timer — advances when video ends)
  var videoOptions = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: false,
    autoplay: false,
  };

  // Attach carousels with appropriate options
  document.querySelectorAll('.carousel').forEach(function(el) {
    var hasVideo = el.querySelector('video') !== null;
    var opts = hasVideo ? videoOptions : defaultOptions;
    var instances = bulmaCarousel.attach(el, opts);
    var carousel = instances[0];

    if (hasVideo && carousel) {
      // carousel.slides are the .slider-item wrappers created by bulma-carousel
      var slides = carousel.slides;

      function pauseAllVideos() {
        slides.forEach(function(slide) {
          var v = slide.querySelector('video');
          if (v) {
            v.pause();
            v.currentTime = 0;
          }
        });
      }

      function playVideoAtIndex(idx) {
        pauseAllVideos();
        var realIdx = ((idx % slides.length) + slides.length) % slides.length;
        var slide = slides[realIdx];
        if (slide) {
          var video = slide.querySelector('video');
          if (video) {
            video.currentTime = 0;
            var playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(function() {
                // Autoplay blocked by browser — user can use controls
              });
            }
          }
        }
      }

      // Listen for slide change
      carousel.on('after:show', function(state) {
        playVideoAtIndex(state.next !== undefined ? state.next : state.index);
      });

      // When any video ends, go to next slide
      slides.forEach(function(slide) {
        var video = slide.querySelector('video');
        if (video) {
          video.addEventListener('ended', function() {
            carousel.next();
          });
        }
      });

      // Play first video on load
      playVideoAtIndex(0);
    }
  });

  bulmaSlider.attach();
})
