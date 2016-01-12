function getValueFromBtctrade() {
  url = 'getlistfrombtctrade.php';
  $.ajax({
    type: 'GET',
    url: url,
    success: function(msg) {
      console.log(msg);
    }
  });
}

function getValueFromExmo() {
  url = 'getlistfromexmo.php';
  $.ajax({
    type: 'GET',
    url: url,
    success: function(msg) {
      console.log(msg);
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
