document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting us!');
            form.reset();
        });
    }

    // Hiển thị nút See More nếu nội dung vượt quá 540px
    var aboutContent = document.querySelector('.about-us-content');
    var readMoreLink = document.querySelector('.read-more-link');
    var fadeOverlay = document.querySelector('.about-us-fade');
    if (aboutContent && readMoreLink && fadeOverlay) {
        if (aboutContent.scrollHeight > 540) {
            readMoreLink.style.display = 'block';
            fadeOverlay.style.display = 'block';
            aboutContent.style.maxHeight = '540px';
            aboutContent.style.overflow = 'hidden';
            readMoreLink.addEventListener('click', function(e) {
                e.preventDefault();
                aboutContent.style.maxHeight = 'none';
                aboutContent.style.overflow = 'visible';
                readMoreLink.style.display = 'none';
                fadeOverlay.style.display = 'none';
            });
        } else {
            fadeOverlay.style.display = 'none';
        }
    }

    // Set the copyright year dynamically if the footer year element exists
    (function setFooterYear(){
        try{
            var y = new Date().getFullYear();
            var el = document.getElementById('footer-year');
            if(el) el.textContent = y;
        }catch(e){
            // ignore
        }
    })();
});
