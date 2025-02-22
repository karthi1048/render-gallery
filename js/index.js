// Back To Top

document.addEventListener('DOMContentLoaded', function () {
    let backToTopBtn = document.getElementById('back-to-top');

    window.onscroll = function () {
        if(document.documentElement.scrollTop > 300){
            backToTopBtn.style.display = 'block';
        }
        else {
            backToTopBtn.style.display = 'none';
        }
    };

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});

// Modal
document.querySelectorAll("#gallery-img picture").forEach(picture => {
    picture.addEventListener('click', function () {
        document.getElementById('modalImage').src = this.getAttribute('data-bs-src');
        document.getElementById('modalDescription').textContent = this.getAttribute('data-bs-desc');
    });
});