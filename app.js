function calcAge() {
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);

  let date = new Date();
  let currentDay = date.getDate();
  let currentMonth = 1 + date.getMonth();
  let cuurentYear = date.getFullYear();
  let monthes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (day <= 31 && month <= 12 && year < cuurentYear) {
    if (day > currentDay) {
      currentDay += monthes[currentMonth - 1];
      currentMonth -= 1;
    }
    if (month > currentMonth) {
      currentMonth += 12;
      cuurentYear -= 1;
    }
    let calcDay = currentDay - day;
    let calcMonth = currentMonth - month;
    let calcYear = cuurentYear - year;
    document.getElementById(
      "out-put"
    ).innerHTML = `Your Age is ${calcYear} Years ${calcMonth} Monthes And ${calcDay} Days`;
  } else {
    document.getElementById("out-put").innerHTML = `You Entered invalid date`;
  }
}
