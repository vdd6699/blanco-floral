document.addEventListener('DOMContentLoaded', function() {
    // Pricing option focus effect
    const priceOptions = document.querySelectorAll('.price-option');
    priceOptions.forEach(function(opt) {
        opt.addEventListener('click', function() {
            priceOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
        });
    });
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

    // Slide preview logic
    const slideImgs = [
        'assets/flower.avif',
        'assets/blanco-logo.avif',
        'assets/bloomnationLogo.svg',
        'assets/prosper-florist-flower-delivery.png',
        'assets/flower.avif' // Thêm lại hình đầu để demo chuyển slide mượt
    ];
    let slideIndex = 0;
    const mainImg = document.getElementById('mainProductImg');
    const slidePrevBtn = document.getElementById('slidePrev');
    const slideNextBtn = document.getElementById('slideNext');
    const slideImgEls = document.querySelectorAll('.slide-img');

    function updateSlideImages() {
        for (let i = 0; i < slideImgEls.length; i++) {
            const imgIdx = (slideIndex + i) % slideImgs.length;
            slideImgEls[i].src = slideImgs[imgIdx];
            slideImgEls[i].setAttribute('data-img', slideImgs[imgIdx]);
            slideImgEls[i].classList.remove('active');
        }
        // Focus mặc định vào hình đầu tiên
        slideImgEls[0].classList.add('active');
        mainImg.src = slideImgs[slideIndex % slideImgs.length];
    }

    if (slidePrevBtn && slideNextBtn && slideImgEls.length) {
        updateSlideImages();
        slidePrevBtn.addEventListener('click', function() {
            slideIndex = (slideIndex - 1 + slideImgs.length) % slideImgs.length;
            updateSlideImages();
        });
        slideNextBtn.addEventListener('click', function() {
            slideIndex = (slideIndex + 1) % slideImgs.length;
            updateSlideImages();
        });
        slideImgEls.forEach(function(img, idx) {
            img.addEventListener('click', function() {
                slideImgEls.forEach(i => i.classList.remove('active'));
                img.classList.add('active');
                mainImg.src = img.getAttribute('data-img');
            });
        });
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
