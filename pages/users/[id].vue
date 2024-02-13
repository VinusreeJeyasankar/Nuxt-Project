<template>
    <div class="m-5">{{ data }}</div>
</template>
<script setup>
const { id } = useRoute().params;
const { data } = await useFetch(`https://dummyjson.com/users/${id}`)
// const { data } = await useAsyncData(`${id}`, () => $fetch(`https://dummyjson.com/users/${id}`))
</script>