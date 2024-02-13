<template>
    <div class="m-5">
    <h3>Counter</h3>
      <div class="counter-items">
        <button class="btn btn-outline-dark" @click="decrease">-</button>
        <p class="counter-value">Counter: {{ count }}</p>
        <button class="btn btn-outline-dark" @click="increase">+</button>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, computed } from 'vue';
  import { useCounterStore } from '~/store/counter';
  
  export default defineComponent({
    setup() {
      const store = useCounterStore();
  
      // Get the current count value from the store using a getter
      const count = computed(() => store.getCount);
  
      // Method to increase the counter value using a mutation
      const increase = () => {
        store.increment();
      };
  
      // Method to decrease the counter value using a mutation
      const decrease = () => {
        store.decrement();
      };
  
      return {
        count,
        increase,
        decrease
      };
    }
  });
  </script>
  
  <style scoped>
  .counter-container {
    display: flex;
    justify-content: center;
  }
  
  .counter-items {
    display: flex;
    align-items: center;
  }
  
  .counter-value {
    margin: 0 1rem;
  }
  </style>
  