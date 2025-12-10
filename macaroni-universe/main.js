import recipes from "./recipes.mjs";

function getRatingTemplate(rating) {
    let template = "";
    
    for (let i = 0; i < 5; i++) {
        template += rating > i ? "★" : "☆";
    }

    return template;
}

function getIngredientsTemplate(ingredients) {
    let template = `<ol>`;

    ingredients.forEach(ingreident => template += `<li>${ingreident}</li>`);

    return `${template}</ol>`;
}

function getDirectionsTemplate(directions) {
    let template = `<ol>`;

    directions.forEach(instruction => template += `<li>${instruction}</li>`);

    return `${template}</ol>`;
}

function getRecipeTemplate(recipe) {
    return `
        <section class="recipe" id="recipe-${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-content">
                <h2>${recipe.name}</h2>
                <p>${getRatingTemplate(recipe.rating)}</p>
                <p><b>Review:</b> ${recipe.review}</p>
                <h3>Ingredients</h3>
                ${getIngredientsTemplate(recipe.ingredients)}
                <h3>Directions</h3>
                ${getDirectionsTemplate(recipe.directions)}
            </div>
            <button>Share!</button>
        </section>
    `;
}

// Get the recipe that is in the URL and display it at the top
const loadedRecipes = recipes;
const urlParameters = new URLSearchParams(window.location.search);
const recipeId = urlParameters.get("id");
const recipeIndex = loadedRecipes.findIndex(recipe => recipe.id == recipeId);

// Move this recipe to the front
if (recipeId !== null) {
    let [ movedElement ] = loadedRecipes.splice(recipeIndex, 1);
    loadedRecipes.unshift(movedElement);
}

const recipeContainer = document.querySelector(".recipe-container");
loadedRecipes.forEach((recipe) => {
    recipeContainer.innerHTML += getRecipeTemplate(recipe);
});

// Share button click