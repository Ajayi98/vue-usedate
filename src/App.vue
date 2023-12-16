<script>
import useDate from './components/useDate';
export default {
  setup() {
    const { date, getDay, getMonth, addDay, addMonth } = useDate();

    const addOneDay = () => {
      addDay(1);
    };

    const addOneMonth = () => {
      addMonth(1);
    };

    return {
      date,
      getDay,
      getMonth,
      addOneDay,
      addOneMonth,
    };
  },
};
</script>

<template>
 
      <div>
    <p>Current Date: {{ date.toDateString() }}</p>
    <p>Current Day: {{ getDay() }}</p>
    <p>Current Month: {{ getMonth() }}</p>
    <button @click="addOneDay">Add One Day</button>
    <button @click="addOneMonth">Add One Month</button>
  </div>
   

  
</template>

<style scoped>
* {
  box-sizing: border-box;
}

header {
  line-height: 1.5;
}

button {
  background: #474444;
  border: 1px solid #352d2d;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  button{
    margin-left: 10px;


  }
}
</style>
