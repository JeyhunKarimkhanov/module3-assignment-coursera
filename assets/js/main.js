const button = document.querySelector(".mobile-nav-toggle");
const menuButton = document.querySelector(".menu-container");

button.addEventListener("click", function () {
    // Eğer menü gizliyse, göster; gösteriliyorsa, gizle.
    menuButton.style.display = (menuButton.style.display === "none") ? "block" : "none";
});
