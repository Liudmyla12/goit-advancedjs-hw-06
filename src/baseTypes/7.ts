/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday,
  Tuesday,
  Wensday,
  Thursday,
  Friday,
  Satufday,
  Sunday,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Satufday || day === DayOfWeek.Sunday;
}
