import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DayCalculator } from './day-calculator';
/* eslint-disable no-unused-vars */
$(document).ready(function() {
  $("form#dayForm").submit(function(event) {
    event.preventDefault();
    let dayString = $("#day").val().toString();
    let dayArray = dayString.split("-");
    
    let inputDate = new DayCalculator.prototype.constructor(dayArray);
    let dayName = inputDate.getDayName();
  });
});
