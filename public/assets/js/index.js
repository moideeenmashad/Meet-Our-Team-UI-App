const cards = document.getElementsByClassName("card");
let activeCard = null;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    if (activeCard !== null) {
      activeCard.style.backgroundColor = "";
    }
    if (activeCard === this) {
      activeCard = null;
    } else {
      this.style.backgroundColor = "white";
      activeCard = this;
    }
  });
}
