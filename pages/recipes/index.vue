<template>
    <div class="m-5">
        <h1 class="recipes-heading">Recipes</h1>
        <section class="recipes">
            <Recipe
                v-for="recipe in recipes"
                :key="recipe.id"
                :thumbnail="recipe.thumbnail"
                :title="recipe.title"
                :id="recipe.id"
                :previewText="recipe.previewText"
            />
        </section>
    </div>
</template>

<script>
import Recipe from '@/components/Recipe.vue';

export default {
    components: {
        Recipe
    },
    data() {
        return {
            recipes: [
                {
                    id: "1",
                    title: "Indian Cuisine",
                    previewText: "Let's try Indian Cuisine",
                    thumbnail: "https://i0.wp.com/travelgenes.com/wp-content/uploads/2020/10/1018267651.jpg?fit=780%2C902&ssl=1"
                },
                {
                    id: "2",
                    title: "Korean Cuisine",
                    previewText: "Let's try Korean Cuisine",
                    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjsXNGO4WTL-iOGz4QXxF6nfA-eKW6cY-uw&usqp=CAU"
                },
                {
                    id: "3",
                    title: "Chinese Cuisine",
                    previewText: "Let's try Chinese Cuisine",
                    thumbnail: "https://voicesfromthekitchen.org/wp-content/uploads/2021/10/Chinese-Cuisine-1.jpg"
                },
            ]
        };
    },
    head() {
        return {
            title: 'Recipes', // Set the title of the page
        };
    },
}
</script>

<style scoped>
.recipes-heading{
    text-align: center;
}
.recipes {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
}
</style>
