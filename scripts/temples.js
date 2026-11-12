// ----- Hamburger menu -----
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open"); // show or hide the links
    menuButton.classList.toggle("open"); // switch the icon between ☰ and X
});

// ----- Footer dates -----
const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
