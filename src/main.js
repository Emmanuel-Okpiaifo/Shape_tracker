import Triangle from "./triangle";
import './css/styles.css';

$(document).ready(function() {
    $('#triangle-checker-form').submit(function(event) {
      event.preventDefault();
      const length1 = $('#length1').val();
      const length2 = $('#length2').val();
      const length3 = $('#length3').val();
      const triangle = new Triangle(length1, length2, length3)
      const response = triangle.checkType();
      $('#response').append("<p>" + response + "</p>");
    });
  });