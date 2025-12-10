import recipes from "./recipes.mjs";

function getCategoriesTemplate(categories) {
    let template = ``;
    categories.forEach((category, index) => {
        if (index > 0) template += ", ";
        template += `${category}`;
    });

    return template;
}

function getFeaturedRecipeTemplate(recipe) {
    return `
        <article class="recipe-preview">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-preview-content">
                <p>${getCategoriesTemplate(recipe.categories)}</p>
                <h3>${recipe.name}</h3>
                <p>${recipe.review}</p>
                <a href="recipes.html?id=${recipe.id}">Read more</a>
            </div>
        </article>
    `;
}

// Select 3 random recipes
const randomRecipes = [ recipes[0], recipes[1], recipes[2], recipes[2] ];

// Add the featured recipes
const recipeContainer = document.querySelector(".recipe-preview-container");
randomRecipes.forEach((recipe) => {
    recipeContainer.innerHTML += getFeaturedRecipeTemplate(recipe);
});

// Event Listeners
document.getElementById("#our-mission-call-to-action").addEventListener("click", () => {
    window.location.href = "recipes.html";
});