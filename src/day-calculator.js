// function Date (userDate, todayDate){
//   userDate = ["", "", ""];
//   todayDate = ["", "", ""];
// };

/* eslint-disable no-unused-vars */
export class DayCalculator {
  constructor(input) {
    this.checkDateArray = input;
    this.year = parseInt(input[0]);
    this.month = parseInt(input[1]) - 1;
    this.day = parseInt(input[2]);
  }

  getDayName() {
    const dayNameArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let today = new Date();
    let todayMonth = today.getMonth();
    let todayDay = today.getDate();
    let todayYear = today.getFullYear();
    let todayDayIndex = today.getDay();

    let totalYearDays = (this.year - todayYear) * 365;

    let totalMonthDays = (this.getDaysinMonths(this.month, this.year) + this.day) - (this.getDaysinMonths(todayMonth, todayYear) + todayDay);
    // let totalDiffDays = this.day - todayDay;

    let totalDays = totalYearDays + totalMonthDays;
    if (this.year < todayYear) {
      totalDays -= this.countLeapYears(this.year, this.month, this.day, todayYear, todayMonth, todayDay);
    } else {
      totalDays += this.countLeapYears(this.year, this.month, this.day, todayYear, todayMonth, todayDay);
    }

    let difference = totalDays % 7;
    let dayIndex = todayDayIndex;
    for (let i = 0; i < Math.abs(difference); i++) {
      dayIndex = dayIndex + (difference / Math.abs(difference));
      if (dayIndex > 6) {
        dayIndex = 0;
      } else if (dayIndex < 0) {
        dayIndex = 6;
      }
    }

    let dayName = dayNameArray[dayIndex];

    return dayName;
  }

  checkLeapYear(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }

  countLeapYears(yearOne, monthOne, dayOne, yearTwo, monthTwo, dayTwo) {
    let startYear = 0;
    let startMonth = 0;
    let startDay = 0;
    let finalYear = 0;
    let finalMonth = 0;
    let finalDay = 0;
    if (yearOne < yearTwo) {
      startYear = yearOne;
      startMonth = monthOne;
      startDay = dayOne;
      finalYear = yearTwo;
      finalMonth = monthTwo;
      finalDay = dayTwo;
    } else if (yearTwo < yearOne) {
      startYear = yearTwo;
      startMonth = monthTwo;
      startDay = dayTwo;
      finalYear = yearOne;
      finalMonth = monthOne;
      finalDay = dayOne;
    } else {
      return 0;
    }
    
    let count = 0;

    for (let i = startYear; i <= finalYear; i++) {
      if (this.checkLeapYear(i)) {
        count++;
      }
    }

    if (this.checkLeapYear(startYear) && (startMonth > 1)) {
      count--;
    }

    if (this.checkLeapYear(finalYear) && ((finalMonth === 1 && finalDay <= 29) || finalMonth < 1)) {
      count--;
    }
    return count;
  }

  getDaysinMonths(month, year) {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalMonthDays = 0;
    for (let i = 0; i < month; i++)
    {
      totalMonthDays += monthDays[i]; 
    }
    return totalMonthDays;
  }
}