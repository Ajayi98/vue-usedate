// useDate.js
import { ref } from 'vue';

const useDate = () => {
  // Use ref for reactive properties
  const date = ref(new Date());

  const getDay = () => {
    return date.value.getDay();
  };

  const getMonth = () => {
    return date.value.getMonth() + 1;
  };

  const addDay = (numberOfDays) => {
    const newDate = new Date(date.value);
    newDate.setDate(date.value.getDate() + numberOfDays);

    // Check if the new date exceeds the number of days in the month
    if (newDate.getMonth() !== date.value.getMonth()) {
      // If yes, set the date to the last day of the current month
      newDate.setDate(0);
    }

    date.value = newDate;
  };

  const addMonth = (numberOfMonths) => {
    const newDate = new Date(date.value);
    newDate.setMonth(date.value.getMonth() + numberOfMonths);

    // Check if the new date exceeds the number of months in a year
    if (newDate.getMonth() !== (date.value.getMonth() + numberOfMonths) % 12) {
      // If yes, set the date to the last day of the current month in the next year
      newDate.setMonth(11);
      newDate.setDate(0);
    }

    date.value = newDate;
  };

  return { date, getDay, getMonth, addDay, addMonth };
};

export default useDate;
