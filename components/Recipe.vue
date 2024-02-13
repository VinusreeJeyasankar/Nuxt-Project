<template>
    <NuxtLink :to="'/recipes/' +id ">
        <article class="recipe">
            <div class="thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
            <h3>{{ title }}</h3>
            <p>{{ previewText }}</p>
        </article>
    </NuxtLink>
</template>

<script>
export default{
    props: ['thumbnail', 'title', 'previewText', 'id' ],
    mounted() {
        // execute after the component is mounted on the client-side
        console.log('Component mounted');
    },
}
</script>

<style scoped>
a{
    text-decoration: none !important;
    color: #000;
}
.recipe{
    box-sizing: border-box;
    width: 280px;
    padding: 10px;
    margin: 15px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #aaa;
}
.thumbnail{
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
}
</style>