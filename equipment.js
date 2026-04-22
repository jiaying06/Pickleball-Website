// equipment.js
function toggleDark() {
  document.body.classList.toggle("dark");
}

function filterItems(type) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (type === 'all' || card.classList.contains(type)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

window.onload = function () {
  const images = document.querySelectorAll(".card img");
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  images.forEach(img => {
    img.onclick = function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
    }
  });
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
