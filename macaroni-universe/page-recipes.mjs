import recipes from "./recipes.mjs";

/*
    Templating Funcitons
*/
function getRatingTemplate(rating) {
    let template = "";
    
    for (let i = 0; i < 5; i++) {
        template += rating > i ? "★" : "☆";
    }

    return template;
}

function getIngredientsTemplate(ingredients) {
    let template = `<ul>`;

    ingredients.forEach(ingreident => template += `<li>${ingreident}</li>`);

    return `${template}</ul>`;
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
            <button id="share-recipe-${recipe.id}">Share!</button>
        </section>
    `;
}

/*
    Other Functions
*/
// Get elements
const shareableLinkDialog = document.getElementById("shareable-link-popup");
const linkInput = document.getElementById("uneditable-link-input");
const dialogOutput = document.getElementById("shareable-link-output");
const buttonCopyLink = document.getElementById("copy-link-button");
const buttonClose = document.getElementById("close-dialog");

// Show the shareable link popup
const showShareableLinkPopup = (recipeId) => {
    // Get the URL
    const url = `${window.location.origin}${window.location.pathname}?id=${recipeId}`;

    // Display the dialog, set the input's URL and select it
    shareableLinkDialog.showModal();
    linkInput.value = url;
    linkInput.select();
}

// When the copy link button is clicked
buttonCopyLink.addEventListener("click", () => {
    // We have to store the value in another variable or else the input will have it's
    // value cleared
    const link = linkInput.value;

    // Set the user's clipboard to the link
    navigator.clipboard.writeText(link).then(() => {
        // Notify the user that the link was copied
        dialogOutput.innerHTML = "Link Copied!";
    });
});

// Whenever the shareable link dialog is opened or closed
shareableLinkDialog.addEventListener("toggle", () => {
    // Reset output
    dialogOutput.innerHTML = "";
});

// When the close button is clicked
buttonClose.addEventListener("click", () => {
    // Hide the dialog
    shareableLinkDialog.close();
});

/*
    Initial Recipe Loading
*/
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

// Create the templates and append it to the recipe container
const recipeContainer = document.querySelector(".recipe-container");
loadedRecipes.forEach((recipe) => {
    recipeContainer.innerHTML += getRecipeTemplate(recipe);
});

// Add an onclick event to all the share buttons
loadedRecipes.forEach((recipe) => {
    // When the share button is clicked
    document.getElementById(`share-recipe-${recipe.id}`).addEventListener("click", () => {
        showShareableLinkPopup(recipe.id);
    });
});