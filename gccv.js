function getValueFromBtctrade() {
  url = 'getlistfrombtctrade.php';
  $.ajax({
    type: 'GET',
    url: url,
    success: function(msg) {
      var value = JSON.parse(msg);
      console.log(value);
    }
  });
}

function getValueFromExmo() {
  url = 'getlistfromexmo.php';
  $.ajax({
    type: 'GET',
    url: url,
    success: function(msg) {
      var value = JSON.parse(msg);
      console.log(value);
    }
  });
}

$(document).ready(function() {
  $('#btctrade').click(function() {
    getValueFromBtctrade();
  });
  $('#exmo').click(function() {
    getValueFromBtctrade();
  });

});
