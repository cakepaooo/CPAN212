const _ = require ("lodash");
const holidays = [
    { name: "Chirstmas", date: "2025-12-25"},
    { name: "Canada Day", date: "2025-07-01"},
    { name: "New Year", date: "2026-01-01"},
];

const daysUntil = (holidayDate) => {
const today  = new Date();
const holiday = new Date(holidayDate);
const difftime = holiday - today;
return Math.ceil(difftime/(1000*60*60*24));
}

holidays.forEach(({ name, date }) =>
    console.log(`${name}: ${daysUntil(date)} days left`)
  );
  
 const randomHolidays = _.sample(holidays);
 console.log("\nRandom Holidays:");
 console.log(`Name: ${randomHolidays.name}, Date: ${randomHolidays.date}`);

 console.log("\nIndexes of specific holidays:");
 console.log(
    `Christmas: ${_.findIndex(holidays, { name: "Christmas" })}, Canada Day: ${_.findIndex(holidays, { name: "Canada Day" })}`
 )


