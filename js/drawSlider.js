  $(function() {
      $("#slider").slider({
          min: 2729,
          max: 2737,
          step: 0.01,
          start: function(event, ui) {
              console.log('start');
          },
          stop: function(event, ui) {
              console.log('stop');
              console.log(ui.value);
          },
          slide: function(event, ui) {

          }
      });

  });

function getSliderValue() {
    var value = $(".selector").slider("option", "value");
    console.log(value);
}

function rb1b2ud2d1r() {
    r = 2000;
    
}
