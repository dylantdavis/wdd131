const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 25,
    health: 120,
    image: "images/snortleblat.webp",

    attacked() {
        this.health = this.health - 20;
        if (this.health <= 0) {
        this.health = 0;
        updateCard();
        alert(this.name + " has died!");
        } else {
        updateCard();
        }
    },

     levelUp() {
        this.level = this.level + 1;
        updateCard();
    }
};

function updateCard() {
  document.querySelector("#name").textContent = character.name;
  document.querySelector("#charClass").textContent = character.class;
  document.querySelector("#level").textContent = character.level;
  document.querySelector("#health").textContent = character.health;
  document.querySelector("#image").src = character.image;
}

updateCard(); // show the starting values when the page loads

document.querySelector("#image").src = character.image;

document.querySelector("#attackBtn").addEventListener("click", function () {
  character.attacked();
});

document.querySelector("#levelBtn").addEventListener("click", function () {
  character.levelUp();
});