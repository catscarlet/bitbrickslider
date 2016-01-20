function getValueFromBtctrade() {
  url = 'getlistfrombtctrade.php';
  $.ajax({
    type: 'GET',
    url: url,
    success: function(msg) {
      valueFromBtctrade = JSON.parse(msg);
    }
  });
}

function getValueFromExmo() {
  url = 'getlistfromexmo.php';
  $.ajax({
    type: 'GET',
    url: url,
    success: function(msg) {
      valueFromExmo = JSON.parse(msg);
    }
  });
}

$(document).ready(function() {
  getValueFromBtctrade();
  getValueFromExmo();

  $('#btctrade').click(function() {
    console.log(valueFromBtctrade);
  });
  $('#exmo').click(function() {
    console.log(valueFromExmo);
  });

});
