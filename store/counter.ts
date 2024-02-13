import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: state => state.count,
  },
  // the state is directly mutated by actions
  actions: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
    // define an action to set the counter to a random value
    setRandomValue() {
      this.count = Math.floor(Math.random() * 100); // Set a random value between 0 and 100
    }
  },
});
