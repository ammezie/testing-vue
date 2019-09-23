<template>
  <div>
    <div>Counter: {{ count }}</div>

    <button @click="increment">Increase</button>
    <button @click="decrement">Decrease</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0
  }),
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    }
  }
};
</script>
