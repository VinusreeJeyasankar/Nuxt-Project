import { defineStore } from 'pinia';

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
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
  }),
});
