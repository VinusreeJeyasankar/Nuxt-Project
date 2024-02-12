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
import { useRecipeStore } from '@/store/recipesStore.js';

export default {
    components: {
        Recipe
    },
    setup() {
        const recipeStore = useRecipeStore();

        return {
        recipes: recipeStore.recipes,
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
