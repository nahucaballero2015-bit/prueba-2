const sortSelect = document.getElementById('sort');
const productsContainer = document.getElementById('products-container');

sortSelect.addEventListener('change', () => {
  let cards = Array.from(productsContainer.children);
  if(sortSelect.value === 'az') {
    cards.sort((a, b) => a.querySelector('h3').innerText.localeCompare(b.querySelector('h3').innerText));
  } else {
    cards.sort((a, b) => b.querySelector('h3').innerText.localeCompare(a.querySelector('h3').innerText));
  }
  cards.forEach(card => productsContainer.appendChild(card));
});
