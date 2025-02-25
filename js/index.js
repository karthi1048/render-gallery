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
            title: 'Render Gallery',
            text: text,
            url: window.location.origin + '/' + url
        }).catch(console.error);
    } else{
        alert('Sharing not supported in this browser.');
    }
}

// Search
function searchImages(){
    let input = document.getElementById('searchBar').value.toLowerCase();
    let imgContainers = document.querySelectorAll("#gallery-img .image-container");

    imgContainers.forEach(container => {
        let img = container.querySelector('picture img');
        let altText = img.alt.toLowerCase();
        let fileName = img.src.split('/').pop().toLowerCase();

        if(altText.includes(input) || fileName.includes(input)){
            container.style.display = "block";
        } else{
            container.style.display = "none";
        }
    });
}