const mainImage = document.getElementById('mainProductImage');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    const imageUrl = thumb.dataset.image;
    if (!imageUrl || !mainImage) return;

    mainImage.src = imageUrl;

    thumbs.forEach((item) => item.classList.toggle('active', item === thumb));
  });
});

const buyButton = document.querySelector('.buy-btn');
if (buyButton) {
  buyButton.addEventListener('click', () => {
    buyButton.textContent = 'Added to Cart';
    buyButton.disabled = true;
    buyButton.style.opacity = '0.8';
  });
}
