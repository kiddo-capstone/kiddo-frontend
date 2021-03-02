export const convertDate = date => {
  let stringDate = new Date(date).getUTCDate();
  let stringDay = new Date(date).getUTCDay();
  stringDay =
    stringDay === 1
      ? "Monday"
      : stringDay === 2
      ? "Tuesday"
      : stringDay === 3
      ? "Wednesday"
      : stringDay === 4
      ? "Thursday"
      : stringDay === 5
      ? "Friday"
      : stringDay === 6
      ? "Saturday"
      : "Sunday";
  return { stringDate, stringDay };
};
