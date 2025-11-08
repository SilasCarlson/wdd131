// ./ is required notation for modules in JS
import { participantTemplate, successTemplate } from "./Templates.js";

function totalFees() {
    let totalFees = 0;
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    feeElements.forEach((element) => {
        totalFees += parseInt(element.value);
    });

    return totalFees;
}

const addButton = document.getElementById("add");
const form = document.querySelector("form");
const summary = document.getElementById("summary");

// ommiting var here will cause the program to throw an undefined error
// using let would not suffice because this will be used throughout the program
var participantCount = 1;

addButton.addEventListener("click", function() {
    // Increment the participant count
    participantCount++;

    // The string needs to be converted to a JS element type otherwise the console will throw
    // an error and will not work because the template is not of an element type which is requried
    // to use the insertAdjacentElement function
    const template = new DOMParser().parseFromString(participantTemplate(participantCount), "text/html");
    const element = template.body.firstChild; // grab the element from the provided content

    // Add the element right before the add button
    addButton.insertAdjacentElement("beforebegin", element);
});

form.addEventListener("submit", function(event) {
    // prevent the page from reloading on submit
    event.preventDefault();

    // hide the form
    form.classList.add("hidden");

    // update the summary
    summary.innerHTML = successTemplate({
        adultName: document.getElementById("adult_name").value,
        participantCount: participantCount,
        fees: totalFees()
    });
});