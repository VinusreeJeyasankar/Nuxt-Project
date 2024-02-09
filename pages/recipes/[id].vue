<template>
    <section class="single-recipe">
        <h1>Title {{ id }}</h1>
        <div>
            <img :src="getThumbnailURL(id)" alt="Recipe Image" class="recipe-image" />
        </div>
        <p>Recipe description</p>
    </section>
</template>

<script setup>
const { id } = useRoute().params;

// Function to generate the thumbnail URL based on the ID
const getThumbnailURL = (id) => {
    switch (id) {
        case '1':
            return 'https://i0.wp.com/travelgenes.com/wp-content/uploads/2020/10/1018267651.jpg?fit=780%2C902&ssl=1';
        case '2':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjsXNGO4WTL-iOGz4QXxF6nfA-eKW6cY-uw&usqp=CAU';
        case '3':
            return 'https://voicesfromthekitchen.org/wp-content/uploads/2021/10/Chinese-Cuisine-1.jpg';
        default:
            return ''; // Default thumbnail URL or empty string
    }
};
definePageMeta({
    pageTransition: {
        name: 'rotate'
    }
})
</script>

<style scoped>
.single-recipe {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
}

.recipe-image {
    width: 100%;
    height: 500px;
}
</style>
