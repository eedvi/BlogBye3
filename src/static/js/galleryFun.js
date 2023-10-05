document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.grid-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    
    images.forEach(function (image, index) {
        image.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;
            lightboxImg.dataset.index = index;
        });
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox || event.target === closeBtn) {
            lightbox.style.display = 'none';
        }
    });

    document.addEventListener('keydown', function (event) {
        if (lightbox.style.display === 'flex' && (event.key === 'Escape' || event.key === 'Esc')) {
            lightbox.style.display = 'none';
        } else if (event.key === 'ArrowLeft') {
            navigate(-1);
        } else if (event.key === 'ArrowRight') {
            navigate(1);
        }
    });

    function navigate(offset) {
        const currentIndex = parseInt(lightboxImg.dataset.index);
        const newIndex = (currentIndex + offset + images.length) % images.length;
        lightboxImg.src = images[newIndex].src;
        lightboxImg.dataset.index = newIndex;
    }
});
