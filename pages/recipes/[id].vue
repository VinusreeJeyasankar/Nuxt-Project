<template>
    <section class="single-recipe">
        <h1>{{ title }}</h1>
        <div>
            <img :src="getThumbnailURL(id)" alt="Recipe Image" class="recipe-image" />
        </div>
        <p>{{ previewText }}</p>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useRecipeStore } from '@/store/recipesStore.js';

const { id } = useRoute().params;
const recipeStore = useRecipeStore();

// Function to generate the thumbnail URL based on the ID
const getThumbnailURL = (id) => {
    const recipe = recipeStore.recipes.find(recipe => recipe.id === id);
    return recipe ? recipe.thumbnail : '';
};

// Fetch title and previewText from the store based on ID
const recipe = recipeStore.recipes.find(recipe => recipe.id === id);
const title = recipe ? recipe.title : '';
const previewText = recipe ? recipe.previewText : '';

// transition rotate
definePageMeta({
    pageTransition: {
        name: 'rotate'
    }
});
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
