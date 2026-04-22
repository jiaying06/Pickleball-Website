// mission.js

const cards = document.querySelectorAll('.vmo-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const targetId = card.dataset.target;
    const detail = document.getElementById(targetId);

    document.querySelectorAll('.vmo-detail').forEach(d => {
      if (d !== detail) d.classList.remove('active');
    });

    document.querySelectorAll('.vmo-card').forEach(c => {
      if (c !== card) c.classList.remove('active');
    });

    detail.classList.toggle('active');
    card.classList.toggle('active');

    detail.scrollIntoView({behavior: 'smooth', block: 'center'});
  });
});
