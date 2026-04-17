const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".publication-card");
const searchInput = document.getElementById("searchInput");

let activeFilter = "all";

function filterCards() {
  const searchText = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const category = card.getAttribute("data-category");
    const text = card.innerText.toLowerCase();

    const matchesFilter = activeFilter === "all" || category === activeFilter;
    const matchesSearch = text.includes(searchText);

    if (matchesFilter && matchesSearch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.getAttribute("data-filter");
    filterCards();
  });
});

searchInput.addEventListener("input", filterCards);

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);