const recipes = [
    {
        name: "Apple Crisp",
        description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
        rating: 4,
        tags: ["dessert"],
        image: "images/apple-crisp.jpg",
        alt: "A bowl of apple crisp topped with vanilla ice cream"
    },
    {
        name: "Black Beans and Rice",
        description: "This black beans and rice recipe is a hearty and flavorful dish that's perfect for a quick weeknight dinner.",
        rating: 3,
        tags: ["main course", "vegetarian"],
        image: "images/black-beans-and-rice.jpg",
        alt: "A plate of black beans and rice garnished with fresh herbs"
    },
    {
        name: "Chicken Curry",
        description: "This chicken curry recipe is a flavorful and aromatic dish that's perfect for a cozy dinner at home.",
        rating: 4,
        tags: ["main course", "spicy"],
        image: "images/chicken-curry.webp",
        alt: "A bowl of chicken curry served with rice"
    },
    {
        name: "Chocolate Chip Cookies",
        description: "This chocolate chip cookie recipe is a classic treat that's perfect for any occasion.",
        rating: 5,
        tags: ["dessert"],
        image: "images/chocolate-chip-cookies.jpg",
        alt: "A plate of freshly baked chocolate chip cookies"
    },
    {
        name: "Escalopes de Poulet a la Creme",
        description: "This Excalopes de Poulet a la Creme recipe is a rich and creamy dish that's perfect for a special occasion.",
        rating: 4,
        tags: ["main course", "French"],
        image: "images/escalopes-de-poulet-a-la-creme.webp",
        alt: "A plate of Excalopes de Poulet a la Creme garnished with fresh herbs"
    },
    {
        name: "German Gooseberry Cake",
        description: "This German Gooseberry Cake recipe is a light and fruity dessert that's perfect for spring and summer.",
        rating: 4,
        tags: ["dessert", "fruit"],
        image: "images/german-gooseberry-cake.jpg",
        alt: "A slice of German Gooseberry Cake garnished with fresh gooseberries"
    },
    {
        name: "Roasted Potatoes",
        description: "This roasted potatoes recipe is a simple and delicious side dish that's perfect for any meal.",
        rating: 2,
        tags: ["side dish"],
        image: "images/roasted-potatoes.webp",
        alt: "A bowl of roasted potatoes garnished with fresh herbs"
    },
    {
        name: "Sweet Potato Waffles",
        description: "This sweet potato waffle recipe is a unique and flavorful breakfast dish that's perfect for a weekend brunch.",
        rating: 5,
        tags: ["breakfast", "vegetarian"],
        image: "images/sweet-potato-waffle-md.jpg",
        alt: "A stack of sweet potato waffles topped with fresh fruit and syrup"
    }
];

function recipeTemplate(recipe) {
    return `
    <article class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.alt}" class="recipe-image">
      <div class="recipe-info">
        <span class="tag">${recipe.tags[0]}</span>
        <h2>${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="description">${recipe.description}</p>
      </div>
    </article>
  `;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

const mainElement = document.querySelector("main");
const randomIndex = Math.floor(Math.random() * recipes.length);
mainElement.innerHTML = recipeTemplate(recipes[randomIndex]);

const searchForm = document.querySelector(".search-box");

function searchHandler(event) {
  event.preventDefault();
  const query = document.querySelector("#site-search").value.toLowerCase();

  const results = recipes.filter(function (recipe) {
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.find(function (tag) {
        return tag.toLowerCase().includes(query);
      })
    );
  });

  results.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  mainElement.innerHTML = results.map(recipeTemplate).join("");
}

searchForm.addEventListener("submit", searchHandler);