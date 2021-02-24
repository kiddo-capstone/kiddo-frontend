export const convertDate = (date) => {
  let stringDate = new Date(date).getUTCDate();
  let stringDay = new Date(date).getUTCDay();
  stringDay =
    stringDay === 0
      ? "Monday"
      : stringDay === 1
      ? "Tuesday"
      : stringDay === 2
      ? "Wednesday"
      : stringDay === 3
      ? "Thursday"
      : stringDay === 4
      ? "Friday"
      : stringDay === 5
      ? "Saturday"
      : "Sunday";
  return { stringDate, stringDay };
};
