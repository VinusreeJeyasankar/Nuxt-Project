<template>
    <div class="m-5">{{ data }}</div>
</template>
<script setup>
const { id } = useRoute().params;
const { data } = await useFetch(`https://dummyjson.com/users/${id}`)

</script>


<!-- <template>
    <div class="m-5">{{ userData }}</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const { id } = useRoute().params;
  const userData = ref(null);
  
  // Fetch data on component mount
  onMounted(async () => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await response.json();
      userData.value = data;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  });
  </script>
   -->