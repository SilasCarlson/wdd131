import recipes from "./recipes.mjs";

function getTagsTemplate(recipe) {
    let tagsHTML = ``;

    recipe.tags.forEach((tag) => tagsHTML += `<p class="tag">${tag}</p>`);

    return `
        <div class="tags-container">
            ${tagsHTML}
        </div>
    `;
}

function getRatingTemplate(recipe) {
    let ratingHTML = ``;

    for (let i = 1; i <= 5; i++) {
        if (recipe.rating >= i) {
            ratingHTML += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            ratingHTML += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    return `
        <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
            ${ratingHTML}
        </span>
    `;
}

function getRecipeTemplate(recipe) {
    return `
        <section class="recipe">
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-content">
                ${getTagsTemplate(recipe)}
                <h2 class="recipe-name">${recipe.name}</h2>
                ${getRatingTemplate(recipe)}
                <p class="recipe-description">${recipe.description}</p>
            </div>
        </section>
    `;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRecipe() {
    return recipes[randomNumber(0, recipes.length - 1)];
}

function renderRecipes(recipeList) {
    const recipeContainer = document.getElementById("recipe-container");

    let html = ``;
    recipeList.forEach((recipe) => html += getRecipeTemplate(recipe));

    recipeContainer.innerHTML = html;
}

function filterRecipes(searchQuery) {
    // Filter recipes
    const filteredRecipes = recipes.filter((recipe) => {
        // You should check to see if the search term (query) shows up in the name, or the 
        // descriptions, or the tag list, or the ingredients list. 
        if (recipe.name.toLowerCase().includes(searchQuery) || recipe.description.toLowerCase().includes(searchQuery)) {
            return true;
        }

        // Tags list
        if (recipe.tags.find((tag) => tag.toLowerCase().includes(searchQuery))) {
            return true;
        }

        // Ingredients list
        if (recipe.recipeIngredient.find((ingredient) => ingredient.toLowerCase().includes(searchQuery))) {
            return true;
        }

        // Default
        return false;
    });

    // Sort the recipes alphabetically
    filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));

    // Render
    renderRecipes(filteredRecipes);
}

function init() {
    const recipe = getRandomRecipe();
    renderRecipes([ recipe ]);
}

init();

document.getElementById("recipe-search").addEventListener("submit", function(event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Handle data
    const searchQuery = document.getElementById("recipe-name-input").value.toLowerCase();
    filterRecipes(searchQuery);
});