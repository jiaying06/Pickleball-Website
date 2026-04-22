// membership.js

document.getElementById("membership-form").addEventListener
("submit", function(e){
    e.preventDefault();
    alert("Thank you for registering! \uD83C\uDF89 We will contact you soon \uD83D\uDE0B");
});

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const images = document.querySelectorAll('.highlight-images img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            if (lightbox && lightboxImg) {
                lightbox.style.display = 'flex'; 
                lightboxImg.src = img.src;      
                document.body.style.overflow = 'hidden'; 
                
                setTimeout(() => {
                    lightbox.style.opacity = '1';
                }, 10);
            }
        });
    });

    if (lightbox) {
        lightbox.addEventListener('click', () => {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                lightbox.style.display = 'none'; 
                document.body.style.overflow = 'auto'; 
            }, 300);
        });
    }
});