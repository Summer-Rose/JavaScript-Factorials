var factorial = function(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var inputNumber = parseInt($("input#number").val());
    var outputNumber = factorial(inputNumber);

    $(".inputNumber").text(inputNumber);
    $(".outputNumber").text(outputNumber);

    $("#result").show();
    event.preventDefault();
  });
});
