const themeSelector = document.getElementById("selectTheme");
const logo = document.getElementById("byuiLogo");

function changeTheme() {
    let currentTheme = themeSelector.value;

    if (currentTheme == "dark") {
        document.body.className = "dark";
        logo.src = "byui-logo_white.png";
    } else {
        document.body.className = "";
        logo.src = "byui-logo_blue.webp";
    }
}

themeSelector.addEventListener("change", changeTheme);