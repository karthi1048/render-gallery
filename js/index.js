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

// Share
function shareMedia(url, text){
    if (navigator.share){
        navigator.share({
            title: 'Render Gallery image',
            text: text,
            url: window.location.origin + '/' + url
        }).catch(console.error);
    } else{
        alert('Sharing not supported in this browser.');
    }
}